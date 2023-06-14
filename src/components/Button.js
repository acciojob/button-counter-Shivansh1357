import React,{useState}from "react"

const Button =()=>{
    let [cnt,setCnt]=useState(1);

    return (
        <div>
            <p>Button clicked {cnt} times</p>
            <button onClick={()=>{setCnt(cnt+1)}}>Click me</button>
        </div>
    )
}
export default Button