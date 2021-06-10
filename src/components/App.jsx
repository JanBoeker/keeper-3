import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notesCollection, manageCollection] = useState([]);

  function addNote(newNote) {
    manageCollection(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notesCollection);
  }

  function deleteNote(id) {
    manageCollection((prevCollection) => {
      return prevCollection.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notesCollection.map((note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
