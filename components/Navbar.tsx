import Image from "next/image";
import { logo } from "../public/assets/images/index";
import {IoSearchOutline} from "react-icons/io5";
import {AiOutlineHeart, AiOutlineUser} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {
    const productData = useSelector((state: any) => state.shopper.productData);
    const [totalAmt, setTotalAmt] = useState("")

    useEffect(() => {
        let price = 0;
        productData.map((item: any) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price.toFixed(2));
    }, [productData]);

    return (<div className="w-full bg-white text-white sticky top-0 z-50">
        <div className="w-full h-full border-b-[1px] border-b-inherit">
            <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-betweeen gap-2">
                {/* ----------------------------------------------- */}
                {/* ------------------Logo Start here-------------- */}
                <Link href="/">
                    <div className="navBarHover hover:bg-yellow logo">
                        SabRun.uz
                    </div>
                </Link>
                {/* -----------------Logo End here----------------- */}
                {/* --------------Departments Start here----------- */}
                
                <div className="navBarHover hover:bg-yellow">
                    <div className="w-4 grid grid-cols-2 gap-[2px]">
                        <span className="w-1.5 h-1.5 border-[1px] border-black inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-black inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-black inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-black inline-flex"></span>
                    </div>
                    <p className="text-base font-semibold">Departments</p>
                </div>

                {/* ----------------Logo End here------------------ */}
                {/* --------------Services Start here-------------- */}

                <div>
                    <div className="navBarHover hover:bg-yellow">
                        <div className="w-4 grid grid-cols-2 gap-[2px]">
                            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                        </div>
                        <p className="text-base font-semibold">Services</p>
                    </div>
                </div>

                {/* ---------------Services End here--------------- */}
                {/* ---------------SearchBreact bg infoox Start here------------ */}

                <div className="h-10 flex flex-1 relative border rounded-full">
                    <input className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent border-inherit duration-200" placeholder="Search everthing at Shoppers online and in store" type="text" />
                    <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl hover:text-white duration-300"><IoSearchOutline /></span>
                </div>

                {/* ---------------SearchBox End here-------------- */}
                {/* ---------------MyItems Start here-------------- */}

                <div className="navBarHover hover:bg-yellow">
                    <AiOutlineHeart />
                    <div>
                        <p className="text-xs">Recorder</p>
                        <h2 className="text-base font-semibold -mt-1">My Items</h2>
                    </div>
                </div>

                {/* ---------------MyItems End here---------------- */}
                {/* ----------------Accounts Start here------------ */}

                <div className="navBarHover hover:bg-yellow">
                    <AiOutlineUser className="text-lg"/>
                    <div>
                        <p className="text-xs">Sign In</p>
                        <h2 className="text-base font-semibold -mt-1">Account</h2>
                    </div>
                </div>

                {/* ------------------Accounts End here------------ */}
                {/* ------------------Cart Start here-------------- */}

                <Link href="/cart">
                    <div className="hov flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-yellow duration-300 relative text-black">
                        <BsCart2 className="text-2xl"/>
                        <p className="text-[10px] -mt-2">${totalAmt}</p>
                        <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">{productData.length > 0 ? productData.length : 0}</span>
                    </div>
                </Link>

                {/* ------------------Cart End here---------------- */}
                {/* ----------------------------------------------- */}
                {/* ------------NavbarBottom Start here------------ */}
                {/* --------------NavbarBottom End here------------ */}
            </div>
        </div>
        <NavbarBottom />
    </div>
    );
};

export default Navbar;