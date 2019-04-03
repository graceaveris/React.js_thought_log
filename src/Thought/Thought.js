import React from 'react';

const thought = ( props ) => {


  const outputstyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'white'
  };


 return (

    <div >
      <li style={outputstyle}>{props.thought}  ▶ {props.time}</li>
      <button 
        className="btn"
        onClick={props.click}>Delete Thought</button>
    
    </div>

  );
};

export default thought;




















