import React, { Component } from 'react';
import './SquareComponent.css';

class SquareComponent extends Component{
    constructor(props){
      super(props);
      this.changeState = this.changeState.bind(this);
    }

    changeState(index,player){

      if(this.props.value==='X' || this.props.value==='0'){
        alert('The Place is Already Filled <br> '+ this.props.currentPlayer + ' needs to play again');
      }else{
        this.props.changeState(index,player);
        this.props.changePlayer();
      }
    }

    render(){
      return(
        <button className="square" onClick={()=> this.changeState(this.props.index,this.props.currentPlayer)}>
          {this.props.value}
        </button>
      )
    }
}

export default SquareComponent;
