import React, { useState } from "react";
import NoteContext from "./noteContext";
// import { data } from "react-router-dom";


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInital = []
    const [notes, setNotes] = useState(notesInital)

     //get all node
     const getNotes = async() => {
        //API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0YzUwMGQzZWUxMDA4ZTBhYTQ4MmUxIn0sImlhdCI6MTczMzA2NTQxMn0.4VizFEc9sMvqjZgMlV--LSYMbEAnoBDeQPb76I4BAHI"
            },
        });
        const json = await response.json();
        setNotes(json)
    }



    //add a node
    const addNote = async(title, description, tag) => {
        // to do api call
        //API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0YzUwMGQzZWUxMDA4ZTBhYTQ4MmUxIn0sImlhdCI6MTczMzA2NTQxMn0.4VizFEc9sMvqjZgMlV--LSYMbEAnoBDeQPb76I4BAHI"
            },
            body: JSON.stringify({title, description,tag})
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }


    //delete a node
    const deleteNote = async(id) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0YzUwMGQzZWUxMDA4ZTBhYTQ4MmUxIn0sImlhdCI6MTczMzA2NTQxMn0.4VizFEc9sMvqjZgMlV--LSYMbEAnoBDeQPb76I4BAHI"
            },
        });
        const json =  response.json();
        // to do api call
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0YzUwMGQzZWUxMDA4ZTBhYTQ4MmUxIn0sImlhdCI6MTczMzA2NTQxMn0.4VizFEc9sMvqjZgMlV--LSYMbEAnoBDeQPb76I4BAHI"
            },
            body: JSON.stringify({title, description,tag})
        });
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;