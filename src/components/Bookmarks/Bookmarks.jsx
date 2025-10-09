import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        <div className="md:w-1/3">

       

        <div className="bg-purple-100 text-center m-5 p-5 rounded-md">
            <h2 className="text-3xl font-bold text-purple-600">Spent time on read: {readingTime}</h2>
        </div>

        <div className=" bg-gray-300 m-3 p-3">



            <h2 className="text-3xl text-center">Bookmarks {bookmarks.length}</h2> 
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div> 

         </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;