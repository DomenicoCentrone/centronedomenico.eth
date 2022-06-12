import React from 'react'
import fot from "../JSON/footer.json"


function Footer() {
  return (

    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          { fot && fot[0].icons.map( fot => {
              return(

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">

                <i class={fot.icon}></i></a>

              )
            })
          }
        </section>
      </div>

      <div class="text-center p-3">
        © 2022 Powered by <a class="text-white">Centrone Domenico</a>
      </div>
    </footer>

  );
}

export default Footer