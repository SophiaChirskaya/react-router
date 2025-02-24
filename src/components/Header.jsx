import Navbar from "./Navbar";

export default function Header(props) {

    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Chi siamo', url: '#', current: true },
        { id: 3, text: 'Posts', url: '#', current: false },
    ];

    return (
    <header>
        <Navbar LinksProp={links} />

    </header>
        

    )
}