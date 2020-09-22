import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



function FormToDO(props) {

const [request, setRequest] = useState({...props.request});
  
const onItemInput = (event) => {
  let task = event.target.value;
  setRequest({ ...request, task });

  console.log('on item input', event.target.value);
}

const onAssignedTo = (event) => {
  let assignedTo = event.target.value;
  setRequest({ ...request, assignedTo });

  console.log('on assigned to', event.target.value);
}

const onSliderInput = (event) => {
  let sliderValue = event.target.value;
  // console.log('value', event.target.value);
  
  if (sliderValue > 50) {
    // let variant="danger"
  } else {
    // let variant="success"
  }
  setRequest({...request, sliderValue});
}

const handleSubmit = (event) => {
  event.preventDefault();
  let infoFromSubmit = request;
  setRequest({...request, infoFromSubmit})

  // props.handler(request);
  // {task: "dsad", assignedTo: "fdfsd"}
  console.log('request', request);
}


  
  
  
  return (
  <div>
  <Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Add To Do Item</Card.Title>
    <Form.Group controlId="formGroupEmail">
    <Form.Label>To Do Item</Form.Label>
    <Form.Control type="text" placeholder="Item Details" onChange={onItemInput}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail" >
    <Form.Label>Assigned To</Form.Label>
    <Form.Control type="text" placeholder="Assignee Name" onChange={onAssignedTo}/>
  </Form.Group>
    <Form>
  <Form.Group controlId="formBasicRange" >
    <Form.Label></Form.Label>
    <Form.Control type="range" onChange={onSliderInput}/>
  </Form.Group>
  </Form >
    <Card.Text>
    </Card.Text>
    <Button variant="primary" onClick={handleSubmit}>Add Item</Button>
  </Card.Body>
</Card>
  </div>

);
}


export default FormToDO;


