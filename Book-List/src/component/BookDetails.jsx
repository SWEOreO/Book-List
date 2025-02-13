import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";

const BookDetails = ({token}) => {

  const [singleBook, setSingleBook] = useState([]);
  const [checkoutBook, setCheckoutBook] = useState({});
  const [returnTheBook, setReturnTheBook] = useState({});
  const { id } = useParams(); // dynamic value in the fetched url

  useEffect(() => {
    const getBookDetail = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const res = await response.json();
      setSingleBook(res.book);

    }

    getBookDetail();
  })

  const checkout = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
      method:`PATCH`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        available: false
      })
    });

    const res = await response.json()
    setCheckoutBook(res.book)
    console.log(res.book);
  }

  const returnBook = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
      method:`PATCH`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        available: true
      })
    });

    const res = await response.json()
    console.log(res.book);
    setReturnTheBook(res.book)
  }


  return(
    <>
      <h2>More info about your Book:</h2>

      {
        singleBook.id ?
        <>
          <img src={singleBook.coverimage} width="350" height="500" />
          <h3>Book Name: {singleBook.title}</h3>
          <h4>Author: {singleBook.author}</h4>
          <h4>status: {singleBook.available===true? 'Available Now':'Not Available'}</h4>
          <p>{singleBook.description}</p>
          {token && singleBook.available &&
            <button onClick={checkout}>CheckOut</button>
          }

          {token && !singleBook.available &&
            <button onClick={returnBook}>Return</button>
          }
        
        </>
        : null
      }

      <div>
      <Link to='/'>Back to Book List</Link>
      </div>

    </>
  )
}


export default BookDetails