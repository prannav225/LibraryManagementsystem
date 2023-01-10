import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../styles/booklist.css'
const BookList = () => {
    let [book, setbook] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:2000/books')
            let data = await response.json();
            setbook(data);
        }
        fetchdata();
    }, [book]) //reloades every time when the operation performed on books

    //to delete a book permanentaly from a server

    let remove = (id, title) => {
        fetch(`http://localhost:2000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} will be deleted permanentaly`)

    }

    let navigate = useNavigate()
    let read = (id) => {
        navigate(`/admin/booklist/${id}`)
    }
    return (
        <div className="booklist">
            <h1>Book List</h1>
            <h2>Total number of books: {book.length}</h2>
            {book.map(data => (
                <div className="book_contanier" id='contanier'>
                    <img src={data.thumbnailUrl} alt="" />
                    <div className="bookcard">
                        <h2>{data.title}</h2>
                        <h4>{data.authors}</h4>
                        <p>Pages: {data.pageCount}</p>
                        <p>{data.categories}</p>
                        <button className="btn" id="readbtn" onClick={() => read(data.id)}>Read more</button>
                        <button onClick={() => remove(data.id, data.title)} className='btn'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookList;