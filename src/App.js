import './App.css';
import NavBar from './components/Navbar/Navbar';
import FormAddWorker from './components/FormAddWorker/FormAddWorker';
import ListWorker from './components/ListWorker/ListWorker';
import { lista } from './Lista';
import { useState } from 'react';

function App() {
  const [listaColab, setListaColab] = useState(lista);
  

  const handlerClickAdd = (e) => {
   setListaColab([...listaColab,{id:listaColab.length + 1, ...e}]);
  };
  const handlerSearchNavbar = (listafilter) => {
    const newLista = listafilter.length == 0 ? lista : listafilter;
    setListaColab([...newLista]);
   };
  return (
    <>
    <NavBar 
    onChangeNavbar = {(e) => handlerSearchNavbar(e)}
     lista={listaColab} />
    <section>
      <FormAddWorker onClickAddWorker={(e) => handlerClickAdd(e)} />
      <hr />
      <div className="listWorkerContainer">
      <ListWorker lista={listaColab}/>
      </div>
    </section>
    </>
  );
}

export default App;
