import React, { useState }  from 'react'
import DisplayContent from './DisplayContent'

const Search = () => {;

    const [title, setTitle] = useState('')
    const [go, setTitleGo] = useState('')
    return (
        <>
        <h1>Myndaleit</h1>
            <input type="text" style={{ width: 600, height: 30 }} name="searchWords" id="keywords" placeholder="leitarorð"  
                onChange={event => setTitle(event.target.value)}
                onKeyPress={(ev) => {if (ev.key === 'Enter') {
                                        setTitleGo(ev.target.value)

                                    }}}    
            />
        {go && (
        <DisplayContent title={title}/>
        )
    }
        </>
)}

export default Search

