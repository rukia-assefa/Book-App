import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ListPage from "./component/ListPage";
import DetailPage from "./Pages/DetailPage";
import PrivateRoute from "./privateRoute";
import Home from './Pages/HomePage';
import {BookProvider} from "./context"
import DrawerAppBar from './Nav/Nav';
import { CssBaseline, Container} from '@mui/material';
import Signup from './component/Signup';
import FavoritesPage from './Pages/FavoritesPage';


function App() {


  return (
   <BookProvider>
    <CssBaseline />

     <DrawerAppBar/>

     <Container maxWidth="lg">

      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/sign-up' element={<Signup/>}/>

            <Route
              path="/list"
              element={
                <PrivateRoute >
                  <ListPage />
                </PrivateRoute>
              }
            />
                <Route path="/detail/:id" element={
                  <PrivateRoute>
                      <DetailPage />
                  </PrivateRoute>
                } />
                <Route path="/detail" element={
                  <PrivateRoute>
                    <DetailPage />
                  </PrivateRoute>
                } />
              <Route path="/favorites" element={
                <PrivateRoute>
                  <FavoritesPage/>
                </PrivateRoute>
              } />
      </Routes>

    </Container>

    </BookProvider>
  );
}

export default App;


