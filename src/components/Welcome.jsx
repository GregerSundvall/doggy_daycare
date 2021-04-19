import Logo from "./doggy.png";

const Welcome = () => {
    //let keys = Object.keys(localStorage);

    // for(let key of keys) {
    //     //console.log(`${key}: ${localStorage.getItem(key)}`);
    // }
    return (
        <>
            <section>
                <img src={Logo} className="miniLogo" alt="dog"/>
                <p>Welcome screen</p>
                {/* <p>{localStorage.key}</p> */}
            </section>
        </>
    )
}
    
    
    
    

export default Welcome;