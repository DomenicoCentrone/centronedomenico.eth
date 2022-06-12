import React from 'react'
import work from "../JSON/work.json"

function Work() {
    return (
    <div class="row p-5 text-left bg-light">
        <div class="col-md-12">
        <h1 class="mb-3">{ work && work[0].sub[0].subheading }</h1>
        </div>

        <div class="col-md-12">
        <p class="mb-3">{ work && work[0].sub[0].p }</p>
        </div>

    </div>
    );
}

export default Work;