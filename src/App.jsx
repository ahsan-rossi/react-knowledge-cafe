

import { useState } from 'react';
import Header from './components/Header/Header';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  const[bookmarks, setBookmarks] = useState([]);
  const[readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // const updatedCart = cart.filter(element => element.id != bottle.id);

    const updatedBookmarks = bookmarks.filter(element => element.id !== id);
    setBookmarks(updatedBookmarks);

  } 
  
  return (
    <>

     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
             handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
     </div>
     
       
    </>
  )
}

export default App
