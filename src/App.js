import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'


const App = () => {
 const [notes, setNotes] = useState([])

function addNotes(newNote) {
    setNotes(prevNotes => {
        return [...prevNotes,newNote]
    })
}

function deleteNotes(id) {
    setNotes(prevNotes => {
     return   prevNotes.filter((note,index) => {
            return index !== id
        })
    })
 
}


    return (
        <div>
        <Header />
        <CreateArea onAdd={addNotes}/>
        {notes.map((note,index) => 
            <Note
        key={index}
        id={index}     
        title={note.title}
        content={note.content} 
        onDelete={deleteNotes}   
        />
        )}
     
         <Footer /> 
        </div>
    )
}

export default App

