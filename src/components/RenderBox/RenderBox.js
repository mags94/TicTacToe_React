import React from 'react';
import classes from './RenderBox.css';


class RenderBox extends React.Component{
    constructor(props) {
        super(props);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.myRef4 = React.createRef();
        this.myRef5 = React.createRef();
        this.myRef6 = React.createRef();
        this.myRef7 = React.createRef();
        this.myRef8 = React.createRef();
        this.myRef9 = React.createRef();
    }
        state={
            isPlayerX : true,
            isWinnerX : null
            

        };
        calculateWinner = (event) =>{
            if(event.target.id === "div1" || event.target.id === "div3" || event.target.id === "div7" || event.target.id === "div9"){
                if(event.target.id === "div1"){
                    if(this.myRef1.current.innerHTML === this.myRef2.current.innerHTML && this.myRef1.current.innerHTML === this.myRef3.current.innerHTML){
                        event.target.style.backgroundColor = "red";
                        this.myRef2.current.style.backgroundColor = "red";
                        this.myRef3.current.style.backgroundColor = "red";
                        if(this.myRef1.current.innerHTML === "X"){
                            this.setState({
                                isPlayerX : null,
                                isWinnerX : true                         
                            });
                        }
                        else{
                            this.setState({
                                isPlayerX : null,
                                isWinnerX : false                         
                            });
                        }                    
                }
                else if(this.myRef1.current.innerHTML === this.myRef4.current.innerHTML && this.myRef1.current.innerHTML === this.myRef7.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef4.current.style.backgroundColor = "red";
                    this.myRef7.current.style.backgroundColor = "red";
                    if(this.myRef1.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
                }
                else if(this.myRef1.current.innerHTML === this.myRef5.current.innerHTML && this.myRef1.current.innerHTML === this.myRef9.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef5.current.style.backgroundColor = "red";
                this.myRef9.current.style.backgroundColor = "red";
                if(this.myRef1.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
        }

            }
            else if(event.target.id === "div3"){
                if(this.myRef3.current.innerHTML === this.myRef2.current.innerHTML && this.myRef3.current.innerHTML === this.myRef1.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef2.current.style.backgroundColor = "red";
                    this.myRef1.current.style.backgroundColor = "red";
                    if(this.myRef3.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
                }
                 else if(this.myRef3.current.innerHTML === this.myRef6.current.innerHTML && this.myRef3.current.innerHTML === this.myRef9.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef6.current.style.backgroundColor = "red";
                    this.myRef9.current.style.backgroundColor = "red";
                    if(this.myRef3.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
                }
                else if(this.myRef3.current.innerHTML === this.myRef5.current.innerHTML && this.myRef3.current.innerHTML === this.myRef7.current.innerHTML){
                        event.target.style.backgroundColor = "red";
                        this.myRef5.current.style.backgroundColor = "red";
                        this.myRef7.current.style.backgroundColor = "red";
                        if(this.myRef3.current.innerHTML === "X"){
                            this.setState({
                                isPlayerX : null,
                                isWinnerX : true                         
                            });
                        }
                        else{
                            this.setState({
                                isPlayerX : null,
                                isWinnerX : false                         
                            });
                        }                    
                }

            }
        else if(event.target.id === "div9"){
            if(this.myRef9.current.innerHTML === this.myRef6.current.innerHTML && this.myRef9.current.innerHTML === this.myRef3.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef6.current.style.backgroundColor = "red";
                this.myRef3.current.style.backgroundColor = "red";
                if(this.myRef9.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
        }
            else if(this.myRef9.current.innerHTML === this.myRef5.current.innerHTML && this.myRef9.current.innerHTML === this.myRef1.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef5.current.style.backgroundColor = "red";
                    this.myRef1.current.style.backgroundColor = "red";
                    if(this.myRef9.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
            }
            else if(this.myRef9.current.innerHTML === this.myRef8.current.innerHTML && this.myRef9.current.innerHTML === this.myRef7.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef8.current.style.backgroundColor = "red";
                    this.myRef7.current.style.backgroundColor = "red";
                    if(this.myRef9.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
            }
        }
            else if(event.target.id === "div7"){
                if(this.myRef7.current.innerHTML === this.myRef8.current.innerHTML && this.myRef7.current.innerHTML === this.myRef9.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef8.current.style.backgroundColor = "red";
                    this.myRef9.current.style.backgroundColor = "red";
                    if(this.myRef7.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
            }
                else if(this.myRef7.current.innerHTML === this.myRef5.current.innerHTML  && this.myRef7.current.innerHTML === this.myRef3.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef5.current.style.backgroundColor = "red";
                    this.myRef3.current.style.backgroundColor = "red";
                    if(this.myRef7.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
                }
                    else if(this.myRef7.current.innerHTML === this.myRef1.current.innerHTML && this.myRef7.current.innerHTML === this.myRef4.current.innerHTML){
                    event.target.style.backgroundColor = "red";
                    this.myRef1.current.style.backgroundColor = "red";
                    this.myRef4.current.style.backgroundColor = "red";
                    if(this.myRef7.current.innerHTML === "X"){
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : true                         
                        });
                    }
                    else{
                        this.setState({
                            isPlayerX : null,
                            isWinnerX : false                         
                        });
                    }                    
                    }
                }
            
    }
    // div 2, div 6, div 8, div4, div 5
    else if(event.target.id === "div2" || event.target.id === "div4" || event.target.id === "div8" || event.target.id === "div6" || event.target.id === "div5"){
        if(event.target.id === "div2"){
            if(this.myRef2.current.innerHTML === this.myRef1.current.innerHTML && this.myRef2.current.innerHTML === this.myRef3.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef1.current.style.backgroundColor = "red";
                this.myRef3.current.style.backgroundColor = "red";
                if(this.myRef2.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
           else if(this.myRef2.current.innerHTML === this.myRef5.current.innerHTML && this.myRef2.current.innerHTML === this.myRef8.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef5.current.style.backgroundColor = "red";
                this.myRef8.current.style.backgroundColor = "red";
                if(this.myRef2.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
        }
       else if(event.target.id === "div6"){
            if(this.myRef6.current.innerHTML === this.myRef3.current.innerHTML && this.myRef6.current.innerHTML === this.myRef9.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef9.current.style.backgroundColor = "red";
                this.myRef3.current.style.backgroundColor = "red";
                if(this.myRef6.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
           else if(this.myRef6.current.innerHTML === this.myRef5.current.innerHTML && this.myRef6.current.innerHTML === this.myRef4.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef5.current.style.backgroundColor = "red";
                this.myRef4.current.style.backgroundColor = "red";
                if(this.myRef6.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
        }
      else if(event.target.id === "div8"){
            if(this.myRef8.current.innerHTML === this.myRef7.current.innerHTML && this.myRef8.current.innerHTML === this.myRef9.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef9.current.style.backgroundColor = "red";
                this.myRef7.current.style.backgroundColor = "red";
                if(this.myRef8.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
           else if(this.myRef8.current.innerHTML === this.myRef5.current.innerHTML && this.myRef8.current.innerHTML === this.myRef2.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef5.current.style.backgroundColor = "red";
                this.myRef2.current.style.backgroundColor = "red";
                if(this.myRef8.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
        }
       else if(event.target.id === "div4"){
            if(this.myRef4.current.innerHTML === this.myRef1.current.innerHTML && this.myRef4.current.innerHTML === this.myRef7.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef1.current.style.backgroundColor = "red";
                this.myRef7.current.style.backgroundColor = "red";
                if(this.myRef4.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                                 
            }
           else if(this.myRef4.current.innerHTML === this.myRef5.current.innerHTML && this.myRef4.current.innerHTML === this.myRef6.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef5.current.style.backgroundColor = "red";
                this.myRef6.current.style.backgroundColor = "red";
                if(this.myRef4.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
        }
     else if(event.target.id === "div5"){
            if(this.myRef5.current.innerHTML === this.myRef4.current.innerHTML && this.myRef5.current.innerHTML === this.myRef6.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef4.current.style.backgroundColor = "red";
                this.myRef6.current.style.backgroundColor = "red";
                if(this.myRef5.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
           else if(this.myRef5.current.innerHTML === this.myRef2.current.innerHTML && this.myRef5.current.innerHTML === this.myRef8.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef2.current.style.backgroundColor = "red";
                this.myRef8.current.style.backgroundColor = "red";
                if(this.myRef5.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
         else if(this.myRef5.current.innerHTML === this.myRef1.current.innerHTML && this.myRef5.current.innerHTML === this.myRef9.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef1.current.style.backgroundColor = "red";
                this.myRef9.current.style.backgroundColor = "red";
                if(this.myRef5.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
           else if(this.myRef5.current.innerHTML === this.myRef7.current.innerHTML && this.myRef5.current.innerHTML === this.myRef3.current.innerHTML){
                event.target.style.backgroundColor = "red";
                this.myRef7.current.style.backgroundColor = "red";
                this.myRef3.current.style.backgroundColor = "red";
                if(this.myRef5.current.innerHTML === "X"){
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : true                         
                    });
                }
                else{
                    this.setState({
                        isPlayerX : null,
                        isWinnerX : false                         
                    });
                }                    
            }
        }
    }
     if(this.myRef1.current.innerHTML !== "" && this.myRef2.current.innerHTML !== "" && this.myRef3.current.innerHTML !== "" && this.myRef4.current.innerHTML !== "" && this.myRef5.current.innerHTML !== ""
     && this.myRef6.current.innerHTML !== "" && this.myRef7.current.innerHTML !== "" && this.myRef8.current.innerHTML !== "" && this.myRef9.current.innerHTML !== "" &&   this.state.isWinnerX==null){
        this.setState({
            isPlayerX : null
                                   
        });
    }   
}

    onClickHandler=(event)=>{
        if(this.state.isWinnerX == null){
        if(this.state.isPlayerX){                        
            if(event.target.id === "div1"){                
                if(this.myRef1.current.innerHTML === ""){
                    this.myRef1.current.innerHTML = "X";
                    this.setState({
                        isPlayerX : false                   
                    });
                    this.calculateWinner(event); 
                }
                             
            }
            else if(event.target.id === "div2"){
              
                if(this.myRef2.current.innerHTML === ""){
                    this.myRef2.current.innerHTML = "X";
                    this.setState({
                        isPlayerX : false                            
                    });
                    this.calculateWinner(event);
                }
            }                 
            
            else if(event.target.id === "div3"){
              
                if(this.myRef3.current.innerHTML === ""){ 
                    this.myRef3.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        });  
                        this.calculateWinner(event);
                }
            }
            else if(event.target.id === "div4"){
               
                if(this.myRef4.current.innerHTML === ""){ 
                    this.myRef4.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        }); 
                        this.calculateWinner(event); 
                }
            }
            else if(event.target.id === "div5"){
           
                if(this.myRef5.current.innerHTML === ""){ 
                    this.myRef5.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        });  
                        this.calculateWinner(event);
                }
            }
            else if(event.target.id === "div6"){
                
                if(this.myRef6.current.innerHTML === ""){ 
                    this.myRef6.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        }); 
                        this.calculateWinner(event); 
                }
            }
            else if(event.target.id === "div7"){
                
                if(this.myRef7.current.innerHTML === ""){ 
                    this.myRef7.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        });
                        this.calculateWinner(event);  
                }
            }
            else if(event.target.id === "div8"){
                
                if(this.myRef8.current.innerHTML === ""){ 
                    this.myRef8.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        }); 
                        this.calculateWinner(event); 
                }
            }
            else if(event.target.id === "div9"){
                
                if(this.myRef9.current.innerHTML === ""){ 
                    this.myRef9.current.innerHTML = "X";               
                        this.setState({
                            isPlayerX : false                            
                        });
                        this.calculateWinner(event);  
                }
            }
            
        }
        else{                      
            if(event.target.id === "div1"){
                
                if(this.myRef1.current.innerHTML === ""){
                    this.myRef1.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                   
                    });
                    this.calculateWinner(event);
                }               
            }
            else if(event.target.id === "div2"){
                
                if(this.myRef2.current.innerHTML === ""){
                    this.myRef2.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                            
                    });
                    this.calculateWinner(event);
                }
            }                 
            
            else if(event.target.id === "div3"){
              
                if(this.myRef3.current.innerHTML === ""){ 
                    this.myRef3.current.innerHTML = "O";               
                        this.setState({
                            isPlayerX : true                            
                        }); 
                        this.calculateWinner(event); 
                }
            } 
            if(event.target.id === "div4"){
               
                if(this.myRef4.current.innerHTML === ""){
                    this.myRef4.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                   
                    });
                    this.calculateWinner(event);
                }               
            }
            else if(event.target.id === "div5"){
              
                if(this.myRef5.current.innerHTML === ""){
                    this.myRef5.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                            
                    });
                    this.calculateWinner(event);
                }
            }                 
            
            else if(event.target.id === "div6"){
                
                if(this.myRef6.current.innerHTML === ""){ 
                    this.myRef6.current.innerHTML = "O";               
                        this.setState({
                            isPlayerX : true                            
                        }); 
                        this.calculateWinner(event); 
                }
            } 
            if(event.target.id === "div7"){
              
                if(this.myRef7.current.innerHTML === ""){
                    this.myRef7.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                   
                    });
                    this.calculateWinner(event);
                }               
            }
            else if(event.target.id === "div8"){
             
                if(this.myRef8.current.innerHTML === ""){
                    this.myRef8.current.innerHTML = "O";
                    this.setState({
                        isPlayerX : true                            
                    });
                    this.calculateWinner(event);
                }
            }                 
            
            else if(event.target.id === "div9"){
             
                if(this.myRef9.current.innerHTML === ""){ 
                    this.myRef9.current.innerHTML = "O";               
                        this.setState({
                            isPlayerX : true                            
                        });  
                        this.calculateWinner(event);
                }
            } 
    }
}
}
onResetHandler= (event)=>{  
 this.myRef1.current.innerHTML = "";
 this.myRef1.current.style.backgroundColor="darkkhaki";
 this.myRef2.current.innerHTML = "";
 this.myRef2.current.style.backgroundColor="darkkhaki";
 this.myRef3.current.innerHTML = "";
 this.myRef3.current.style.backgroundColor="darkkhaki";
 this.myRef4.current.innerHTML = "";
 this.myRef4.current.style.backgroundColor="darkkhaki";
 this.myRef5.current.innerHTML = "";
 this.myRef5.current.style.backgroundColor="darkkhaki";
 this.myRef6.current.innerHTML = "";
 this.myRef6.current.style.backgroundColor="darkkhaki";
 this.myRef7.current.innerHTML = "";
 this.myRef7.current.style.backgroundColor="darkkhaki";
 this.myRef8.current.innerHTML = "";
 this.myRef8.current.style.backgroundColor="darkkhaki";
 this.myRef9.current.innerHTML = "";
 this.myRef9.current.style.backgroundColor="darkkhaki";
this.setState({
    isPlayerX : true,
    isWinnerX : null
});

}


    render(){
    var player;
    var winner;
    if(this.state.isPlayerX != null)
         player = <h4>CURRENT PLAYER IS : {this.state.isPlayerX ? "X" : "O"} </h4>
   
    else{
        player = null;
        if(this.state.isWinnerX != null)
            winner =<h4>Winner is : {this.state.isWinnerX ? "X" : "O"}</h4>;
        else
            winner = <h4>Winner is : None</h4>;
    }
   
        
        

        return(
            <div className={classes.OuterDiv}> 
                <h1>Tic Tac Toe</h1>
                <div  className={classes.Box} id="div1" ref= {this.myRef1}
                    onClick={this.onClickHandler}>          
                </div>
                <div className={classes.Box} id="div2" ref= {this.myRef2} onClick={this.onClickHandler}>                   
                </div>
                <div className={classes.Box} id="div3" ref= {this.myRef3}  onClick={this.onClickHandler}>                  
                </div>
                <br/>
                <div  className={classes.Box} id="div4" ref= {this.myRef4}
                    onClick={this.onClickHandler}>          
                </div>
                <div className={classes.Box} id="div5" ref= {this.myRef5} onClick={this.onClickHandler}>                   
                </div>
                <div className={classes.Box} id="div6" ref= {this.myRef6}  onClick={this.onClickHandler}>                  
                </div>
                <br/>
                <div  className={classes.Box} id="div7" ref= {this.myRef7}
                    onClick={this.onClickHandler}>          
                </div>
                <div className={classes.Box} id="div8" ref= {this.myRef8} onClick={this.onClickHandler}>                   
                </div>
                <div className={classes.Box} id="div9" ref= {this.myRef9}  onClick={this.onClickHandler}>                  
                </div>
                <button className={classes.Button} value="Reset" onClick={this.onResetHandler}>RESET</button>
                {player}
                {winner}

            </div>


        );
    }
}

export default RenderBox;