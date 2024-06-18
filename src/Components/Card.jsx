import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
import { SiElastic } from 'react-icons/si';

const Card = ({data, reference}) =>{
    return (
        <motion.div drag dragConstraints= {reference} whileDrag={{scale:1.2}} dragElastic={0.2} whileTap={{scale:1.2}} className=' z-[9] relative w-60 h-72 rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden flex-shrink-0'>
            {/* <FaRegFileAlt /> */}
            <p className='text-normal mt-5 leading-tight'>{data.desc}</p>

            <div className='footer absolute bottom-0 left-0 w-full'>
                <div className='flex justify-between items-center  py-6 px-5'>
                    <h5>{data.filesize}</h5>
                    <span className='flex items-center justify-center bg-black rounded-full p-2'>
                        {data.close ? <IoCloseSharp />: <MdDownload size= "1em"/>}   
                    </span>
                </div>
                 {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === 'blue'? "bg-blue-500" : "bg-green-500"} flex items-center justify-center font-semibold`} >
                    <h3 className='text-sm '>{data.tag.tagTitle}</h3>
                 </div>)}

            </div>
        </motion.div>

    )
}

export default Card
