import React from 'react';
// import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'



function ListToDO(props) {
const toDo = props.request
console.log(toDo,'here');



  console.log(props, 'props')
  return ( 
    <div id="alert-boxes"> 
    <Card border="light" style={{ width: '50rem' }}>
<Card.Body id="to-do-list-list">
  
  <Card.Text>
  <ListGroup>
  <ListGroup.Item> No style </ListGroup.Item>
  <ListGroup.Item > Primary </ListGroup.Item>
  <ListGroup.Item variant="danger"> Secondary </ListGroup.Item>
  <ListGroup.Item > Success </ListGroup.Item>
  <ListGroup.Item > Danger </ListGroup.Item>
  <ListGroup.Item  > Warning </ListGroup.Item>
  <ListGroup.Item  > Info </ListGroup.Item>
  <ListGroup.Item  > Light </ListGroup.Item>
  <ListGroup.Item  > Dark </ListGroup.Item>
</ListGroup>
    </Card.Text>
</Card.Body>
</Card>
    
</div>
)
  }




  // 'primary' -blue
  // 'secondary' - grey,
  // 'success' - green,
  // 'danger', - red
  // 'warning', - yellow
  // 'info', - cyan
  // 'light', - white
  // 'dark', - dark grey

//   <Alert key={idx} variant={variant}>
//   This is a {variant} alert—check it out!
// </Alert>


export default ListToDO;
