

//goToWelcome={() => setCurrentScreen(welcome)}


const Menu = ({goToDogs, goToOwners}) => (
    <nav id="menu">
        <p id="menuItem" onClick={goToDogs}>Dogs</p>
        <p id="menuItem" onClick={goToOwners}>Owners</p>
        <p id="menuItem">Search</p>

    </nav>
)

export default Menu;