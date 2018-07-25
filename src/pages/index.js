import React from "react"
import { Link } from "gatsby"

export default () => 
    (
        <div style={{ color: `tomato` }}>
            <h1>Hello Limo!</h1>
            <p>What a world!!</p>
            <img src="https://source.unsplash.com/random/400x200" alt="/" />
            <br/>
            <div>
                <Link to='/page-two/'>Link to page</Link>
            </div>
            <div>
                <Link to='/counter/'>Counter</Link>
            </div>
        </div>
    )