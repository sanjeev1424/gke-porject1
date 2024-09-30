import React, { useState } from 'react'

const Try = () => {
    const [name, setName] = useState("")
    function handleSubmit(){
        
    }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>

            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="submit" />

       </form>
    </div>
  )
}

export default Try