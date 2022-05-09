import {useNavigate} from 'react-router-dom'
const Book = (props) => {
    const { id, title, author, description,quantity } = props
    return
        // <div className="card" style={{width:'50rem',marginLeft:'25%',display:'flex'}}>
        // <div className="card-body">
        // <h5 className="card-title">{title}</h5> 
        // <p className="card-text">{author}</p>
        // <p className="card-text">{description}</p>
        // <p className="card-text">{quantity}</p>
        // </div>
        // </div>
        <div className="card">
            <div className="card-body">
            <h5>{title}</h5>
            </div>
        </div> 
   
}

export default Book 