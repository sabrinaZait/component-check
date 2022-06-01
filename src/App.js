
import './App.css';
import Photo from "./components/profile/Profilephoto";
import Name from "./components/profile/FullName";
import Adress from "./components/profile/Adress";
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Adress/>
      <div>
      <Button className="success">Save</Button>{' '}
      <Button className="edit">Edit</Button> {' '}
      <Button className="danger">Delete</Button> {' '}  
      </div>
    </div>
  );
}

export default App;
