import './App.css';
import Navbar from './Navbar';
import Skills from './pages/Skills'
import About from './pages/About'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import './styles.css'

function App() {
//   console.log(window.location)
//   let component
// switch (window.location.pathname){
//   case "/":
//     component = <Home />
//     break
//   case "/about":
//     component = <About />
//     break
//   case "/skills":
//     component = <Skills />
//     break
//   default:
//     break
// }
  return (
      <><Navbar />
      {/* {component} */}
      <div className = "container">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/skills" element={<Skills />} />
          <Route path = "/about" element={<About />} />
        </Routes>
      </div>

      </>
  );
}

export default App;
