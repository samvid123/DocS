import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is the new description",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "This is the new description",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "This is the new description",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        }
    ]
    return (
        <>
            <div ref = {ref} className='fixed w-full h-full top-0 left-0 z-[3] flex gap-10 flex-wrap p-5' >
                {data.map((item, index)=>(
                    <Card data = {item} reference = {ref}/>

                ))}
            </div>




        </>
    )
}

export default Foreground
