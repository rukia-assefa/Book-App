import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, TextField, Button,MenuItem } from '@mui/material';
import { BookFinderContext } from '../context';
import styled from 'styled-components';
import axios from 'axios';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
`;
export default function EditBook() {
  const { bookData } = useContext(BookFinderContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    author: '',
    title: '',
    imageUrl: '',
    isbn:'',
    language: '',
    publish_date: '',
    publishers: '',
    description:'',
  });

  useEffect(() => {
    if (id) {
      const existingBook = bookData.find((item) => item._id === id);
      if (existingBook) {
        // Format the existing date to 'YYYY-MM-DD'
        const formattedDate = existingBook.publish_date.substring(0, 10);
        existingBook.publish_date = formattedDate;
        setBook(existingBook);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, bookData, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      const updatedBook = { ...book };

      if (id) {
        // Send a PATCH request to update the book with the provided ID
        await axios.patch(`http://localhost:3000/api/books/${id}`, updatedBook);
        // After saving, navigate back to the book list
        navigate('/list');
      } else {
        // If there's no ID, log an error
        console.error('Missing ID for book update');
      }
    } catch (error) {
      // If there's an error, log it
      console.error('Error updating book:', error);
    }
  };
  const languageOptions = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" mt={4} mb={2}>
      </Typography>
      <StyledPaper elevation={3} style={{ marginTop: '25px' }}>
        <form>
          <TextField
            label="Title"
            name="title"
            value={book.title}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginTop: '25px' }}

          />
          <TextField
            label="Author"
            name="author"
            value={book.author}
            onChange={handleInputChange}
            fullWidth
            style={{ marginTop: '25px' }}
          />
          <TextField
            label="ImageUrl"
            name="imageUrl"
            value={book.imageUrl}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginTop: '25px' }}

          />
         
         <TextField
            select
            label="Language"
            name="language"
            value={book.language}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginTop: '25px' }}
          >
            {languageOptions.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginTop: '25px' }}

          />

          <TextField
            label="Publish_date"
            name="publish_date"
            type='date'
            value={book.publish_date}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginTop: '25px' }}

          />
          <TextField
            label="Publishers"
            name="publishers"
            value={book.publishers}
            onChange={handleInputChange}
            fullWidth
            style={{ marginTop: '25px' }}
          />
          <TextField
            label="Description"
            name="description"
            value={book.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            style={{ marginTop: '25px' }}
          />


          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{ marginTop: '25px' }}
          >
            Save
          </Button>
        </form>
      </StyledPaper>
    </Container>
  );
}
