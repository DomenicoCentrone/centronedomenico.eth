import React from 'react'
import hed from "../JSON/header.json"
import fot from "../JSON/footer.json"


function Header() {
  return (
    // <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid mx-5">
    
        {/* <!-- Navbar brand --> */}
        <a class="navbar-brand" href="#">Brand</a>
  
    
        {/* <!-- Collapsible wrapper --> */}
        <div class="">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
            {/* <!-- Link --> */}
              {
                hed.map( hed => {
                  return(
                    <li class="nav-item ">
                    <a class="nav-link" href={hed.link}>{hed.title}</a>
                  </li>
                  )
                })
              }
    
          </ul>
          </div>
          <div>
          {/* <!-- Icons --> */}
          <ul class="navbar-nav d-flex flex-row me-1">
            { fot && fot[0].icons.map( fot => {
              return(
                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link" href="#"><i class={fot.icon}></i></a>
                </li>
              )
            })
          }
          </ul>
    
        </div>
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    // <!-- Navbar -->

  )
}

export default Header