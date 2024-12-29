import './App.css'
import { useRef, useState } from 'react';
function App(){
    // Function to set focus on input.

    const inputRef = useRef();
    
    function focusOnInput(){
        // document.getElementById("name");
        inputRef.current.focus();
    }

    return <div>
        Sign Up
        <input ref={inputRef} id="name" type={"text"}></input >
        <input type={"}text"}></input >
        <button onClick={focusOnInput} >Submit</button>        
    </div>
}

export default App 