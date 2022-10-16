import React from 'react';
import Newsletter from "./Newsletter";
import Update from "./Update";

function SingleBlogSidebar() {
    return (
        <div className='blog__sidebar'>
            <Newsletter/>
            <Update/>
        </div>
    );
}

export default SingleBlogSidebar;