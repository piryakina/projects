import React from 'react'
import AssWeCan from './AssWeCan';

export default function First() {
    return(
        <div>
       <Welcome name="bib"></Welcome>
        <h1>zdarova {getUser()}</h1>
        <AssWeCan></AssWeCan>
        </div>
    )

}
const user = {
    name:"koks",
    age: 101
}
function getUser()
{
    return(user.name +"  " + user.age)
}

function Welcome(props) {
    return (
    <div>
        <h1>{props.name} live in box</h1>
        </div>);
}


