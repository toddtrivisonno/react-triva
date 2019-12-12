import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LeftSidebar extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   // --- Create Navigation bar with nav buttons --- //
   render() {

      return (

         /* Left Sidebar */
         <div className="row">
            <div className="card col-3">
               <div className="card-body">
                  <img src={"./TODD_AVATAR_300x300.png"} className="card-img-top col-2 rounded-circle mb-1" alt="..." />
                  <h5 className="card-title">Todd Trivisonno</h5>

                  <div className="card-group">
                     <div className="card">
                        <div className="card-body">
                           <h5 className="card-title">Following</h5>
                           <p className="card-text">26</p>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-body">
                           <h5 className="card-title">Followers</h5>
                           <p className="card-text">20</p>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-body">
                           <h5 className="card-title">Activities</h5>
                           <p className="card-text">235</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default LeftSidebar;