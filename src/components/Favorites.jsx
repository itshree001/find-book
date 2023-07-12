import React from 'react'
import '../App'
import { useAppContext } from './context/appContext'


const Favorites = () => {

    
    const{favorites, addToFavorites, removeFromFavorites} = useAppContext(); 
    console.log('favorites are',favorites)
    const favoritesChecker= (id) =>{
        const boolean = favorites.some((book) => book.id==id)
        return boolean
    }

  return (
    <div className='favorites'>
      {favorites.length > 0 ? favorites.map((book)=>(
            <div key={book.id} className='book'>
                <div>
                    <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt="#" />
                </div>
                <div>
                    {favoritesChecker(book.id)? 
                    (<button onClick={()=>removeFromFavorites(book.id)}>Remove From favorites</button>):
                    (<button onClick={()=>addToFavorites(book)}>Add to favorites</button>)

                    }
                     
                </div>
            </div>
            
        )): <h1> You do not have any Favorites  </h1>} 

    </div>
  )
}

export default Favorites