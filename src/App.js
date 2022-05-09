import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SigninPage from './pages/signin.page';
import SignupPage from './pages/signup';
import UpdatebookPage from './pages/update';
import BookListPage from './pages/booklist';
import BookCreatePage from './pages/createbook'

 
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<SigninPage/>}/>
         <Route path="signup" element={<SignupPage/>}/>
         <Route path="signin" element={<SigninPage/>}/>
         <Route path="create-book" element={<BookCreatePage/>}/>
         <Route path="book-list" element={<BookListPage/>}/>
         <Route path='update-book' element={<UpdatebookPage/>}/>
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
