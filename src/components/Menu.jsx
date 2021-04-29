

import Logo from "./doggyTrans.png";
import Person from "./doggyPerson.png";
import Glass from "./doggyGlass.png";

const Menu = ({goToDogs, goToOwners, goToSearch}) => (
    <nav id="navMenu">

        <div id="navMenuItem" onClick={goToDogs}>
            <img src={Logo} alt="" className="icon"/>
            <p>DOGS</p>
        </div>

        <div id="navMenuItem" onClick={goToOwners}>
            <img src={Person} alt="" className="icon"/>
            <p id="menuItem">OWNERS</p>
        </div>

        <div id="navMenuItem" onClick={goToSearch}>
            <img src={Glass} alt="" className="icon"/>
            <p id="menuItem">SEARCH</p>
        </div>

    </nav>
)

export default Menu;