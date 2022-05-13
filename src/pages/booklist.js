import { useEffect, useState } from "react";
import { getBooks } from "../services/book";
import { deleteBook } from "../services/book";
import{ createBook } from "../services/book";
import { useNavigate } from "react-router-dom"
import {DropdownButton,Dropdown} from 'react-bootstrap'
const BookListPage =(props)=>{
    const [books, setBooks] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async() => {
       const result = await getBooks()
       if (result) { 
           setBooks(result)
        }
    }
    const onDeleteBook = async (id) => {
        const result = await deleteBook(id)
        if(result)
        {
            window.location.reload();
            alert('Book is deleted');
        }
        else {
            alert('You are not an admin');
        }
    }
    const UpdatebookPage = async (id) => {
        sessionStorage['bid']=id
        navigate('/update-book')
    }
   
    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
        
        navigate('/signin')
    }
    return <div className="container">
         <h2 className='header'>List of Books</h2>
         <DropdownButton id="dropdown-basic-button" title="Dashboard" style={{float:'right'}}>
        {/* <Dropdown.Item href="/profilepage">Profile</Dropdown.Item> */}
        <Dropdown.Item  href="/create-book">Entry Book</Dropdown.Item>
        <Dropdown.Item onClick={logout} href="#/action-2">Logout</Dropdown.Item>
        </DropdownButton>
         <div className='book-table'>
         <table className="table table-success table-striped">
             <table className="itable" style={{border:'2px solid'}}>
                 <thead>
                     <tr style={{border:'1px solid'}}>
                         <th>Title</th>
                         <th>Author</th>
                         <th>Description</th>
                         <th>Quantity</th>
                         <th>   Operations</th>
                         </tr>
                         </thead>
                         <tbody>
                             {books.map((book) => {
                                 const {id, title, author,description,quantity} = book
                                 return (
                                     <tr>
                                     
                                     <td>{title}</td>
                                     <td>{author}</td>
                                     <td>{description}</td>
                                     <td>{quantity}</td>
                                     <td><button onClick={()=>onDeleteBook(id)} className="btn btn-success">delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                     <button onClick={()=>UpdatebookPage(id)} className="btn btn-success">update</button></td>
                                     </tr>
                                     )
                                     })}
                            </tbody>
            </table>
            </table>
        </div>
        </div>
}
export default BookListPage