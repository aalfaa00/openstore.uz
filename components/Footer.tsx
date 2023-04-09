import React from "react";
import {ImPriceTag} from "@react-icons/all-files/im/ImPriceTag";
import {FaLock} from "@react-icons/all-files/fa/FaLock";
import {GiBuyCard} from "@react-icons/all-files/gi/GiBuyCard";
import {RiMessage2Fill} from "@react-icons/all-files/ri/RiMessage2Fill"

const Footer = () => {
    return (
        <div className="w-full bg-white text-black pt-4 pb-6 border">
            <div className="max-w-contentContainer mx-auto">
                <div className='flex gap-2 items-center text-sm mt-2 justify-center'>
                    <div className='flex gap-1'>
                        <ImPriceTag className="font-semibold"/>
                        <p className="text-black duration-200 cursor-pointer text-md font-semibold">Qulay Narxlar<br /><span className="font-thin font-extralight">Biz chegirmalar va promo-kodlar bilan 100 milliondan ortiq mahsulotni sotamiz</span></p>
                    </div>

                    <div className='flex text-sm gap-1'>
                        <FaLock />
                        <p className="text-black duration-200 cursor-pointer text-md font-semibold">Xavfsiz to'lovlar<br /><span className="font-thin font-extralight">Biz barcha mashhur usullar bilan to'lovlarni qabul qilamiz</span></p>
                    </div>

                    <div className='flex text-sm gap-1'>
                        <GiBuyCard />
                        <p className="text-black duration-200 cursor-pointer text-md font-semibold">Sotib olish ishonchi<br /><span className="font-thin font-extralight">Biz xarid paytida va undan keyin xaridorning manfaatlarini himoya qilamiz</span></p>
                    </div>

                    <div className='flex text-sm gap-1'>
                        <RiMessage2Fill />
                        <p className="text-black duration-200 cursor-pointer text-md font-semibold">Qo'llab-quvvatlash xizmati<br /><span className="font-thin font-extralight">Biz chatda barcha savollarga javob beramiz</span></p>
                    </div>
                </div>

                
                <p></p>
            </div>
        </div>
    );
};

export default Footer;