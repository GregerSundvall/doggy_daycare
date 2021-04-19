import Logo from "./doggy.png";

const Splash = ({goToWelcome}) => {
    
    setTimeout(() => { 
        goToWelcome();
    }, 1000);

    return (
        <main id="splash">
            <img src={Logo} id="splashLogo" alt="dog"/>
        </main>
    )
}

export default Splash;