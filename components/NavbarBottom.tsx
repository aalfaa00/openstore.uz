import { phoneImg } from "../public/assets/images";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";


const NavbarBottom = () => {
    return (
        <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Image className="w-6" src={phoneImg} alt="phoneImg" />
                    <p className="text-sm font-semibold text-black">How do you want your items?</p>
                    <FiChevronDown className="text-black" />
                    <span className="w-[1px] h-4 bg-white inline-flex ml-2"></span>
                </div>
                
                <div className="flex items-center gap-2">
                    <MdOutlineLocationOn className="text-black" />
                    <p className="text-sm text-black">Sacramento, 95829</p>
                    <FaPlaceOfWorship className="text-black" />
                    <p className="text-sm text-black">Sacramento, Supercenter</p>
                </div>
            </div>

            <ul className="flex gap-6 text-sm font-semibold">
                <li className="text-black bottomNavLi">Deals</li>
                <li className="text-black bottomNavLi">Easter</li>
                <li className="text-black bottomNavLi">Grocery & essentials</li>
                <li className="text-black bottomNavLi">Home</li>
                <li className="text-black bottomNavLi">Tech</li>
                <li className="text-black bottomNavLi">Fashion</li>
                <li className="text-black bottomNavLi">Auto</li>
                <li className="text-black bottomNavLi">Walmart+</li>
            </ul>
            
        </div>
    )
}

export default NavbarBottom