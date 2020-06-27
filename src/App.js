import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import icon from "./img/icon.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem : "" ,
      todoItem : [
      { title: 'Learning English',isComplete:true },
      { title: 'Coding',isComplete:false },
      { title: 'Reading Books',isComplete:true },
      { title: 'Do BA Lab',isComplete:false }
    ] };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  finishWork(item){
    return (event)=>{
      const isComplete = item.isComplete;
      const {todoItem }= this.state;
      const index = todoItem.indexOf(item);
       this.setState({
         todoItem : [
           ...todoItem.slice(0,index),
           {
             ...item,
             isComplete : !isComplete
           },
           ...todoItem.slice(index+1)
         ]
       })
    }
  }
  onKeyUp(event){
    if (event.keyCode ===13){
      let text = event.target.value;
      text= text.trim();
      if (text === "") return; 
      this.setState({
        newItem : "",
        todoItem : [
          ...this.state.todoItem,
          {
            title : text,
            isComplete : false
          }
        ]
      })
    }
  }
  onChange(event){
    this.setState({
      newItem : event.target.value 
    })
  }
  render() {
    const {todoItem,newItem} = this.state;
    if(todoItem.length === 0 ){
      return(
        <div className="App"> List is Empty</div>
      )
    }
     return (
      <div className="App">
        <div className="Header">
          <img alt="Ticker" src={icon} width={32} height={32}/>
          <input 
          type="text" 
          placeholder="Add new item" 
          value={newItem}
          onChange = {this.onChange}
          onKeyUp={this.onKeyUp}/>
        </div>
        {
          todoItem.map((item,index)=><TodoItem
          key={index}
          item={item}
          onClick={this.finishWork(item)}
          />)
        }
      </div>
    );
  };
}

export default App;
