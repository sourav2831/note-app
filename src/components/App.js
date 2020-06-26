import React,{useState} from 'react';
import Header from "./Header.js";
import Sidebar from './SideBar.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchNotes, setSearchNotes] = useState([]);
  const [searchCheck,setSearchCheck]=useState(false);
  const [searchValue,setSearchValue]=useState("");
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function addNote(newNote) {
    setSearchCheck(false);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function onSearch(search){
    setSearchValue(search);
    if(search===""){
      setSearchNotes(notes);
      setSearchCheck(false);
    }
    else{
      const newNotes=notes.filter((noteItem,index)=>{
        return noteItem.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())!==-1;
      })
      setSearchNotes(newNotes);
      setSearchCheck(true);
    }
  }
  return (
    <div >
    <Header search={onSearch} />
    <Sidebar 
    onAddition={addNote} 
    myNotes={searchCheck?searchNotes:notes} 
    onDelete={deleteNote} 
    searchValue={searchValue.toLocaleLowerCase()}
    check={searchCheck}
    />
    </div>
  );
}
export default App;
