import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Console from './console.jsx'

function Consoles(){

    const[consoles, setConsoles] = useState([]);
    const[selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setConsoles(response.data);
        });

    }, [])

    if(consoles.length === 0) {
        return( <p>Loading...or in this case flying!
        <img src="https://24.media.tumblr.com/359a426070e1839c0a00243e7ddc8425/tumblr_n0g2rk5SWw1rikiwao1_500.gif" alt="pika and pichu "/>
        </p>
        );
    }

    if(!!selectedConsole){
        return( <div>
            <Console id={selectedConsole}/>
            <button onClick={()=> setSelectedConsole (null)}>Back</button>
            </div>
        );
    }

    return ( <div>
        {consoles.map((console) => {
        return (
            <p key={consoles.id}>
        <button onClick={() => setSelectedConsole (console.id)}>
            {console.name} - <img src={console.image} alt={console.name}/>
            </button>
            </p>
        );
        })}
    </div>
    );
}

export default Consoles;