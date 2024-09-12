import React from 'react'
import Input from './Input'

function ML() {
    return (
        <div>
            <Input
            type= "text"
            placeholder= "type url"
            className="w-3/6 border-2 border-black"
            />
            <button className='bg-red-600 p-5'>Submit</button>
        </div>
    )
}

export default ML
