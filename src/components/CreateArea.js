import React, { useState } from 'react'

const CreateArea = ({onAdd}) => {
   const [note, setNote] = useState({
       title: "",
       content: ""
   }) 
   
function handleChange (event) {
   const { name, value } = event.target 
   setNote(prevNote => {
     return {
         ...prevNote,
         [name]: value
     }
       
   })
}   
   
   function submitNotes(event){
    onAdd(note)
    setNote({
         
 title: "",
 content: ""
       
    })
    event.preventDefault()
   }


    return (
        <div>
            <form>
                <input name="title" 
                placeholder="Title"
                onChange={handleChange}
                value={note.title}    
                />
                <textarea name="content" 
                placeholder="Add a note..."
                onChange={handleChange}
                value={note.content}    
                />
                <button
                onClick={submitNotes}
                >ADD</button>
            </form>
        </div>
    )
}

export default CreateArea
