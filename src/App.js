
import './App.css';
//import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
//import Dogs from "./components/Dogs";
//import Owners from "./components/Owners";
//import Search from "./components/Search";
// import getDogs from "./Api";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {useHistory, useParams} from "react-router-dom";

//   let dogsData = getDogs();
//   for(let i = 0; i < dogList.length; i++) {
//     let dogData = dogsData[i]
//     setDogList(...dogList, dogData)
//     console.log(dogData)
//   }



function App() {
  


  return (
    <main>
      <Router>
      <Switch>

        <Route exact path="/">
          <Welcome/>
          <Menu/>
        </Route>


      </Switch>
    </Router>
    </main>
    
    

  )
  
}

export default App;
