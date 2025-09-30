import { useState } from 'react';
import { useEffect } from 'react';

const Blogs = () => {

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
        </div>
    );
};

export default Blogs;