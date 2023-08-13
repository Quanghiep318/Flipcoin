import React, { Component } from 'react';
import "./FlipCoin.css";

export default class FlipCoin extends Component {
    constructor(){
        super();
        //khoi tao state
        this.state={
            isVisible:true,
            img:"",
            value:0,
            head:0,
            tail:0,

        }
    }
    //Khoi tao su kien click
    handleClick=()=>{
        if(this.state.value===10){
            this.setState({
            isVisible:true,
            img:"https://www.pcgs.com/UserImages/30016526o.jpg",
            value:0,
            head:0,
            tail:0,
            })

        } else if(this.state.value !==10 &&this.state.value %2 ==0){
            this.setState({
                isVisible: false,
                img:"https://www.pcgs.com/UserImages/30016526o.jpg",
                value: this.state.value +1,
                head: this.state.head +1,

            });
        } else if(this.state.value !==10 && this.state.value %2 !==0){
            this.setState({
                isVisible:false,
                img:"https://www.pcgs.com/UserImages/30016526r.jpg",
                value: this.state.value +1,
                tail: this.state.tail +1,
            })
        }
    };
    render() {
    return (
      <div>
        <h1>FLIPCOIN</h1>
        <img src={this.state.img} alt="" />
        {/* <img src="https://www.pcgs.com/UserImages/30016526r.jpg" alt="" /> */}
        <div>
            <button onClick={this.handleClick}>FLIP ME</button>
        </div>
        <p>Out of {this.state.value} Flips, there have been {this.state.head} heads and {this.state.tail} tails</p>
      </div>
    )
  }
}
