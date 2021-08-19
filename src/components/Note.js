import React from 'react'

const Note = ({id, title, content, onDelete}) => {
   function deleteHandler () {
       onDelete(id)
   }
    
   return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button
            onClick={deleteHandler}
            >DELETE</button>
        </div>
    )
}

export default Note
