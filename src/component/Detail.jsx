import React, { useContext, useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Paper, Typography, Button ,Container} from '@mui/material';
import { BookFinderContext } from '../context';

const Detail = () => {
  const { bookData, addToFavorites, removeFromFavorites, favorites } = useContext(BookFinderContext);
  const { id } = useParams(); // Get the book ID from the URL parameter
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Find the book with the matching ID in the bookData
    const selectedBook = bookData.find((b) => b._id === id);
    setBook(selectedBook);
  }, [id, bookData]);

  const handleAddToFavorite = () => {
    addToFavorites(id);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(id);
  };

  return (<>
    <Container>
      {book ? (
        <Paper elevation={3} sx={{ p: 3, marginTop: 2 }}>
          <Typography variant="h4" component="h1" sx={{ marginBottom: 2,padding:'25px'}}>
            {book.title}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
            Author: {book.author}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            ISBN: {book.isbn}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Language: {book.language}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Publish Date: {book.publish_date}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Publishers: {book.publishers}
          </Typography>
          <img src={book.imageUrl} alt={book.title} style={{ maxWidth: '100%' }} />
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Description: {book.description}
          </Typography>
          
          {favorites.includes(id) ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRemoveFromFavorites}
              sx={{ marginTop: 2 }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToFavorite}
              sx={{ marginTop: 2 }}
            >
              Add to Favorites
            </Button>
          )}
        </Paper>
      ) : (
        <Typography variant="body2" color="textSecondary">
          Book not found.
        </Typography>
      )}
    </Container>
    <Button
              variant="outlined"
              color="secondary"
              style={{ marginTop: '16px' }}
              component={Link}
              to={`/list`}
              
              >Back
        </Button>
    </>
  );
};

export default Detail;
