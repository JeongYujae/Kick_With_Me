import React, {useState} from 'react';
// import Button from '../Button'

function Navbar () {

    const MenuItems = [
        {
            title: 'HOME',
            url: 'http://localhost:3000/',
            cName: 'nav-links'
        },
        {
            title: 'TEAM',
            url: 'http://localhost:3000/team',
            cName: 'nav-links'
        },
        {
            title: 'MATCH',
            url: 'http://localhost:3000/match',
            cName: 'nav-links'
        },
        {
            title: 'PROFILE',
            url: '#',
            cName: 'nav-links'
        },
        {
            title: 'SIGN UP',
            url: '#',
            cName: 'nav-links'
        },

    ]

    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
            <nav className="Navbar">
                <h1 className="navbar-logo">나축사<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
}
export default Navbar