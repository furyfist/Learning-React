import './App.css'

function App(){
    // Function to set focus on input.
    function focusOnInput(){
        document.getElementById("name").focus()
    }

    return <div>
        Sign Up
        <input id="name" type={"text"}></input >
        <input type={"}text"}></input >
        <button onClick={focusOnInput} >Submit</button>        
    </div>
}

export default App