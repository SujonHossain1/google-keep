import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import './CreateNote.css';

const CreateNote = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({
        title: "",
        message: ""
    });

    const handleInputNote = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => {
            // if (name === "title") {
            //     return {
            //         ...prevNote,
            //         title: value
            //     }
            // } else if (name === "message") {
            //     return {
            //         ...prevNote,
            //         message: value
            //     }
            // }
            return {
                ...prevNote,
                [name] : value
            }
        })
    }



    const handleSubmitNote = (event) => {
        if (note.title.length > 0 || note.message.length > 0) {
            setNotes([...notes, note]);
            resetFormValues();
        } else {
            alert("Note is Empty !!!");
        }

        event.preventDefault();

    }
    const resetFormValues = () => {
        setNote({
            title: "",
            message: ""
        })
    }

    const handleDeleteNote = (note) => {
        const newNote = notes.filter((noteItem) => noteItem.title !== note.title);
        setNotes(newNote);
    }


    useEffect(() => {
        //auto increase height
        document.querySelector('textarea').addEventListener('keydown', autoIncrease);
        function autoIncrease() {
            var el = this;
            setTimeout(function () {
                el.style.cssText = 'height:auto; padding:0';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }, 0);
        }
    })
 

    return (
        <div className="container">
            <div className="col-md-8 mx-auto  p-3 my-5 box-style ">
                <form onSubmit={handleSubmitNote} method="POST" >
                    <div className="form-group ">
                        <input
                            type="text"
                            name="title"
                            onChange={handleInputNote}
                            value={note.title}
                            className="form-control input-field"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            // style={textareaStyle}
                            // onKeyDown={handleKeyDownNote}
                            name="message"
                            onChange={handleInputNote}
                            value={note.message}
                            className="form-control"
                            placeholder="write a note..."
                        >
                        </textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-style text-white mt-3"> Add Note </button>
                    </div>
                </form>
            </div>

            <div className="container">
                <h3> Total Notes: {notes.length} </h3>
                <div className="row">
                    {
                        notes.map((note, index) => <Note
                            key={index}
                            note={note}
                            handleDeleteNote={handleDeleteNote}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateNote;