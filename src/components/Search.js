import React, { useState }  from 'react'
import DisplayContent from './DisplayContent'

const Search = () => {

    const [title, setTitle] = useState('')

    return (
        <>
        <h1>Myndaleit</h1>
            <input type="text" style={{ width: 600, height: 30 }} name="searchWords" id="keywords" placeholder="leitarorð"  
                onClick={event => setTitle(event.target.value)}
            />
        {title && (
            <DisplayContent title={title}/>
        )
        }
        </>
    )}

export default Search
