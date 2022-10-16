import React from 'react';

function Newsletter() {
    return (
        <div className='blog__sidebar-newsletter'>
            <h3>Weekly Newsletter</h3>
            <p>
                No spam. Just the latest releases and tips,
                interesting articles, and exclusive interviews
                in your inbox every week.
            </p>
            <input type="email" placeholder={'Enter your email'}/>
            <button>Subscribe</button>
        </div>
    );
}

export default Newsletter;