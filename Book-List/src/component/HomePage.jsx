import { useState,useEffect } from 'react';
import { Link, useNavigate, Route,Routes } from 'react-router-dom';



const HomePage = ({token}) => {

const [allBooks, setAllBooks] = useState([]);
const [searchTerm, setAllSearchTerm] = useState("");

useEffect(() => {
  const getAllBooks = async() => {
    const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    const retrieveAllBooks = await response.json();
    setAllBooks(retrieveAllBooks.books);

  }

  getAllBooks();
})

const filteredBooks = allBooks.filter((book) => book.title.includes(searchTerm))

  return(
    <>
    
      <input placeholder='search by name' type="text" value={searchTerm}
        onChange={(event)=>{setAllSearchTerm(event.target.value)}}/>

      <h2>Here is the Book List</h2>

      
        {
          filteredBooks.map((eachBook,idx) => {
            return (

              <div key={idx} id={eachBook.id} >

                <Link key={eachBook.id} to={`/BookDetails/${eachBook.id}`}>
                  <img src={eachBook.coverimage} width="350" height="500" />
                  <p>{eachBook.title}</p>
                </Link>

              </div>
              
            )
          })
        }


    </>
  )
}


export default HomePage