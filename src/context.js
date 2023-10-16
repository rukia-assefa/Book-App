import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookFinderContext = createContext();
export const BookProvider = (props) => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const fetchBooksData = () => {
    axios
      .get("http://localhost:3000/api/books/books")
      .then((response) => {
        setBookData(response?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  // Initialize favorites as an array of book IDs, not book objects
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (bookId) => {
    // Check if the bookId is not already in favorites
    if (!favorites.includes(bookId)) {
      const newFavorites = [...favorites, bookId];
      setFavorites(newFavorites);
      // Update local storage with the new favorites
      localStorage.setItem('favoriteIds', JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (bookId) => {
    // Filter out the bookId to remove it from favorites
    const newFavorites = favorites.filter((id) => id !== bookId);
    setFavorites(newFavorites);
    // Update local storage with the updated favorites
    localStorage.setItem('favoriteIds', JSON.stringify(newFavorites));
  };

  useEffect(() => {
    // When the component mounts, load favorite IDs from local storage
    const storedFavoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || [];
    setFavorites(storedFavoriteIds);
  }, []);


  return (
    <BookFinderContext.Provider
      value={{ 
        bookData,
        setBookData, 
        isLoading,
        isError,
        fetchBooksData,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </BookFinderContext.Provider>
  );
};

export { BookFinderContext };
