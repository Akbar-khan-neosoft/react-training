import React , {useState} from 'react';
import './HooksUseState.css';

var n = 0;
export function HooksUseState(){
    const [count , setCount] = useState(1);

    const onPromtButtonHandeler = function () {
        n = Number.parseInt(window.prompt("enter a number"));
    }


    const addButtonHandler = function() { 
        console.log("n = " , n)
        console.log("count = " ,count)

        let m = n+count

        setCount(m)

    }

    const substractButtonHandler = function() { 
        console.log("n = " , n)
        console.log("count = " ,count)

        let m = count - n;

        setCount(m)

    }
    const multiplyButtonHandler = function() { 
        console.log("n = " , n)
        console.log("count = " ,count)

        let m = count * n;

        setCount(m)

    }
    const divideButtonHandler = function() { 
        console.log("n = " , n)
        console.log("count = " ,count)

        let m = count / n;

        setCount(m)

    }


    return(
        <div>
            <br></br><br></br>Counter example to Explain useState hooks<br></br>
            <button onClick={onPromtButtonHandeler}>Click Here</button> And Enter The number by which you want to do Calculation 
            <br></br>Total count is <strong>{count}</strong> <br></br>

            <button onClick = {addButtonHandler}>Add</button> 
            <button onClick = {substractButtonHandler}>Substract</button>
            <button onClick = {multiplyButtonHandler}>Multiply</button>
            <button onClick = {divideButtonHandler}>Divide</button>
        </div>
    );
}


export default HooksUseState;