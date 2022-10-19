import React from "react";


/*export class Greetings extends React.Component{
    constructor(props){
        super(props)

        this.state={
            num:0,
        }
    }
    incrementNumber = () =>{
        this.setState({
            num:this.state.num +1
        })
    }
    decrementNumber = () =>{
        this.setState({
            num:this.state.num -1
        })
    }
    render(){
        const{name,hobby} = this.props
        const{ num} = this.state;
        return(
            <div>
               { /*<h1>hello,welcome {name}.my first hobby is {hobby.hobby1} </h1>}
               <h1>{num}</h1>
               <div>
                <button onClick={this.incrementNumber}>ADD</button>
                <button onClick={this.decrementNumber}>SUBTRACT</button>
               </div>
            </div>
        )
    }
}*/


export function Greetings(props){
    const{name, hobby}= props
    const[num, setNum] = React.useState(0)
    const incrementNumber = () => {
        setNum(prev => prev +1)
    }
    const decrementNumber = () => {
        setNum(prev=>prev -1)
    }
    return(
        <div>
            {/*<h1>hello,welcome.My hobby is {hobby.hobby1} </h1>*/}
            <div>
                <button onClick={incrementNumber}>ADD</button>
                <button onClick={decrementNumber}>SUBTRACT</button>
               </div>
        </div>
    )
}
export default Greetings