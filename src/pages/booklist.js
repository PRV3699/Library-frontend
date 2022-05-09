import { useEffect, useState } from "react";
import { getBooks } from "../services/book"

const BookListPage =(props)=>{
    const [books, setBooks] = useState([])
    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async() => {
       const result = await getBooks()
       if (result) { 
           setBooks(result)
        }
    }
    
    return <div className="container">
         <h2 className='header'>List of Books</h2>
         <div className='book-table'>
             <table style={{border:'2px solid'}}>
                 <thead>
                     <tr style={{border:'1px solid'}}>
                         <th>Title</th>
                         <th>author</th>
                         <th>description</th>
                         <th>quantity</th>
                         </tr>
                         </thead>
                         <tbody>
                             {books.map((book) => {
                                 const {bookId, title, author,description,quantity} = book
                                 return (
                                 <tr>
                                     
                                     <td>{title}</td>
                                     <td>{author}</td>
                                     <td>{description}</td>
                                     <td>{quantity}</td>
                                     </tr>
                                     )
                                     })}
                                     </tbody>
                                     </table>
                                     </div>
                                     </div>
                          }
export default BookListPage