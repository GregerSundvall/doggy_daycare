import { useEffect, useState } from "react";
import Logo from "./doggyTrans.png";

const Search = () => {

    const [query, setQuery] = useState("");
    
    let searchBoxText = null
    
    useEffect(() => {
        searchBoxText = document.getElementById("query").nodeValue;

    }, [])

    useEffect(() => {
        setQuery(searchBoxText);
        console.log(query)
    }, [searchBoxText, query])

    return (
        <section>
            <img src={Logo} alt=""/>
            <p>Search section</p>
            <input type="text" id="query"/>
        </section>

    )
    
    
}

export default Search;