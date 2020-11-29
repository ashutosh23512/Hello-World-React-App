import logo from './logo.svg';
import './App.css';
import App2 from './App2'
import React from "react";

class App extends React.Component{
  url='http://google.com'
  constructor(){
    super()
    this.state= {
      title: 'Hello World Constructor',
      userName: ''
    }
  }

  //onClick function
  onClick=($event)=>{
    console.log("Save Button is clicked:", $event);
    window.open(this.url , "_blank");
  }

  //onName function
  onNameChange=(event)=>{
console.log("Value is",event.target.value)
this.setState({userName: event.target.value})
  }

  render(){
    return <div>
      <div>
      <h1>{this.state.userName}</h1>
   <img src={logo} onClick={this.onClick}
   alt="Logo" width="100px"/>
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange}/>
      </div>
    </div>
  }
}


export default App;
