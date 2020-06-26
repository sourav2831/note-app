import React from "react";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchBar from "./SearchBar";
function Header(props) {
  function onSearch(search){
    props.search(search);
  }
  return (
    <header>
      <h1>
        <MenuBookIcon />
        Note Book
      </h1>
      <SearchBar search={onSearch} />
    </header>
  );
}

export default Header;