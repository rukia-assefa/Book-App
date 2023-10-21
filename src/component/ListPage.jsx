import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Alert, AlertTitle, Button,Rating} from '@mui/material';
import { BookFinderContext } from '../context';
import {
  Typography,
} from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios'; 
import {
  StyledBookListItem,
  StyledSkeleton,
  StyledImage,
  StyledContent,
  StyledDelete,
  StyledEdit,
  RatingContainer,
  Container,
  BookmarkContainer,
} from './Styled/StyledComponet';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ListPage = () => {
    const { bookData,setBookData, isLoading, isError,favorites, fetchBooksData,addToFavorites,removeFromFavorites} = useContext(BookFinderContext);
    const [sortOrder, setSortOrder] = useState('asc'); 
    const [visibleBooks, setVisibleBooks] = useState(5); // Number of books to initially display
    // eslint-disable-next-line no-unused-vars
    const [loadMoreBooks, setLoadMoreBooks] = useState(5); // Number of books to load when clicking "Load More"

  // Default sorting order is ascending
  // using use effect fetch the data by calling the fetchbook data comes from context js
  useEffect(() => {
    fetchBooksData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
// delete book when we click delete
  const handleDeleteClick = async (id) => {
    try {
      // Send a DELETE request to delete the book by ID
      await axios.delete(`http://localhost:3000/api/books/${id}`);
      // Remove the deleted book from the local bookData context
      setBookData((prevData) => prevData.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
    //to load the page after deleting
        fetchBooksData();
  };
  const handleSortClick = () => {
    // Toggle the sorting order between 'asc' and 'desc'
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    // Sort the bookData array based on the sorting order and the title property
    const sortedBooks = [...bookData].sort((a, b) => {
      // sorting by author name 
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
  
      if (newSortOrder === 'asc') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
  
    // Update the bookData state with the sorted array
    setBookData(sortedBooks);
  };
  const handleLoadMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + loadMoreBooks);
  };
  return (
    <>
        <Container maxWidth="md">
        <Typography variant="h4" component="h1" sx={{ marginTop: 10, marginBottom: 2 }}>
          Book List
        </Typography>
        
        <SearchBar  />
       
        <Button variant="contained" color="primary" onClick={handleSortClick} style={{ marginLeft: 'auto' , marginTop: '16px'}} >
          Sort by Title ({sortOrder === 'asc' ? 'A-Z'||'a-z' : 'Z-A'||'z-a'})
        </Button>
        <Paper elevation={3} sx={{ p: 2, marginTop: 2 }}>
          {isLoading && (
            <>
              <StyledSkeleton variant="rounded" width={370} height={60} />
              <StyledSkeleton variant="rounded" width={370} height={60} />
              <StyledSkeleton variant="rounded" width={370} height={60} />
              <StyledSkeleton variant="rounded" width={370} height={60} />
            </>
          )}
          {isError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Something went wrong — <strong>Please try again later</strong>
            </Alert>
          )}
          {bookData.length > 0 ? (
            <>
              {/* {bookData.map((book) => ( */}
              {bookData.slice(0, visibleBooks).map((book) => (

                <div key={book._id}>
                  <StyledBookListItem
                    elevation="4"
                    // onClick={() => handleEditClick(book._id)}
                  >
                    <StyledImage src={book.imageUrl} alt="" />
                    <StyledContent>
                      <h4>Author: {book.author}</h4>
                      <p>Title: {book.title}</p>
                      <p>Isbn: {book.isbn}</p> 
                    </StyledContent>
                    {/* edit button */}
                    <div style={{ display: 'flex' }}>
                    <Link to={`/detail/${book._id}`}>
                        <StyledEdit/>
                       </Link>
                    {/* Delete button */}
                      <StyledDelete
                        variant="outlined"
                        color="secondary"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent item click event
                          if(window.confirm("Are you sure you want to delete?")){
                            handleDeleteClick(book._id);
                          }
                        }}
                        sx={{ display: 'flex', minWidth: '100px', marginLeft: 'auto' }}
                      >
                        Delete
                      </StyledDelete>    
               {/* Add to Favorites / Remove from Favorites buttons */}
               <BookmarkContainer>
                {favorites.includes(book._id) ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent item click event
                      removeFromFavorites(book._id); // Remove from favorites
                    }}
                    style={{ width: '100px' }} // Set a fixed width
                  >
                    {/* Remove from Favorites */}
                    <BookmarkIcon></BookmarkIcon>
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent item click event
                      addToFavorites(book._id); // Add to favorites
                    }}
                    style={{ width: '100px' }} // Set a fixed width
                  >
                     <BookmarkBorderIcon></BookmarkBorderIcon>
                          {/* Add to Favorites */}
                  </Button>
                )}
            </BookmarkContainer>
               </div>
               
                  {/* Book rating */}
                  <RatingContainer>
                    <p style={{ margin: 0, paddingRight: '5px' }}>Rating</p>
                    <Rating name="rating" defaultValue={2.5} />
                    </RatingContainer>
                  </StyledBookListItem>
                </div>
                
              ))}
              {bookData.length > visibleBooks && (
                <Button variant="contained" color="primary" onClick={handleLoadMore}>
                  Load More
                </Button>
              )}
              </>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No books found matching the search criteria.
            </Typography>
          )}
           </Paper>
                <Button component={Link} to={`/detail`} variant="contained" color="primary" mt={2} 
                        style={{marginTop: '16px',alignContent:"center",padding:"16px"}} >
                            Create New Book
                  </Button> 
                  <br/>
                <Button component={Link}  to={`/favorites`} variant="contained" color="success" mt={2}
                        style={{marginTop: '16px',alignContent:"center",padding:"16px"}}
                >
                  View Favorites
                </Button>
      </Container>
    </>
  );
};
export default ListPage;