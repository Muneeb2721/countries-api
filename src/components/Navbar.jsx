export function Navbar (props) {
    return (
        <header>
            <nav className="navbar">
                <h1 className="heading">Where in the { props.text.name }</h1>
                <div className="mode">
                    <img src="" alt=""/>
                    <i className="fa-solid fa-moon moon-icon"></i> 
                    <b>Dark Mode</b>
                </div>
            </nav>
        </header>
    )
}