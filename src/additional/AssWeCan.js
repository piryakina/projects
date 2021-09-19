import React from 'react'



export default function AssWeCan() {
    let link="https://ru.reactjs.org/docs/introducing-jsx.html";
    return(
        <div class="main">
            <ul>

            <li><a href={link}>test 1</a> </li>
                  
            <li><a href="https://ru.reactjs.org/docs/introducing-jsx.html">test 2</a></li>
            </ul>
            
            <NumberList></NumberList>
            <Tiktak></Tiktak>
        </div>

);

}
//const numbers = [1, 2, 3, 4, 5];
const days=["qe","qu","qo","qa"];
function NumberList() {

    const listItems = days.map((day,index) =>
      <li key={index}>
        {day}
      </li>
    );
    return (
      <ol>{listItems}</ol>
    );
  }
  

class Tiktak extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            comments: []
          };
    }
   
    getName()
    {    
        return(
            console.log("name")
        )
    }
    
    render(){
        return(
            <div>
                <button onClick={() => this.getName()}>пичупидо</button>
                <ol>
                    <li>{days}</li>
                </ol>
            </div>
        )
    }
}
