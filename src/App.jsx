import './App.css'
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {

  return (
    <div>
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search For Artist"
            type="input"
            aria-label="Search for an Artist"
            //onKeyDown={} // search function
            //onChange={} // setSearch
            style={{
            backgroundColor: "#5f5d5d",
            width: "300px",
            height: "35px",
            borderWidth: "0px",
            borderStyle: "solid",
            borderRadius: "5px",
            marginRight: "10px",
            paddingLeft: "10px",
            }}
          />

          <Button onClick={{}} style={{backgroundColor: "#000000", color: "white"}}>Search</Button>
        </InputGroup>
      </Container>
    </div>
  )
}

export default App
