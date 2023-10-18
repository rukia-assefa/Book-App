import { useState } from 'react';
import {
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledSelect,
} from './Styled/StyledComponet';
// import { BookFinderContext } from '../context';
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import {  TextField,Button } from '@mui/material';

export default function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    imageUrl: '',
    language: '',
    isbn:'',
    publish_date: '',
    publishers: '',
    description:'',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
      // collecting the user input

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 const formValidation = () => {
    let listErrors = {};
    // Author validation
    if (formData.author.trim() === '') {
      listErrors.author = 'Author name cannot be empty!';
    }
    // You can add more validation rules for other fields here
    setErrors(listErrors);
    return Object.keys(listErrors).length === 0;
  };
const handleSubmite = (e) => {
  e.preventDefault();
    if (formValidation()) {
      axios
        .post('https://blooming-sea-21659-8d11e6370d1b.herokuapp.com/api/books/book', formData)
        .then(function (response) {
          console.log(response);
          // After successfully adding the book, navigate to the list page
          navigate("/list");
        })
        .catch(function (error) {
          console.log(error);
        });
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
    <>
      <StyledFormContainer>
        <h1> Add New Book </h1>
        <StyledForm action="" onSubmit={handleSubmite}>
         
          <StyledInputWrapper>
            <StyledLabel htmlFor="author">
              {' '}
              Author Name <span style={{ color: 'red' }}>*</span>:
            </StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="author"
              type="text"
              value={formData.author}
            ></StyledInput>
            {errors.author && (
              <div style={{ color: 'red' }}>{errors.author}</div>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="title">Title :</StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="title"
              type="text"
              value={formData.title}
            ></StyledInput>
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="image url"> Image Url :</StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="imageUrl"
              type="img"
              value={formData.imageUrl}
            ></StyledInput>
          </StyledInputWrapper>


          <StyledInputWrapper>
          <StyledLabel htmlFor="language"> Language :</StyledLabel>
          <StyledSelect
            name="language"
            onChange={handleChange}
            value={formData.language}
          >
            <option value="">Select a language</option>
            {languageOptions.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </StyledSelect>
        </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="isbn"> Isbn :</StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="isbn"
              type="text"
              value={formData.isbn}
            ></StyledInput>
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="publish_date"> Publish Date :</StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="publish_date"
              type="date"
              value={formData.publish_date}
            ></StyledInput>
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="publishers">Publishers :</StyledLabel>
            <StyledInput
              onChange={handleChange}
              name="publishers"
              type="text"
              value={formData.publishers}
            ></StyledInput>
          </StyledInputWrapper>

          <StyledInputWrapper>
          <StyledLabel htmlFor="description"> Description:</StyledLabel>
          <TextField

            onChange={handleChange}
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={3}
            style={{ marginTop: '25px' ,  flex: 2,
            border: '1px solid #333',
            borderRadius: '6px',
            padding:'5px'}}
            value={formData.description}
          ></TextField>
        </StyledInputWrapper>
          <StyledButton>Add Book</StyledButton>
        </StyledForm>
            
        </StyledFormContainer>
        <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: '16px' }}
              component={Link}
              to={`/list`}
              
              >Back
        </Button>  
    </>
  );
}
