import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import showtravel from "./components/showTravel";
import LocationList from "./components/locationlist.component";
import EditExercise from "./components/edit-exercise.component";
import CreateLocation from "./components/create-location.component";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
   <Router>
      <Navbar />
      <Header />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/travel" exact component={LocationList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/createLocation" component={CreateLocation} />
      <Route path="/getLocation/:id" component={showtravel} />
      <br/>
      {/* <Signup /> */}
      {/* <Contact /> */}
      <Footer />
     
   </Router> 
  );
}

export default App;
