import React from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

import Header from './context/components/header/header.js';
import Form from './context/components/todo/form.js';
import List from './context/components/todo/list.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
