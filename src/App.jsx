import { useState } from 'react'
import './App.css'



function App(){
    const [count,setcount] = useState(0);
    
    function increasecounter() {
        setcount(count + 1)
    }
    
    return <div>
        <button onClick={increasecounter}> Increase :  {count}</button>
    </div>
}

export default App
