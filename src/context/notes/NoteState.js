import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInital =[
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
          "_id": "6754121d305020e1099d9345",
          "user": "674c500d3ee1008e0aa482e1",
          "title": "My hello paazi",
          "description": "plz do something",
          "tag": "personal",
          "date": "2024-12-07T09:15:09.943Z",
          "__v": 0
        }
      ]
      const[notes,setNotes] = useState(notesInital)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;