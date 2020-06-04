import React, { Component, useEffect, useState } from 'react';
import Auth from "./auth/Auth";
import Footer from "./home/Footer";
import BookIndex from "./books/BookIndex";
import MyBookIndex from './books/MyBookIndex';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <BookIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
}
  return (
    <div className="App">
      {protectedViews()}
      <Footer />
    </div>
  );
}

export default App;
