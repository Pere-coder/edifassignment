import Link from "next/link";
import { BiMenu } from 'react-icons/bi';




const Navbar = () => {
    return ( 
        <nav className="flex justify-between ">
            <div className="text-orange-500 font-extrabold text-5xl font-sans mt-5 ">HISC   </div>
                <ul className="hidden  md:flex gap-10 mt-10  text-xs ">
                    <li className="p-2">
                  
                        Home
                    </li>
                    <li className="p-2">
                        About us
                    </li>
                    <li className="p-2">
                        Facility
                    </li>
                    <li className="bg-orange-500  
                    text-white text-center rounded-2xl w-28 p-2">
                        Sign up
                        
                    </li>
            </ul>
            <div className="bg-gray-200 p-4 rounded-3xl flex items-center justify-center md:hidden mt-5">
            <BiMenu  className="text-black text-3xl " width='10' height='20' />
            </div>
        </nav>
     );
}
 
export default Navbar;