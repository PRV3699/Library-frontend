import { useEffect, useState } from "react";
import { getBooks } from "../services/book";
import { deleteBook } from "../services/book";
import{ createBook } from "../services/book";
import { useNavigate,Link } from "react-router-dom"
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { updateBook } from '../services/book'
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
       
        const [title, setTitle] = useState('')
        const [author, setAuthor] = useState('')
        const [description, setDescription] = useState('')
        const [quantity, setQuantity]= useState(0)
        
        const navigate = useNavigate()

        const onUpdateBook = async () => {
            if (title.length === 0) {
            alert('set title')
            } else if (author.length === 0) {
            alert('set category')
            } else if (description.length === 0) {
                alert('set category')
            } else if (quantity.length === 0) {
                alert('set quantity')
            } else {
            const result = await updateBook(title, author, description, quantity,id)
            if (result) {
                navigate('/book-list')
            } else {
                alert('You are not admin')
            }
            }
        }

        return (
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Update</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className="form">
                    <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        onChange={(e) => {
                        setTitle(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />{' '}
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        onChange={(e) => {
                        setAuthor(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />{' '}
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onChange={(e) => {
                        setDescription(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />{' '}
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        onChange={(e) => {
                        setQuantity(e.target.value)
                        }}
                        type="number"
                        className="form-control"
                    />
                    </div> 
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Update
                        </button>
                </div>
                </div>
            </div>
            </div>
        )
      
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
        </div>
        </div>
}
export default BookListPage