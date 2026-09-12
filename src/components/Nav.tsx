

const Navbar = () => {

    return (
        <nav className=" container mx-auto my-10 grid grid-cols-3 gap-6">
            <div className="w-20 h-20 "><img src="/src/assets/logo-text.png" alt="" /></div>
            {/* <img src="" alt="" /> */}
            <ul className="flex font-bold gap-4">
                <li><a href="/">Home</a></li>
                <li><a href="/">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="flex gap-4 justify-center">
                <button className=" w-25 h-10 rounded-2xl   text-center  bg-linear-to-t from-green-500 to-cyan-500">Sign in</button>
                <button className=" rounded w-25 h-10 bg-linear-to-t from-purple-500 to-orange-500"> Sign up</button>
            </div>
        </nav>
    )
};

export default Navbar;