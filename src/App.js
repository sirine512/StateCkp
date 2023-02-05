import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    show: false,
    person: {
      fullName: 'Sarrah Smith',
      bio: 'A developer with 3 years of experience',
      imgSrc: 'https://st4.depositphotos.com/3396639/27946/i/600/depositphotos_279461366-stock-photo-portrait-of-successful-carefree-female.jpg',
      profession: 'Developer',
    },
    timeInterval: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { show, person, timeInterval } = this.state;
    return (
      <div className="App">
      <header className="App-header">
      <div>
        <button onClick={this.toggleShow} id="buttonSh">
          {show ? 'X' : 'Show Profile'} 
        </button>
        {show && (
          <div>
            <h1 style={{color:'#f0b44d'}}>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} style={{width:'500px'}}/>
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since last mount: {timeInterval} seconds</p>
      </div>
      </header>
    </div>
    );
  }
}

export default App;
