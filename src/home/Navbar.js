import React, {useState, useEffect} from 'react';
import { Navbar, NavbarBrand, Button, Modal, ModalBody, ModalFooter, ModalHeader, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import Login from "../auth/Login";
import MyBooks from "../books/MyBooks"

const Sitebar = (props) => {
    const {
        buttonLabel,
        className
      } = props;

      const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
      }

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

      let buttonStyle = {
          backgroundColor: "#07103A",
          color: "#ffffff"
      }
      const [sessionToken, setSessionToken] = useState('');

      useEffect(() => {
        if (localStorage.getItem('token')){
          setSessionToken(localStorage.getItem('token'));
        }
      }, [])

      const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
      }
      
      const logout=() => {
        localStorage.clear();
        window.location.href='/'
      }

      const NoAuth =(props)=> {
        return(
          <Navbar className="App" id="nav">
          <NavbarBrand className="brandButton" href="/">Bookies</NavbarBrand>
              <Button style={buttonStyle} onClick={toggle}>Log In</Button>
                  <Modal isOpen={modal} toggle={toggle} onSubmit={toggle}className="login">
                  <ModalHeader toggle={toggle}>Welcome back!</ModalHeader>
                  <ModalBody>
                      <Login updateToken={props.updateToken} />
                  </ModalBody>
                  </Modal>
      </Navbar>
        )
      }

      const AuthBar =() => {
        return (
          <Navbar className="App" id="nav">
          <NavbarBrand className="brandButton" href="/">Bookies</NavbarBrand>
              <NavLink className='navLink' onClick={<MyBooks />}>My Books</NavLink>
              <NavLink className='navLink' href="">All Books</NavLink>
              <NavLink>Logout</NavLink>
          
      </Navbar>
        )
      }

      const protectedNav = () => {
        return (sessionToken === localStorage.getItem('token') ? <AuthBar token={sessionToken}/>
        : <NoAuth updateToken={updateToken}/>)
      }
    
    return (
        <div>
          {protectedNav()}   
        </div>
          )
      }
        

export default Sitebar;