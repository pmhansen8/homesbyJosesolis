import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import { Container } from 'react-bootstrap';

export default function NavigationBar({companyName="Homes by Jose Solis"}) {

    //Authstate
    const [authState, setAuthState ] = useState(null);
    //Transparent scroll navbar state
    const [pos, setPos] = useState("top")

    useEffect (()=>{     
      var path = window.location.pathname

      if(path == "/home"){
      document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
  
          if (scrolled >= 5){
             setPos("moved")
          } else {
             setPos("top")
          }
      })
    }else{
      setPos("moved")
    }
  },[])
    

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user) {
            setAuthState(false)
          }else{
            setAuthState(true)
          }
        });
      }, [])

//signout function
const Logout = () => {
  firebase.auth().signOut().then(()=>{
    <Redirect to="/" />
  })
  .catch((error)=>{
   toast(error, {type:"error"})
  })
}



  return (
  <Navbar expand="lg" className="navbar" 
  style={{backgroundColor: pos === "top" ? "" : "#fff", boxShadow: pos === "top" ? "" : "0.8px 0.8px 0.8px #000"}}
  >
  <Link to="/"><Navbar.Brand  className={pos === "top" ? "text-light brand-name": "text-dark brand-name"}>{companyName}</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"
      className={pos === "top" ? "text-light": "text-dark"}
      >Home</Nav.Link>
      {authState ? (
       <React.Fragment>
          <Nav.Link as={Link} to="/about" className={pos === "top" ? "text-light": "text-dark"}>About Us</Nav.Link>
      <Nav.Link as={Link} to="/listings" className={pos === "top" ? "text-light": "text-dark"}>Listings</Nav.Link>
      <Nav.Link as={Link} to="/contact-me" className={pos === "top" ? "text-light": "text-dark"}>Contact Me</Nav.Link>
           <Nav.Link as={Link} to="sellers" className={pos === "top" ? "text-light": "text-dark"}>Sellers</Nav.Link>
      </React.Fragment>
      ):""}
    </Nav>
    <Navbar.Collapse className="justify-content-end">
    <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} size="lg"
    className={pos === "top" ? "text-light dropdown-menu-bar": "text-dark dropdown-menu-bar"}
    spin/>}>
      {authState ? (
        <>
        <Container>
        <Nav.Link as={Link} to="/my-profile" className="text-dark">My Profile</Nav.Link>
        <Nav.Link as={Link} to="/my-bookings" className="text-dark">Saved Homes</Nav.Link>
        <Nav.Link as={Link} to="/mortgage-calculator" className="text-dark">Mortgage Calulator</Nav.Link>
        </Container>
        </>
        ) : (
          <>
        <NavDropdown.Item><Nav.Link as={Link} to="/">Login</Nav.Link></NavDropdown.Item>
        <NavDropdown.Item><Nav.Link as={Link} to="/">Signup</Nav.Link></NavDropdown.Item>
        <NavDropdown.Divider />
        </>
        )}
        {authState ? (
        <>
        <NavDropdown.Item><Button className="btn btn-danger" onClick={Logout}>Logout</Button></NavDropdown.Item>
        </>
        ) :""}
      </NavDropdown>

    {authState ? (
    <>
    <Navbar.Text>
      <Link to="/listings"><Button className="host-btn" variant="outline-primary">Search Homes</Button></Link>
    </Navbar.Text>
    </>
      ):""}

  </Navbar.Collapse>
  </Navbar.Collapse>
  {/* Error toast */}
  <ToastContainer/>
</Navbar>

    )
}
