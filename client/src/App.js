import { Container} from "@material-ui/core";

import NavBar from './Components/navBar/navBar';
import {BrowserRouter, Route, Navigate} from 'react-router-dom'
import {Routes} from 'react-router';
import Home from './Components/Home/home';
import Auth from './Components/Auth/Auth';
import postDetails from "./Components/PostDetails/postDetails";



function App() {
  let user =   JSON.parse(localStorage.getItem("profile"));
  
  return (
    // Container with maxWidth will act like an Fluid container
    <Container maxWidth="xl">
      <BrowserRouter>
      <NavBar />
         <Routes>
          <Route path="/" element={<Navigate to="/posts" replace/>}/>
          <Route path="/posts" element= {<Home />}/>
          <Route path="/posts/search" element= {<Home />}/>
          <Route path="/posts/:id" element= {<postDetails />}/>
          <Route path="/Auth" element={!user? <Auth /> : <Navigate to="/posts" replace/>} /> 
        </Routes>
      </BrowserRouter>
      {/* <Home />
      {/* // Grow component need an "in" argumemt to make its child component visible */}
      
    </Container>
  );
}

export default App;