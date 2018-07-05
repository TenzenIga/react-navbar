import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/navbar';
import Space from './containers/space';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
}

handlescroll=()=>{
  if (window.scrollY>55) {
    this.setState(
      {
        show:false
      }
    )
  }else {
    this.setState(
      {
        show:true
      }
    )
  }

}
componentDidMount() {
    window.addEventListener('scroll', this.handlescroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlescroll, false);
  }
  onMouseEnt =()=>{
    console.log('mouse');
    this.setState(
      {
        show:true
      }
    )
  }
  render() {

return (
      <div >
  <Navbar show={this.state.show} onMouseEnter={this.onMouseEnt}/>
<Space   />
<h2>End</h2>
      </div>
    );
  }
}

export default App;
