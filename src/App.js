import React from 'react';
import './App.css';

export default class PersonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
  }

  // --- Get and Set API. Add API response to my JSON --- //
  async getLaravelStuff() {
    const axios = require('axios');
    const userResponse = await axios.get('http://127.0.0.1:8000/api/users');
    const profilesResponse = await axios.get('http://127.0.0.1:8000/api/profiles');
    const followsResponse = await axios.get('http://127.0.0.1:8000/api/follows');
    const activitiesResponse = await axios.get('http://127.0.0.1:8000/api/activities');
    const kudosResponse = await axios.get('http://127.0.0.1:8000/api/kudos');

    console.log(userResponse.data.data);
    console.log(profilesResponse.data.data);
    console.log(followsResponse.data.data);
    console.log(activitiesResponse.data.data);
    console.log(kudosResponse.data.data);

    this.setState({
      users: userResponse.data.data,
      profiles: profilesResponse.data.data,
      follows: followsResponse.data.data,
      activities: activitiesResponse.data.data,
      kudos: kudosResponse.data.data
    })

  }

  componentDidMount() {
    this.getLaravelStuff();
  }

  render() {

    console.log(this.state.users);

    return (
      <p>
        {this.state.users ? this.state.users[0].name : 'Loading'}
      </p>
    )
  }
}

// export default App;
