import { useEffect, useState } from "react";
import Logo from "./doggyTrans.png";

const Search = ({dogList, setCurrentDog, goToDogDetails}) => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);


    useEffect(() => {
        let newList = [];
        let queryString = `${query}`;
        queryString = queryString.toLowerCase();
        if(queryString.length > 1) {
            dogList.forEach(dog => {
                let nameString = `${dog.name}`;
                nameString = nameString.toLowerCase();
                let match = nameString.includes(queryString);
                
                if(match) {
                    newList.push(dog);
                }
            });
            setResults(newList)
        }
    }, [query, dogList])

    const handleInput = e => {
        setQuery(e.target.value)
    }
   

    function handlePresence(chipNumber) {
        const newList = results.map((dog) => {
            if (dog.chipNumber === chipNumber) {
                const updatedDog = {
                    ...dog,
                    present: !dog.present,
                };
                return updatedDog;
            }
            return dog;
        });
        setResults(newList);
    }

    function getButtonText(chipNumber) {
        let result = results.filter(dog => dog.chipNumber === chipNumber);
        if (result[0].present === true) {
            return "CHECK OUT"
        } else {
            return "CHECK IN"
        }
    }


    function handleGoToDogDetails(dog) {
        setCurrentDog(dog);
        goToDogDetails()
    }


    const listItems = results.map((dog) => {
        return (
            <li key={dog.chipNumber}>
                <p id="listName" onClick={() => handleGoToDogDetails(dog)}>{dog.name}</p>
                <p id="listBreed" onClick={() => handleGoToDogDetails(dog)}>{dog.breed}</p>
                <div className="inOutButton" onClick={() => handlePresence(dog.chipNumber)}>{getButtonText(dog.chipNumber)}</div>
            </li>
        )
    });


    

    return (
        <section>
            <ul>
                {listItems}
            </ul>
            <input type="text" id="searchBox" value={query} onInput={e=>handleInput(e)}/>
        </section>

    )
    
    
}

export default Search;