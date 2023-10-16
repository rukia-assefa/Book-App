import { useContext, useState } from "react";
import { BookFinderContext } from "../context";
import { TextField, Button } from '@mui/material';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const {bookData, setBookData,fetchBooksData } = useContext(BookFinderContext); // Access setBookData function from the context

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
  
    if (searchItem.trim() !== '') { // Check if searchItem is not empty
      const searchResult = bookData.filter((item) => {
        return (
          item.author.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.title.toLowerCase().includes(searchItem.toLowerCase())
        );
      });
  
      setBookData(searchResult);
    } else {
      // If searchItem is empty, fetch the original data
      fetchBooksData();
    }
  };
  

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Search Books"
        type="search"
        value={searchItem}
        onChange={handleChange}
        placeholder="Search by title or author"
        sx={{ marginBottom: 2, width: '75%' }}
      />

      <Button 
        variant="contained" 
        color="primary"  
        onClick={handleSearch}
        sx={{ marginLeft: 2 }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
