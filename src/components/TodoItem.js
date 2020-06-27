import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from "../img/check.svg";
import checkOkImg from "../img/checkok.svg";

class TodoItem extends Component{
    // The second way to set context for finishWork()
    // constructor(props){
    //     super(props);
    //     this.finishWork()= this.finishWork.bind(this);

    // }
    // finishWork(){
    //     console.log(this.props.item);
    // }
   
    // props can't change (Props is readonly)
    render(){
        const {item } = this.props;
        let url = checkImg;
        if (item.isComplete){
            url = checkOkImg;
        }
        let className = 'TodoList';
        if (item.isComplete){
            className+=' TodoList-complete';
        };

        return(
            <div className={className}> 
                <img alt="Tick" src={url} onClick={()=>{this.props.onClick()}}/>
                <p> {item.title}</p>   
             </div>
        );
    };
}

export default TodoItem;
