import React, { useState }  from 'react'
import DisplayContent from './DisplayContent'

const Search = () => {;

    const [title, setTitle] = useState('')
    const onKeyDown = (event) => {
        if(event.key === "Enter") {
            setTitle(event.target.value)
        }
    }
    return (
        <>
        <h1>Myndaleit</h1>
            <input type="text" style={{ width: 600, height: 30 }} name="searchWords" id="keywords" placeholder="leitarorð"  
                onKeyDown={event => onKeyDown(event)}    
            />
        {title && (
        <DisplayContent title={title}/>
        )
    }
        </>
)}

export default Search

