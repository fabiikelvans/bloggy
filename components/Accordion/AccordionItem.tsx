import React, {useState} from 'react';
import {HiOutlineMinus, HiOutlinePlus} from "react-icons/hi";
import Link from "next/link";
import {BsArrowReturnRight} from "react-icons/bs";
import {number} from "prop-types";

interface Props {
    title: string;
    description: string;
    link: string;
}

function AccordionItem( { title, description, link } : Props) {

    const [isActive, setIsActive] = useState(false);

    return (
       <div>
           <div className='accordion__item' onClick={() => setIsActive(!isActive)}>

               <div className="accordion__item-title" >
                   <h2>{title}</h2>
               </div>

               <div className="accordion__item-toggle">
                   {isActive ?
                       <HiOutlineMinus/>
                       :
                       <HiOutlinePlus/>
                   }
               </div>
           </div>

           {isActive &&
               <div className="accordion__item-summary">
                   <p>
                       {description}
                   </p>
                   <Link href={link}>
                       <span className='read-more'>
                        <BsArrowReturnRight/>
                        Read more
                       </span>
                   </Link>
               </div>
           }
       </div>
    );
}

export default AccordionItem;