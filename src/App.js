import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      mycards:[{
        id:1,
        title:'What is your name?',
        description:"my name full name is Varsharani Maroti Tekale.",
        buttonText:"ok"
      },
      {
        id:2,
        title:'What is your name?',
        description:"my name full name is Varsharani Maroti Tekale.",
        buttonText:"ok"
      },
      {
        id:3,
        title:'What is your name?',
        description:"my name full name is Varsharani Maroti Tekale.",
        buttonText:"ok"
      },
      {
        id:4,
        title:'What is your name?',
        description:"my name full name is Varsharani Maroti Tekale.",
        buttonText:"ok"
      },
      {
        id:5,
        title:'What is your name?',
        description:"my name full name is Varsharani Maroti Tekale.",
        buttonText:"ok"
      },]
    }
  }

  render() {
    
    console.log('mycards',this.state.mycards);
    const Items=this.state.mycards.map(item=>(
      <div className='card'>
       
        
        <div className='cardHeader'>{item.title}</div>
        <hr/>
        <div className='cardBody'>{item.description}</div>
        <div className='cardFooter'><button>{item.buttonText}</button></div>

      </div>
    ))
    return (
      <div className="App">
  {Items}



      </div>
    );
  }
}

export default App;
