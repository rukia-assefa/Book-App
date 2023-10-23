import { styled} from "styled-components";
import { Paper, Skeleton} from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

export const StyledFormContainer= styled.div`
        wisth 40%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
        alignitems: center;
    
    
    `;
export const StyledForm= styled.form`
    display: flex;
    flex-direction: column;
    gap:16px;

`;
export const StyledInputWrapper= styled.div`
    display: flex;
    gap:8px;
    width:80%;


`;
export const StyledInput= styled.input`
    flex: 2;
    border: none;
    border: 1px solid #333;
    border-radius: 6px;
    padding:5px;

`;
export const StyledSelect= styled.select`
    flex: 2;
    border: none;
    border: 1px solid #333;
    border-radius: 6px;
    padding:5px;

`;

export const StyledLabel= styled.label`
    flex: 1;

`;
export const StyledButton= styled.button`
    border: none;
    padding:10px;
    color: white;
    background-color:#03a9f4;
    margin: 10px auto;
    border-radius: 6px;
    font-size:18px;

`;
export const StyledBookListItem = styled(Paper)`
  display: flex;
  margin-top: 5px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  align-items: center;
  padding: 5px 10px;
`;

export const StyledSkeleton = styled(Skeleton)`
  margin-bottom: 10px;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledContent = styled.div`
  
  margin-left: 10px;
  text-align: left;
  p,
  h4 {
    margin: 0;
  }
@media (max-width: 768px) {
  font-size: 0.8rem; 
  margin-bottom: 4px; 

}

`;
export const StyledDelete = styled(Delete)`
  margin: 0px 5px;
  color: red;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

export const StyledEdit = styled(Edit)`
  margin: 0px 5px;
  color: blue;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Create a styled component for the book item container
export const BookListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Create a styled component for the rating container
export const RatingContainer = styled.div`
/* Your default styles */
padding:12px;
display: flex;
align-items: center;
line-height: 1;

/* Media query for smaller screens (e.g., phones) */
@media (max-width: 768px) {
  flex-direction: column; 
  align-items: center;

  p {
    /* Adjust the styles for the text */
     margin: 0;
    font-size: 0.8rem;

  }
}
`;

// Create a styled component for the bookmark container
export const BookmarkContainer = styled.div`
/* default styles */
display: flex;
flex-direction: column; 
margin-top: 8px; 

/* Media query for smaller screens (e.g., phones) */
@media (max-width: 768px) {
  // margin-top: 8px; 
  font-size: 0.8rem;

}
`;





