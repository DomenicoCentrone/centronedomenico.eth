import React from 'react'
import about from "../JSON/about.json"

function About() {
    return (
    <div class="row p-5 text-left bg-light">
        <div class="col-md-12">
        <h1 class="mb-3">{ about && about[0].sub[0].subheading }</h1>
        </div>

        <div class="col-md-12">
        <p class="mb-3">{ about && about[0].sub[0].p }</p>
        </div>

        <div class="col-md-12">
        <a class="btn btn-primary" href="" role="button">{ about && about[0].sub[0].button }</a>
        </div>

    </div>
    );
}

export default About;