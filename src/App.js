import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Thought from './Thought/Thought';


class App extends Component {
  state = {
    thoughts: [

  ],
}


//DELETE THOUGHT
deleteThoughtHandler = (thoughtIndex) => {
  //below we are copying the person state array, so we do not mutate the original data (this is best practise)
  const thoughts = [...this.state.thoughts];
  thoughts.splice(thoughtIndex, 1);
  this.setState( { thoughts: thoughts } )
}


//ADD THOUGHT
addThoughtHandler = (event) => {
  event.preventDefault();
  const thoughts = [...this.state.thoughts];
  const newthought = {};
    
  //for newthought, we assign it to our ref'd input value
  newthought.content = this.newThought.value;

    //here we call the current local time
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
  
  newthought.time = (hour +':'+ mins);
  thoughts.push(newthought);
  this.setState( { thoughts: thoughts } )

  this.newThought.value = null;
} 


render() {

  const style = {
  border: '2px solid white',
  borderRadius: '0px',
  width: '100px',
  height: '60px',
  fontSize: '30px'
  };

 
 let thoughts = (
       <div>
        {this.state.thoughts.map((thought, index) => {
          return <Thought
          thought={thought.content}
          time={thought.time}
          click={() => this.deleteThoughtHandler(index)}/>
        })
//reversing the array so the latest post shows first
        .reverse()} 
      </div> 
    );


//THE RETURN BLOCK
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Six / Thought Log</h2>

        <form
        onSubmit={(event) => this.addThoughtHandler(event)} >   
          
          <input 
            type="text"
            className="textfield"
            placeholder="Type Thought"
            ref={(input) => {this.newThought = input}} />
         
          <input
            className="mainbtn" 
            type="submit"
            value="Post" />
          
        </form>
        </header>

        <ul>
          {thoughts}
        </ul>

      </div>
    );
  }
}

export default App;








