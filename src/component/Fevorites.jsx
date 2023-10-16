import React, { useContext } from 'react';
import { Paper, Typography, Button ,Container} from '@mui/material';
import { BookFinderContext } from '../context';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Favorites = () => {
  const { bookData, favorites, removeFromFavorites } = useContext(BookFinderContext);

  return (<>
    <Container maxWidth="md">
        <Typography variant="h4" component="h1" mt={4} mb={2}
        style={{padding:'45px', textAlign:'center'}}
        >
        My Favorites Books
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="body2" color="textSecondary">
          You haven't added any favorites yet.
        </Typography>
      ) : (
        favorites.map((bookId) => {
          // Find the book by its ID in the bookData array
          const book = bookData.find((b) => b._id === bookId);

          if (!book) {
            return null; // Book not found, skip rendering
          }

          return (
            <Paper key={book._id} elevation={3} sx={{ p: 2, marginTop: 2 }}>
              <StyledImage src={book.imageUrl} alt="" />
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="subtitle1">{book.author}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeFromFavorites(book._id)} // Call removeFromFavorites to remove the book
                style={{ marginTop: '16px', display:'flex',fontSize:'15px' }}
                >
                Remove from Favorites
              </Button>
              <Button
                  component={Link}
                  to={`/detail/${book._id}`}
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: '16px'}}

                  >
                        Edit
               </Button>

            </Paper>
            
          );
          
        })
      )}
       <Button
              variant="outlined"
              color="secondary"
              style={{ marginTop: '16px' }}
              component={Link}
              to={`/list`}
              
              >Back
        </Button>
    </Container>
  </>);
};

export default Favorites;
