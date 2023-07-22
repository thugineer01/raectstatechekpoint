// App.js//

import React, { Component } from 'react';
import Profile from './Profile';

// Convert App component from function to class component//
class App extends Component {

  // Initialize state//
  state = {
    person: {
      // Person object with properties  
      fullName: 'sobiye',
      bio: 'website engineer',
      imgSrc: './hoodie.jpeg', 
      profession: 'Software Engineer'
    },
    showProfile: false // Show profile state//
  }

  // Toggle showProfile state//
  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile   
    }));
  }

  // Save time when component mounts//
  componentDidMount() {
    this.mountedTime = Date.now();
    
    // Set interval to update time since mount
    this.interval = setInterval(() => {
      this.setState({ time: Date.now() - this.mountedTime });
    }, 1000);
  }

  render() {
    return (
      <div>
        // Button to toggle profile //
        <button onClick={this.toggleProfile}>Toggle Profile</button> 
        
        // Show profile if showProfile is true//
        {this.state.showProfile &&
          <Profile person={this.state.person} />
        }
        
        // Show time since component mounted //
        Time since mount: {this.state.time}
      </div>
    );
  }
}

export default App;
