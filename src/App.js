import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './Components/Cover';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faBicycle, faSwimmer, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import LeftSidebar from './Components/LeftSidebar';

// import Axios from 'axios';

library.add(faBicycle, faRunning, faSwimmer, faThumbsUp);



export default class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      array: [],
      users:[],
      activities: []
    }
    this.getTokenFromChild = this.getTokenFromChild.bind(this);
  }
  
  getTokenFromChild(token) {
    this.setState({ token: token })
    this.getLaravelStuff();

  }

  // --- Get and Set API --- //
  async getLaravelStuff() {
    const axios = require('axios');
    const config = {
      headers: {'Authorization': "Bearer " + this.state.token}
    };

    const userResponse = await axios.get('http://127.0.0.1:8000/api/users', config);
    // const profilesResponse = await axios.get('http://127.0.0.1:8000/api/profiles');
    // const followsResponse = await axios.get('http://127.0.0.1:8000/api/follows');
    const activitiesResponse = await axios.get('http://127.0.0.1:8000/api/activities', config);
    // const kudosResponse = await axios.get('http://127.0.0.1:8000/api/kudos');

    // console.log(profilesResponse.data.data);
    // console.log(followsResponse.data.data);
    console.log(activitiesResponse.data.data);
    // console.log(kudosResponse.data.data);

    this.setState({
      users: userResponse.data.data,
      // profiles: profilesResponse.data.data,
      // follows: followsResponse.data.data,
      activities: activitiesResponse.data.data,
      // kudos: kudosResponse.data.data
    })
    console.log(this.state)

  }

  render() {
    if (this.state.token === '') {
      return (
        <div>
          <Navbar />
          <Cover tokenFunction={this.getTokenFromChild} />
        </div>
      )
    } else {
     
      return (
        <div className="bg-light">
          <Navbar />
          <Feed users={this.state.users} activities={this.state.activities} />
          {/* <Feed />
          <Feed /> */}
        </div>
      )
    }
  }
}

// export default App;
