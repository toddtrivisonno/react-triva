import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './Components/Cover';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faBicycle, faSwimmer } from '@fortawesome/free-solid-svg-icons'
// import Axios from 'axios';

library.add(faBicycle, faRunning, faSwimmer);



export default class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      array: []
    }
    this.getTokenFromChild = this.getTokenFromChild.bind(this);
  }

  getTokenFromChild(token) {
    this.setState({ token: token })
    console.log('parent state', this.state)
    var tkn = this.state;
    console.log(tkn);
  }

  // --- Get and Set API --- //
  // async getLaravelStuff() {
  //   const axios = require('axios');
  //   var config = {
  //     headers: {'Authorization': "Bearer " + tkn}
  //   };

  //   var bodyParameters = {
  //     key: "value"
  //   }
  //   const userResponse = await axios.get('http://127.0.0.1:8000/api/users', bodyParameters, config);
  //   const profilesResponse = await axios.get('http://127.0.0.1:8000/api/profiles');
  //   const followsResponse = await axios.get('http://127.0.0.1:8000/api/follows');
  //   const activitiesResponse = await axios.get('http://127.0.0.1:8000/api/activities');
  //   const kudosResponse = await axios.get('http://127.0.0.1:8000/api/kudos');

  //   console.log(userResponse.data.data);
  //   console.log(profilesResponse.data.data);
  //   console.log(followsResponse.data.data);
  //   console.log(activitiesResponse.data.data);
  //   console.log(kudosResponse.data.data);

  //   this.setState({
  //     users: userResponse.data.data,
  //     profiles: profilesResponse.data.data,
  //     follows: followsResponse.data.data,
  //     activities: activitiesResponse.data.data,
  //     kudos: kudosResponse.data.data
  //   })

  // }

  // componentDidMount() {
  //   this.getLaravelStuff();
  // }

  render() {
    if (this.state.token === '') {
      return (
        // <div className="App">
        //   <h1>Hello {this.state.users ? this.state.users[1].name : 'Loading'}</h1>

        // </div>
        <div>
          <Navbar />
          <Cover tokenFunction={this.getTokenFromChild} />
        </div>
      )
    } else {
      return (
        <div className="bg-light">
          <Navbar />
          <Feed />
        </div>
      )
    }
  }
}

// export default App;
