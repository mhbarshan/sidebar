import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.svg'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<IoSpeedometer />
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="d-flex">
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                 <div style={{display: isOpen ? "block" : "none"}}>  <img style={{width:"50px", height:"40px",paddingRight:"8px"}} className="logo" src={logo} alt=''/>{" "}<strong>Inventory</strong></div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
            <div style={{width:"100%"}}>{children}</div>
        </div>
        
    );
};

export default Sidebar;