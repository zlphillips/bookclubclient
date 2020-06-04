import React, {useState, useEffect} from 'react';
import { Navbar, NavbarBrand, Button} from 'reactstrap';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

const Sitebar = (props) => {
    const {
        buttonLabel,
        className
      } = props;

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


      const AuthBar =() => {
        return (
          <Navbar className="App" id="nav">
          <NavbarBrand className="brandButton" href="/">Bookies</NavbarBrand>
              <Button style={buttonStyle} onClick={logout}>Logout</Button>
          </Navbar>
        )
      }

    
    return (
        <div>
          {AuthBar()}  
        </div>
          )
      }
        

export default Sitebar;