import { useState, useEffect } from 'react'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from './firebase'
import MainMenu from './components/MainMenu/MainMenu'
import Nosotros from './components/Nosotros/Nosotros'
import UsuarioMenu from './components/UsuarioMenu/UsuarioMenu'
import UsuarioActionPage from './components/UsuarioActionPage/UsuarioActionPage'
import './App.css'

// Este objeto centraliza el contenido de cada seccion del espacio de usuario.
const userPages = {
  pagos: {
    eyebrow: 'Panel de pagos',
    title: 'Pagos del club',
    description:
      'Revisa el estado de tu cuota, controla proximos vencimientos y accede al resumen de tus pagos del club.',
    actionLabel: 'Ir al panel de pagos',
    highlights: ['Estado de cuota al dia', 'Vencimientos y avisos', 'Resumen de movimientos'],
  },
  cursos: {
    eyebrow: 'Formacion',
    title: 'Cursos online',
    description:
      'Entra al espacio de formacion para continuar tus cursos, revisar materiales y seguir aprendiendo a tu ritmo.',
    actionLabel: 'Ver cursos disponibles',
    highlights: ['Clases y materiales', 'Contenido actualizado', 'Acceso desde tu cuenta'],
  },
  reprocann: {
    eyebrow: 'Acompanamiento',
    title: 'Gestiona tu Reprocann',
    description:
      'Centraliza tu tramite, consulta los requisitos vigentes y ordena la documentacion necesaria para iniciar o renovar.',
    actionLabel: 'Gestionar tramite',
    highlights: ['Seguimiento del tramite', 'Documentacion requerida', 'Pasos de renovacion'],
  },
}

function App() {
  // Guarda la vista actual para decidir que pantalla mostrar.
  const [currentView, setCurrentView] = useState('menu')
  // UID del usuario autenticado con Firebase Auth.
  const [uid, setUid] = useState(null)
  // Estado del campo usuarioReprocann del documento en Firestore.
  const [usuarioReprocann, setUsuarioReprocann] = useState(null)
  // Controla la visibilidad del modal de documento.
  const [showDniModal, setShowDniModal] = useState(false)
  // Numero de documento ingresado en el modal.
  const [dniInput, setDniInput] = useState('')
  // Guarda temporalmente el user de Google hasta que se complete el modal.
  const [pendingUser, setPendingUser] = useState(null)

  // Restaura la sesion si el usuario ya estaba autenticado en esta ventana.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, 'usuarios', user.uid))
        if (snap.exists()) {
          setUid(user.uid)
          setUsuarioReprocann(snap.data().usuarioReprocann)
          setCurrentView('usuario')
        }
      }
    })
    return unsubscribe
  }, [])

  // Autentica con Google, crea el documento en Firestore si no existe y verifica permiso.
  const handleUserLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      const userRef = doc(db, 'usuarios', user.uid)
      const snap = await getDoc(userRef)

      if (!snap.exists()) {
        setPendingUser(user)
        setShowDniModal(true)
        return
      }

      if (snap.data().isMember === true) {
        setUid(user.uid)
        setUsuarioReprocann(snap.data().usuarioReprocann)
        setCurrentView('usuario')
      } else {
        console.warn('Usuario sin campo isMember.')
        alert('No tenes acceso. Contacta al administrador del club.')
        await auth.signOut()
      }
    } catch (error) {
      console.error('Error al autenticar:', error)
    }
  }

  // Confirma el DNI del modal y crea el documento en Firestore.
  const handleDniSubmit = async () => {
    if (!dniInput.trim() || !pendingUser) return
    try {
      const userRef = doc(db, 'usuarios', pendingUser.uid)
      await setDoc(userRef, {
        nombre: pendingUser.displayName || '',
        email: pendingUser.email || '',
        documento: dniInput.trim(),
        usuarioReprocann: false,
        isAdmin: false,
        isMember: false,
        creadoEn: new Date().toISOString(),
      })
      console.log('Documento creado para:', pendingUser.uid)
      setShowDniModal(false)
      setDniInput('')
      setPendingUser(null)
      alert('Tu cuenta fue registrada. Un administrador debe autorizar tu acceso.')
      await auth.signOut()
    } catch (error) {
      console.error('Error al guardar documento:', error)
    }
  }

  // Cancela el modal y cierra la sesion.
  const handleDniCancel = async () => {
    setShowDniModal(false)
    setDniInput('')
    setPendingUser(null)
    await auth.signOut()
  }

  // Lleva al visitante a la pantalla informativa del club.
  const handleGuestLogin = () => {
    setCurrentView('nosotros')
  }

  // Vuelve siempre al menu principal de entrada.
  const handleBackToMenu = () => {
    setCurrentView('menu')
  }

  // Cambia a la seccion elegida dentro del menu de usuario.
  const handleUserSectionNavigate = (section) => {
    setCurrentView(section)
  }

  // Desde una subpagina de usuario, regresa al menu interno.
  const handleBackToUserMenu = () => {
    setCurrentView('usuario')
  }

  // Busca la configuracion de la pagina actual si currentView coincide con una clave de userPages.
  const currentUserPage = userPages[currentView]

  return (
    <main className={`app-shell${currentView !== 'menu' ? ' app-shell--page' : ''}`}>
      {/* Renderiza una vista distinta segun el estado actual de la aplicacion. */}
      {currentView === 'menu' ? (
        <MainMenu onUserLogin={handleUserLogin} onGuestLogin={handleGuestLogin} />
      ) : currentView === 'usuario' ? (
        <UsuarioMenu onBack={handleBackToMenu} onNavigate={handleUserSectionNavigate} usuarioReprocann={usuarioReprocann} />
      ) : currentUserPage ? (
        <UsuarioActionPage {...currentUserPage} onBack={handleBackToUserMenu} />
      ) : (
        <Nosotros onBack={handleBackToMenu} />
      )}
      {/* Modal para ingresar numero de documento. */}
      {showDniModal && (
        <div className="dni-modal-overlay" onClick={handleDniCancel}>
          <div className="dni-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Numero de documento</h2>
            <p>Ingresa tu DNI para completar el registro.</p>
            <input
              type="text"
              className="dni-modal__input"
              placeholder="Ej: 12345678"
              value={dniInput}
              onChange={(e) => setDniInput(e.target.value)}
              autoFocus
            />
            <div className="dni-modal__actions">
              <button type="button" className="dni-modal__btn dni-modal__btn--primary" onClick={handleDniSubmit}>
                Confirmar
              </button>
              <button type="button" className="dni-modal__btn dni-modal__btn--secondary" onClick={handleDniCancel}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
