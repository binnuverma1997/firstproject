import React,{useState} from 'react'
import './Darkmode.css'
function Darkmode() {
const [dark, setmode] = useState(false)
    return (
        <div className={dark?'darkmode':'defult'}>
            <div className='nav'>
                <label class="switch">
                <input type="checkbox" 
                onChange={()=>setmode(!dark)}
                />
                <span class="slider round"></span>
                </label>
            </div>

            <div className='conteint'>
    <h1 style={{margin:'0'}}>{dark?'Dark mode is on':'light mode is on'}</h1>
                <p style={{fontSize:'20px'}}>if you want to see magic then press to toggle button</p>
            </div>
        </div>
    )
}

export default Darkmode
