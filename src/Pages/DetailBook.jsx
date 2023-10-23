import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../component/Detail';
function DetailBook() {
  const { id } = useParams();

  return (
    <>
        <Detail bookId={id} />

    </>
  );
}

export default DetailBook;
