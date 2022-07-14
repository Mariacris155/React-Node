
import './App.css';

import videoclub from  './datos/videoclub';

import Cabecera from './Cabecera';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
   <Cabecera />
   <Main peliculas = {videoclub.peliculas}/>
   <Footer/>
   </>
  );
}

export default App;
