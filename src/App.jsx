import { useState } from 'react'
import MainMenu from './components/MainMenu/MainMenu'
import Nosotros from './components/Nosotros/Nosotros'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('menu')

  const handleUserLogin = () => {
    window.alert('Acceso como usuario en preparacion.')
  }

  const handleGuestLogin = () => {
    setCurrentView('nosotros')
  }

  const handleBackToMenu = () => {
    setCurrentView('menu')
  }

  return (
    <main className={`app-shell${currentView === 'nosotros' ? ' app-shell--page' : ''}`}>
      {currentView === 'menu' ? (
        <MainMenu onUserLogin={handleUserLogin} onGuestLogin={handleGuestLogin} />
      ) : (
        <Nosotros onBack={handleBackToMenu} />
      )}
    </main>
  )
}

export default App
