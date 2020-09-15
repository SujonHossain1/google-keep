import React from 'react';
import './Note.css';

const Note = (props) => {
    const { title, message } = props.note;
    return (
        <div className="col-md-6 mt-5 mb-3">
            <div className="note-style">
                <h4> {title} </h4>
                <p> {message} </p>
                <div className="text-right">
                    <button
                        onClick={() => props.handleDeleteNote(props.note)}
                        className="btn btn-style"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Note;