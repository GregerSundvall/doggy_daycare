



import Logo from "./doggyTrans.png";
import TitleLogo from "./ddLogo2.png";


const Splash = ({goToDogs}) => {
    
    
    
    setTimeout(() => { 
        goToDogs();
    }, 500);

    return (
        <main id="splash">
            <img id="splashLogo" src={Logo} alt="dog"/>
            <img id="splashTitleLogo" src={TitleLogo} alt="Doggy Daycare"/>
            <p>Fetching Dogs...</p>
        </main>
    )
}

export default Splash;