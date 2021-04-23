
import './App.css';
import Splash from "./components/Splash";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import { useState } from 'react';
import Dogs from "./components/Dogs";
import Owners from "./components/Owners";
import Search from "./components/Search";
import getDogs from "./Api";

//   let dogsData = getDogs();
//   for(let i = 0; i < dogList.length; i++) {
//     let dogData = dogsData[i]
//     setDogList(...dogList, dogData)
//     console.log(dogData)
//   }



function App() {

  const [dataDownloaded, setDataDownloaded] = useState(false);

  useEffect(() => {
    let data = await getDogs();
    //send data to an array somewhere
    setDataDownloaded(true);
}, [])

  const splash = "splash",
    welcome = "welcome",
    owners = "owners",
    dogs = "dogs",
    search = "search";

  const [dogList, setDogList] = useState([]);

  const [currentScreen, setCurrentScreen] = useState(splash);
  let content = null;
  
  switch (currentScreen) {
    case splash:
      content = <Splash 
      goToWelcome={() => setCurrentScreen(welcome)}
      dogList
      setDogList/>;
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
