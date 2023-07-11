import React,{useState,useEffect} from 'react'
import '../App'
import {API_URL} from '../API'
import axios from 'axios'

const BookList = () => {

    const[books, setBooks]= useState([]);


    useEffect(()=>{
        axios.get(API_URL).then(res=>{
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='book-list'>
        {books.map((book)=>(
            <div key={book.id} className='book'>
                <div>
                    <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt="#" />
                </div>
                <div>
                    <button>Add to favorites</button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default BookList