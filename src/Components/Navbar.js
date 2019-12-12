import React from 'react';

class Navbar extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   // --- Create Navigation bar with nav buttons --- //
   render() {

      return (
         <React.Fragment>
            <div>
               <nav className="navbar bg-white" id="navbar">
                  <img src={"./triva_logo.png"} alt="logo" className="nav-item" />
                  <button className="btn btn-primary">Sign Up</button>
               </nav>
            </div>
         </React.Fragment>
      )
   }
}

export default Navbar;