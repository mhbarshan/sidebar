import React from "react";
import { RxAvatar } from "react-icons/rx";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar d-flex justify-content-end mr-md-3">
        <div className="my-2 mx-2">
        <div className="mx-2">
        <RxAvatar />
        </div>
        </div>
        <div className="my-2 mx-2">
        <div className="mx-2">
            Karim &#129171;
        </div>
       </div>
        
      </nav>
    </div>
  );
}
