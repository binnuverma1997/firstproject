import React,{useState} from 'react'
import './unsplash.css'
function Unsplash() {
    const [value, setvalue] = useState("")
const searchbtn=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id= NyNG5JZ4-Jo40TSGe_o74uwDfx97ZgBHjGlsS6RipvU&query=${value}`   )
    .then(res=>res.json())
    .then(res2=>{
        console.log(res2)
    })
}
   
    return (
       
        <div>
            <div className='searche'>
            <span>Search</span>
            <input type='text' onChange={(e)=>setvalue(e.target.value)}/>
            <button onClick={()=>searchbtn()}>Send</button>
            </div>
        </div>
    )
}

export default Unsplash
