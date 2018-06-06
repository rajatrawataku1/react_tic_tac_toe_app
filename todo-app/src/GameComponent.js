import React, { Component } from 'react';
import './GameComponent.css';
import BoardComponent from './BoardComponent';

class GameComponent extends Component{

  constructor(props){
    super(props);
    this.state = {state_of_box:['','','','','','','','','']};
    this.changeState = this.changeState.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.checkIndexState = this.checkIndexState.bind(this);
    this.checkAllFilled = this.checkAllFilled.bind(this);
  }

  checkIndexState(index,player){
    if(this.state.state_of_box[index] === player){
      return true;
    }else{
      return false;
    }
  }

  checkAllFilled(){
    var temp_array=this.state.state_of_box;
    if(temp_array.indexOf('')===-1){
      alert("No player wins !!! Its a Draw !! Game will reload");
      this.setState({state_of_box : ['','','','','','','','','']});
    }else{
      console.log("Game will continue");
    }
  }

  checkForWin(index,player){
      console.log('Index is : '+index+ ' Player check : '+player);
      switch(index){
        case 0:
                if(this.checkIndexState(0,player) && this.checkIndexState(1,player) && this.checkIndexState(2,player) ){
                  return 1;
                }

                if(this.checkIndexState(0,player) && this.checkIndexState(3,player) && this.checkIndexState(6,player) ){

                  return 1;
                }

                if(this.checkIndexState(0,player) && this.checkIndexState(4,player) && this.checkIndexState(8,player) ){

                  return 1;
                }

                break;

        case 1:
                if(this.checkIndexState(1,player) && this.checkIndexState(4,player) && this.checkIndexState(7,player) ){

                  return 1;
                }

                if(this.checkIndexState(1,player) && this.checkIndexState(2,player) && this.checkIndexState(0,player) ){

                  return 1;
                }
                break;

        case 2:
                if(this.checkIndexState(2,player) && this.checkIndexState(1,player) && this.checkIndexState(0,player) ){

                  return 1;
                }

                if(this.checkIndexState(2,player) && this.checkIndexState(5,player) && this.checkIndexState(8,player) ){

                  return 1;
                }

                if(this.checkIndexState(2,player) && this.checkIndexState(4,player) && this.checkIndexState(6,player) ){

                  return 1;
                }
                break;


        case 3:
                if(this.checkIndexState(3,player) && this.checkIndexState(4,player) && this.checkIndexState(5,player) ){

                  return 1;
                }

                if(this.checkIndexState(3,player) && this.checkIndexState(6,player) && this.checkIndexState(1,player) ){

                  return 1;
                }
                break;


        case 4:
                if(this.checkIndexState(4,player) && this.checkIndexState(1,player) && this.checkIndexState(7,player) ){

                  return 1;
                }

                if(this.checkIndexState(4,player) && this.checkIndexState(0,player) && this.checkIndexState(8,player) ){

                  return 1;
                }

                if(this.checkIndexState(4,player) && this.checkIndexState(2,player) && this.checkIndexState(6,player) ){

                  return 1;
                }

                if(this.checkIndexState(4,player) && this.checkIndexState(3,player) && this.checkIndexState(5,player) ){

                  return 1;
                }
                break;

        case 5:
                if(this.checkIndexState(5,player) && this.checkIndexState(2,player) && this.checkIndexState(8,player) ){

                  return 1;
                }

                if(this.checkIndexState(5,player) && this.checkIndexState(4,player) && this.checkIndexState(3,player) ){

                  return 1;
                }
                break;

        case 6:
                if(this.checkIndexState(6,player) && this.checkIndexState(3,player) && this.checkIndexState(0,player) ){

                  return 1;
                }

                if(this.checkIndexState(6,player) && this.checkIndexState(4,player) && this.checkIndexState(2,player) ){

                  return 1;
                }

                if(this.checkIndexState(6,player) && this.checkIndexState(7,player) && this.checkIndexState(8,player) ){

                  return 1;
                }
                break;

          case 7:
                  if(this.checkIndexState(7,player) && this.checkIndexState(4,player) && this.checkIndexState(1,player) ){

                    return 1;
                  }

                  if(this.checkIndexState(7,player) && this.checkIndexState(6,player) && this.checkIndexState(8,player) ){

                    return 1;
                  }

                  break;

        case 8:
                if(this.checkIndexState(8,player) && this.checkIndexState(5,player) && this.checkIndexState(2,player) ){

                  return 1;
                }

                if(this.checkIndexState(8,player) && this.checkIndexState(7,player) && this.checkIndexState(6,player) ){

                  return 1;
                }

                if(this.checkIndexState(8,player) && this.checkIndexState(4,player) && this.checkIndexState(0,player) ){

                  return 1;
                }

                break;
        default:
                console.log("You cant reach here");
      }
  }

  changeState(index,player){
    console.log(player);
    var temp=this.state.state_of_box;
    temp[index]=player;
    console.log(temp);
    this.setState({ state_of_box:temp });
    console.log(this.state);
    console.log("State changed for index : "+ index);
    var answer=this.checkForWin(index,player);

    if(answer===1){
      alert("Player "+player+" wins");
      this.setState({state_of_box:['','','','','','','','','']});
    }else{
      this.checkAllFilled();
    }
  }

  render(){
    return(
      <div className="main_div">
        <h2> Tic-Tac Toe Game Using React Application </h2>
        <div className="game">
          <div className="game-board">
            <BoardComponent changeState={this.changeState} value={this.state.state_of_box} />
          </div>
          <div className="game-info">
          </div>
        </div>
      </div>
    )
  }
}

export default GameComponent;
