import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  const [note, setNote] = useState(
    {
      title:props.title,
      content:props.content
    }
  );
function handleDelete(){
    props.onDelete(props.id);
}
  function handleModify() {
    props.onDelete(props.id);
    props.onModify(note);    
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  return (
    <div>
          <Fab onClick={handleDelete} className="fab">
        <DeleteIcon />
      </Fab>
      <form className="create-note">
        {(
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={13.5}
        />
          <Fab onClick={handleModify}>
            <AddIcon />
          </Fab>
      </form>
    </div>
  );
}

export default Note;
