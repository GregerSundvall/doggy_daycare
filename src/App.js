
import './App.css';
import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import { useState } from 'react';
import Dogs from "./components/Dogs";
import Owners from "./components/Owners";
import Search from "./components/Search";

// const [dogList, setDogList] = useState([]);
//   let dogsData = getDogs();
//   for(let i = 0; i < dogList.length; i++) {
//     let dogData = dogsData[i]
//     setDogList(...dogList, dogData)
//     console.log(dogData)
//   }



function App() {

  const splash = "splash",
    welcome = "welcome",
    owners = "owners",
    dogs = "dogs",
    search = "search";


  const [currentScreen, setCurrentScreen] = useState(splash);
  let content = null;
  
  switch (currentScreen) {
    case splash:
      content = <Splash 
      goToWelcome={() => setCurrentScreen(welcome)}/>;
      break;
    case welcome:
      content = <Welcome/>;
      break;
    case dogs:
      content = <Dogs/>;
      break;
    case owners:
        content = <Owners/>;
        break;
    case search:
      content = <Search/>;
      break;
    default:
      content = <Welcome/>;
  }


  return (
    <main>
      {content}
      <Menu/>
    </main>

  );
}

export default App;
