import React from 'react'
import home from "../JSON/home.json"

function Home() {
    return (
    <div class="row p-5 text-left bg-light">
        <div class="col-md-12">
        <h4 class="mb-3">{ home && home[0].sub[0].heading }</h4>
        </div>

        <div class="col-md-12">
        <h1 class="mb-3">{ home && home[0].sub[0].subheading }</h1>
        </div>

        <div class="col-md-12">
        <p class="mb-3">{ home && home[0].sub[0].p }</p>
        </div>

        <div class="col-md-12">
        <a class="btn btn-primary" href="" role="button">{ home && home[0].sub[0].button }</a>
        </div>

    </div>
    );
}

export default Home;