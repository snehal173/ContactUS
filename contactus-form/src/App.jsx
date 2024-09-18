
import Navbar from './components/Navbar'
import './App.css'
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
const App= ()=>{
   return (
    <div className='container'>
      <Navbar/>
      <Contact/>
      <ContactForm/>
    </div>
   );

};
export default App
