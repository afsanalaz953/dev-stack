
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-6">
                    {/* Logo */}
                    <div className="w-20 h-20">
                        <img src="/assets/logo-text.png" alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex font-bold gap-4 justify-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Technologies</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex gap-4 justify-end">
                        <button className="w-25 h-10 rounded-2xl text-center bg-linear-to-t from-green-500 to-cyan-500">
                            Sign in
                        </button>
                        <button className="w-25 h-10 rounded bg-linear-to-t from-purple-500 to-orange-500">
                            Sign up
                        </button>
                    </div>

                    {/* Hamburger Button (mobile only) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden justify-self-end flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col font-bold gap-4 p-4 bg-gray-100 rounded-lg">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Technologies</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                    <div className="flex flex-col gap-4 mt-4">
                        <button className="w-full h-10 rounded-2xl bg-linear-to-t from-green-500 to-cyan-500">
                            Sign in
                        </button>
                        <button className="w-full h-10 rounded bg-linear-to-t from-purple-500 to-orange-500">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;







// // import logoText from './assets/logo-text.png';

// const Navbar = () => {

//     return (
//         <nav className=" container mx-auto my-10 grid grid-cols-3 gap-6">
//             <div className="w-20 h-20 "><img src= "/assets/logo-text.png" alt="" /></div>
//             {/* <img src="" alt="" /> */}
//             <ul className="flex font-bold gap-4">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/">Technologies</a></li>
//                 <li><a href="">Projects</a></li>
//                 <li><a href="/">About</a></li>
//                 <li><a href="/">Contact</a></li>
//             </ul>
//             <div className="flex gap-4 justify-center">
//                 <button className=" w-25 h-10 rounded-2xl   text-center  bg-linear-to-t from-green-500 to-cyan-500">Sign in</button>
//                 <button className=" rounded w-25 h-10 bg-linear-to-t from-purple-500 to-orange-500"> Sign up</button>
//             </div>
//         </nav>
//     )
// };

// export default Navbar;