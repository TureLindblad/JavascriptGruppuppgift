import IconCart from './icon-cart';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <NavbarList />
                <IconCart/>
            </nav>
        </header>
    );
}

function NavbarList() {
    return (
        <ul className="navbarList">
            <NavbarListItem textContent={"Mat och Restauranger"} />
            <NavbarListItem textContent={"grejer"} />
            <NavbarListItem textContent={"tre"} />
            <IconCart/>
        </ul>
    );
}

function NavbarListItem({ textContent }) {
    return (
        <li className="navbarListItem">
            <p>{textContent}</p>
        </li>
    );
}