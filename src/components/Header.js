// import Connectbtn from "./connectbtn";
// import logo from "../images/logo.png";

// const Header = () => {
//     return (
//         <div className="header">
//             <img className="logo" src={logo} />
//             <div>
//                 <Connectbtn />
//             </div>
//         </div>
//     );
// };

// export default Header;

import React from "react";
import Connectbtn from "./connectbtn";
import logo from "../images/logo.png";
import profilePicture from "../images/logo.png"; // Adjust the path relative to 'Header.js'

const Header = () => {
    // Example profile picture URL or use props if passed down
    const profilePicUrl = profilePicture;

    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <div className="profile">
                <img className="profile-pic" src={profilePicUrl} alt="Profile" />
            </div>
            <div>
                <Connectbtn />
            </div>
        </div>
    );
};

export default Header;
