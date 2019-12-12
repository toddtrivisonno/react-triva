import React from 'react';
import './Feed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Feed extends React.Component {
   constructor(props) {
      super(props);
   }

   // --- Create Navigation bar with nav buttons --- //
   render() {
      const { users = [], activities = [], ...props } = this.props;
      console.log(this.props);
      const activityCards = this.props.activities.map((activity, index) => {
         
         return (
            <div className="card col-5 mx-auto mt-5">
               <div className="card-body pb-1">
                  <div className="row">
                     <img src={"./Will.jpg"} className="card-img-top col-2 rounded-circle mb-1" alt="..." />
                     <h5 className="card-title mt-2">
                        {this.props.users[activity.user_id - 1].name}
                        <br></br>
                        <small className="card-text">Today at 10:43 AM</small>
                     </h5>
                  </div>
                  <div className="row m-2">
                     <FontAwesomeIcon icon="bicycle" size="2x" />
                     <p className="card-text ml-2">{activity.activity_name}</p>
                  </div>

                  <div className="card-group">
                     <div className="card border-top-0 rounded-0">
                        <div className="card-body text-center p-1">
                           <h6 className="card-title m-0">Distance</h6>
                           <small className="card-text">{activity.distance} mi</small>
                        </div>
                     </div>
                     <div className="card border-top-0 rounded-0">
                        <div className="card-body text-center p-1">
                           <h6 className="card-title m-0">Duration</h6>
                           <small className="card-text">{activity.duration} min</small>
                        </div>
                     </div>
                     <div className="card border-top-0 rounded-0">
                        <div className="card-body text-center p-1">
                           <h6 className="card-title m-0">Elev. Gain</h6>
                           <small className="card-text">{activity.elevation_gain} ft</small>
                        </div>
                     </div>
                  </div>

                  <img src={"./cycling.jpg"} className="card-img-top rounded" alt="..." />
               </div>
               <div className="row justify-content-end pr-4 pb-1">
                  <button className="btn btn-light btn-sm col-1">
                     <FontAwesomeIcon icon="thumbs-up" />
                  </button>
               </div>
            </div>
         )
      });
      return (

         (this.props.activities && this.props.users) ? activityCards : (<h1>Loading</h1>)
      )
   }
}

export default Feed;