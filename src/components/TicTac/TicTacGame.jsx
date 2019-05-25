import React from "react"
import './tictac.scss'


export default class TicTacGame extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            turn:'X',
            GameEnd:false,
            board: Array(9).fill(''),
            player:false,
            error:false
        }
       
        // methods binding 
        this.clickedElement = this.clickedElement.bind(this)
        this.getWiner = this.getWiner.bind(this)
        this.ressetGame = this.ressetGame.bind(this)
        this.setWinner = this.setWinner.bind(this)

        
    }
    

    //methods 
    clickedElement(e){
      
        if(this.state.GameEnd){
            return 
        }else if(!this.state.GameEnd){
             if(this.state.board[e.target.dataset.square] == ''){
                this.state.board[e.target.dataset.square] = this.state.turn
                
                this.setState({
                    turn:this.state.turn == 'X' ? 'O' : 'X',
                    board:this.state.board
                })
          
            }else{
                return
            }
        }

        this.setWinner(this.getWiner())

    }


    setWinner(val){
        let emptySquares = this.state.board.filter((item=> item ==  ''))
        if(val == 'X'){
            // console.log('winner result', result)
            this.setState({
                GameEnd:true,
                player:'The Winner is Player X'
            })
        }else if(val == 'O'){
            this.setState({
                GameEnd:true,
                player:'The Winner is Player O'
            })
        }else if (emptySquares.length === 0){
            this.setState({
                GameEnd:true,
                player:'There is no Winner '
            })
        }
    }

   
    getWiner(){
        var moves = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]]
        var board = this.state.board
        
        for(let i = 0;i<moves.length;i++){
            if(board[moves[i][0]]==board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]]){ 
                
                return board[moves[i][0]]
            }
        }
    }

    ressetGame(){ 
   
        if(this.state.GameEnd){
            this.setState({
                board: Array(9).fill(''),
                GameEnd:false,
                turn:'X',
                player:false
            })
        }
    }


 
    render(){
       
    
        return(

            <div className='tic-tac_main' onClick={(e)=>{this.clickedElement(e)}}>
                {this.state.player ? <div className='tic-tac_show-winner'>{this.state.player}</div>: false }
                {this.state.board.map((item,index)=>{
                    
                    return(
                        
                        <div className="square" key={index} data-square={index}>{item}</div>
                       
                    )
                     
                })}
              

                {this.state.player ? <div onClick={()=>{this.ressetGame()}} className='my_btn'>Start new game </div>:false}
            </div>
        )
    }

}