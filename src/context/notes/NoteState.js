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
        console.log(json)
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
        const json =  response.json();
        console.log("Adding a new note")
        const note = {
            "_id": "6754121d30555020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }


    //delete a node
    const deleteNote = (id) => {
        // to do api call
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0YzUwMGQzZWUxMDA4ZTBhYTQ4MmUxIn0sImlhdCI6MTczMzA2NTQxMn0.4VizFEc9sMvqjZgMlV--LSYMbEAnoBDeQPb76I4BAHI"
            },
            body: JSON.stringify({title, description,tag})
        });
        const json =  response.json();
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;