import React from 'react'
import {Navbar,Nav,} from 'react-bootstrap'
import CartWidget from './componenteimagen/CartWidget'
import './styles/Nav.css'
function AppNavbar() {
return (
    <div>
        <Navbar className='navegador' expand="lg">
    <Navbar.Brand className='logo' href="#home">Vixis</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="menu">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <Nav.Link href="#link">Contactos</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <CartWidget/>
</Navbar>
    </div>
)
}

export default AppNavbar