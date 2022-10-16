import React from 'react';
import Image from "next/image";

function Update() {
    return (
        <div className='blog__sidebar-update'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3>We've released v2.6!</h3>
            <p>
                Check out the new dashboard view. Pages,
                links, and export now load much faster
            </p>
            <div className="image-wrapper">
                <Image
                    className='image'
                    src='https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                    alt="Image"
                    layout={"fill"}
                    objectFit={'cover'}
                />
            </div>
            <button>Learn more</button>
        </div>
    );
}

export default Update;