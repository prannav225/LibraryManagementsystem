import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'
const AddBook = () => {
    let [title, setTitle] = useState("")
    let [author, setAuthor] = useState("")
    let [categories, setCategories] = useState("")
    let [pagecount, setPagecount] = useState("")
    let [shortDescription, setShortdescription] = useState("")
    let [longDescription, setLongdescription] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = { title, author, categories, pagecount, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch('http://localhost:2000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert("Book added successfully");
        navigate('/admin/booklist');
    }

    let navigate = useNavigate();

    return (
        <div className="page">
                <h1>Add Book</h1>
            <div className="addbook" id="contanier">
                <div className="form" onSubmit={handleSubmit}>
                    <form action="">
                        <div className="title">
                            <input type="text" placeholder="Title of the book" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="authors">
                            <input type="text" placeholder="Written By" required value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="categories">
                            <input type="text" placeholder="Category" required value={categories} onChange={(e) => setCategories(e.target.value)} />
                        </div>
                        <div className="pagecount">
                            <input type="text" placeholder="No. of pages" required value={pagecount} onChange={(e) => setPagecount(e.target.value)} />
                        </div>
                        <div className="shortdescription">
                            <textarea name="shortdescription" id="" cols="30" rows="2" value={shortDescription} onChange={(e) => setShortdescription(e.target.value)} required>

                            </textarea>
                        </div>
                        <div className="longdescription">
                            <textarea name="longdescription" id="" cols="30" rows="2" value={longDescription} onChange={(e) => setLongdescription(e.target.value)} required>

                            </textarea>
                        </div>
                        <div className="thumbnailurl">
                            <input type="text" placeholder="thumbnail" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} required />
                        </div>
                        <button className="btn">ADD BOOK</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddBook;