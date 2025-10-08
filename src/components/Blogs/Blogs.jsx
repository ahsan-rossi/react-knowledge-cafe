import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark}) => {

    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <div className="md:w-2/3">
           <h1 className='text-4xl' >Blogs</h1> 
           {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
            ></Blog>)
           }
        </div>
    );
};

export default Blogs;