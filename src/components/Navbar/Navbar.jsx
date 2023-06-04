import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Input } from '../Input';
import "./Navbar.css"

function NavBar({onChangeNavbar, lista}) {

  const handlerSearch =(e)=>{
    const search = e.target.value;
    const resultadoBusqueda = lista.filter(
      (u) => 
      u.nombre.toLowerCase().includes(search) ||
      u.id.toString()===(search) ||
      u.correo.includes(search)
    );
    onChangeNavbar(resultadoBusqueda);
    

  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='textNavbar'>Buscador de colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>

                <Input placeholder="Ingrese el nombre o ID del colaborador" onChangeInput={handlerSearch}  className="inputBox"/>

            </Nav>
          
       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;