import React from 'react';
import { useParams } from 'react-router-dom';
import AddBook from '../component/AddBook';
import EditBook from '../component/EditBook';

function DetailPage() {
  const { id } = useParams();

  return (
    <>
      {id ? (
        // Render component for editing an existing book
        <EditBook bookId={id} />
      ) : (
        // Render component for creating a new book
        <AddBook />
      )}

    </>
  );
}

export default DetailPage;
