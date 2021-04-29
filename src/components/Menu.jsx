

import Logo from "./doggyTrans.png";
import Person from "./doggyPerson.png";
import Glass from "./doggyGlass.png";

const Menu = ({goToDogs, goToOwners}) => (
    <nav id="navMenu">

        <div id="navMenuItem" onClick={goToDogs}>
            <img src={Logo} alt="" className="icon"/>
            <p>DOGS</p>
        </div>

        <div id="navMenuItem">
            <img src={Person} alt="" className="icon"/>
            <p id="menuItem" onClick={goToOwners}>OWNERS</p>
        </div>

        <div id="navMenuItem">
            <img src={Glass} alt="" className="icon"/>
            <p id="menuItem">SEARCH</p>
        </div>

    </nav>
)

export default Menu;