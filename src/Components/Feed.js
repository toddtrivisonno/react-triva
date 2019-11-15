import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Feed extends React.Component {
   constructor(props) {
      super(props);
   }

   // --- Create Navigation bar with nav buttons --- //
   render() {

      return (

         <div className="card col-5 mx-auto mt-5">
            <div className="card-body">
               <div className="row">
                  <img src={"./Will.jpg"} className="card-img-top col-2 rounded-circle mb-1" alt="..." />
                  <h5 className="card-title mt-2">Will Dumb</h5>
                  {/* <p className="card-text">Today at 10:43 AM</p> */}
               </div>
               <div className="row m-2">
                  <FontAwesomeIcon icon="bicycle" size="2x" />
                  <p className="card-text ml-2">Title of my dumb run</p>
               </div>

               <div className="card-group">
                  <div className="card">
                     <div className="card-body">
                        <h5 className="card-title">Distance</h5>
                        <p className="card-text">2.2 mi</p>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body">
                        <h5 className="card-title">Duration</h5>
                        <p className="card-text">47 min</p>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body">
                        <h5 className="card-title">Elev. Gain</h5>
                        <p className="card-text">2045 ft</p>
                     </div>
                  </div>
               </div>

               <img src={"./cycling.jpg"} className="card-img-top rounded" alt="..." />
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">Cras justo odio</li>
               <li className="list-group-item">Dapibus ac facilisis in</li>
               <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
               {/* <a href="#" className="card-link">Card link</a> */}
               {/* <a href="#" className="card-link">Another link</a> */}
            </div>
         </div>

      )
   }
}

export default Feed;