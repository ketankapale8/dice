
import Header from './common/Header/Header'
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"


function App() {
  return (
    <div >
    <Header/>
    <Home/>
    <ToastContainer/>
    </div>
  )
}

export default App
