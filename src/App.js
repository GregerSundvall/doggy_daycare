
import './App.css';
import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import { useState, useEffect } from 'react';
import Dogs from "./components/Dogs";
import Owners from "./components/Owners";
import Search from "./components/Search";

import getDogs from "./components/Api";




function App() {
  //const [dogList, setDogList] = useState([]);
  const [dogData, setDogData] = useState([]);
 
  useEffect(() => {
    setDogData(getDogs);
}, [])

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
      content = <Welcome 
        dogData={dogData} />;
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

  if(currentScreen === splash) {
    return (
      <main>
      {content}
    </main>
    )
  } else {
    return (
      <main>
        {content}
        <Menu 
          goToDogs={() => setCurrentScreen(dogs)}
          goToOwners={() => setCurrentScreen(owners)}
        />
      </main>
  
    );
  }

  
}

export default App;
