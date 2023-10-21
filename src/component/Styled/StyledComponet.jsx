import { styled} from "styled-components";
import { Paper, Skeleton } from '@mui/material';
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
`;
export const StyledDelete = styled(Delete)`
  margin: 0px 5px;
  color: red;
  cursor: pointer;
`;
export const StyledEdit = styled(Edit)`
  margin: 0px 5px;
  color: blue;
  cursor: pointer;
`;

// Create a styled component for the book item container
export const BookListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Create a styled component for the rating container
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 0.8rem; // Adjust font size for smaller screens
  }
`;

// Create a styled component for the bookmark container
export const BookmarkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; // Push the bookmark to the right
  
  @media (max-width: 768px) {
    margin-left: 0; // Reset the margin for bookmark on smaller screens
  }
`;
export const Container = styled.div`
  /* Your default styles for larger screens */
  font-size: 16px;
  margin: 20px;

  @media (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px (typical for phones) */
    font-size: 14px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    /* Adjust styles for screens with a maximum width of 480px (smaller phones) */
    font-size: 12px;
    margin: 5px;
  }
`;