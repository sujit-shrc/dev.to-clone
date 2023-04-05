
import './App.scss'
import { Content, LeftSideBar, Navbar, RightSideBar } from './components'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <LeftSideBar />
        <Content />
        <RightSideBar />
      </main>
    </div>
  );
}

export default App
