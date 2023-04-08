import { useState } from 'react'
import './App.scss'
import { Content, LeftSideBar, Navbar, RightSideBar } from './components'

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggle = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  
  return (
    <div className="App">
      <Navbar openMenu={toggle} />
      <main className="main-container">
        <LeftSideBar burgerMenu={hamburgerMenu} closeMenu={toggle} />
        <Content />
        <RightSideBar />
      </main>
    </div>
  );
}

export default App
