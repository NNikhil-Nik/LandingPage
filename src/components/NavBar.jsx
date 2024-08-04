const NavBar =()=>{
    return(
        <div>
            <div className="flex items-center justify-between">
                <nav>
                    <ul className="flex flex-row space-x-4 p-4">
                        <li>
                            <a href="/" className="text-grey-600">
                            About us</a>
                        </li>
                        <li>
                            <a href="/" className="text-grey-600">
                            Features</a>
                        </li>
                        <li>
                            <a href="/" className="text-grey-600">
                            Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <a className="bg-black px-4 py-2 rounded-md text-white">Login</a>
                    <a className="bg-black px-4 py-2 rounded-md text-white m-2">Sign Up</a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;

