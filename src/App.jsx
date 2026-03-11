import MainMenu from './components/MainMenu'
import './App.css'

function App() {
  const handleUserLogin = () => {
    window.alert('Acceso como usuario en preparacion.')
  }

  const handleGuestLogin = () => {
    window.alert('Acceso como invitado en preparacion.')
  }

  return (
    <main className="app-shell">
      <MainMenu onUserLogin={handleUserLogin} onGuestLogin={handleGuestLogin} />
    </main>
  )
}

export default App
