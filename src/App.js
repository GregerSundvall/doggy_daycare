


import './App.css';
import Splash from "./components/Splash";
import Menu from "./components/Menu";
import {useEffect, useState} from 'react';
import Dogs from "./components/Dogs";
import Owners from "./components/Owners";
import Search from "./components/Search";
import DogDetails from "./components/DogDetails";
import getDogs from "./components/Api";




function App() {

  const [dogList, setDogList] = useState([])
  const [currentDog, setCurrentDog] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await getDogs();
      setDogList(data);
    }
    fetchData();
  }, [])



  const splash = "splash",
    dogDetails = "dogDetails",
    owners = "owners",
    dogs = "dogs",
    search = "search";

  const [currentScreen, setCurrentScreen] = useState(splash);
  let content = null;
  
  switch (currentScreen) {
    case splash:
      content = <Splash 
      goToDogs={() => setCurrentScreen(dogs)}/>;
      break;
    case dogs:
      content = <Dogs 
        goToDogDetails = {() => setCurrentScreen(dogDetails)}
        setCurrentDog = {setCurrentDog}
        dogList={dogList} 
        setDogList={setDogList}/>;
      break;
    case dogDetails:
        content = <DogDetails
        currentDog = {currentDog}/>;
        break;
    case owners:
        content = <Owners/>;
        break;
    case search:
      content = <Search 
      dogList = {dogList}
      setCurrentDog = {setCurrentDog}
      goToDogDetails = {() => setCurrentScreen(dogDetails)}/>;
      break;
    default:
      content = <Splash/>;
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
          goToSearch={() => setCurrentScreen(search)}
        />
      </main>
  
    );
  }

  
}

export default App;
