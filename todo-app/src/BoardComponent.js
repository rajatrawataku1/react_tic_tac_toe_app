import React, { Component } from 'react';
import './BoardComponent.css';
import SquareComponent from './SquareComponent';

class BoardComponent extends Component{

      constructor(props){
        super(props);
        this.state={currentPlayer : 'X'};
        this.renderSquare = this.renderSquare.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
      }

      changePlayer(){
        var temp=this.state.currentPlayer;
        if(temp==='X'){
          this.setState( { currentPlayer : '0' } );
        }else{
          this.setState( { currentPlayer : 'X' } );
        }
      }


      renderSquare(index_value,index_array){
        return(
          <SquareComponent currentPlayer={this.state.currentPlayer} changePlayer={this.changePlayer}  value={index_value} index={index_array} changeState={this.props.changeState}/>
        );
      }

      render(){
        return(
          <div>
            <div className="status">Next Player is {this.state.currentPlayer}</div>
            <div className="board-row">
              { this.renderSquare(this.props.value[0],0) }
              { this.renderSquare(this.props.value[1],1) }
              { this.renderSquare(this.props.value[2],2) }
            </div>
            <div className="board-row">
              { this.renderSquare(this.props.value[3],3) }
              { this.renderSquare(this.props.value[4],4) }
              { this.renderSquare(this.props.value[5],5) }
            </div>
            <div className="board-row">
              { this.renderSquare(this.props.value[6],6) }
              { this.renderSquare(this.props.value[7],7) }
              { this.renderSquare(this.props.value[8],8) }
            </div>
          </div>
        )
      }
}

export default BoardComponent;
