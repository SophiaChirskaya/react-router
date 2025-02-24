export default function Navbar(props) {
    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Chi siamo', url: '#', current: true },
        { id: 3, text: 'Posts', url: '#', current: false },
    ];


    return (<nav>
            <ul>
                {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.url}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
    </nav>);
};