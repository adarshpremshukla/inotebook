import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInital = [
        {
            "_id": "67540156f48b23d8e8a6d0fc",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My Title",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T08:03:34.830Z",
            "__v": 0
        },
        {
            "_id": "6754121d3015020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        },
        {
            "_id": "6754121d3305020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        },
        {
            "_id": "6754121d3405020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        },
        {
            "_id": "6754121d3055020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        },
        {
            "_id": "6754121d5305020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        },
        {
            "_id": "6754121d7305020e1099d9345",
            "user": "674c500d3ee1008e0aa482e1",
            "title": "My hello paazi",
            "description": "plz do something",
            "tag": "personal",
            "date": "2024-12-07T09:15:09.943Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInital)


    //add a node
    const addNote = (title, description, tag) => {
        // to do api call
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
    const deleteNote = () => {

    }

    //edit a note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;