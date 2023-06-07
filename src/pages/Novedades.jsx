import style from "../style/style.css";

const Novedades =(props) =>{
    return(
        <>
         <main class="holder">
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active box-c">
                <img src="/img/servicios/aereo.jpg" class="d-block w-100 img-c" alt="..."/>
                <div class="carousel-caption top-0 mt-4">
                  <p class="mt-5 fs-3 text-uppercase">First slide label</p>
                  <h1 class="display-1 fw-bolder text-capitalize">Aereo</h1>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Acceso</button>
                </div>
              </div>
              <div class="carousel-item box-c">
                <img src="/img/servicios/maritimo.jpg" class="d-block w-100 img-c" alt="..."/>
                <div class="carousel-caption top-0 mt-4 ">
                  <p class="mt-5 fs-3 text-uppercase">First slide label</p>
                  <h1 class="display-1 fw-bolder text-capitalize">Maritimo</h1>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Acceso</button>
                </div>
              </div>
              <div class="carousel-item box-c">
                <img src="/img/servicios/terrestre.jpg" class="d-block w-100 img-c" alt="..."/>
                <div class="carousel-caption top-0 mt-4 ">
                  <p class="mt-5 fs-3 text-uppercase">First slide label</p>
                  <h1 class="display-1 fw-bolder text-capitalize">Terrestre</h1>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Acceso</button>
                </div>
              </div>
              <div class="carousel-item box-c">
                <img src="/img/servicios/ferroviario.jpg" class="d-block w-100 img-c" alt="..."/>
                <div class="carousel-caption top-0 mt-4 ">
                  <p class="mt-5 fs-3 text-uppercase">First slide label</p>
                  <h1 class="display-1 fw-bolder text-capitalize">Ferroviario</h1>
                  <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Acceso</button>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            </div>
    </main>
       
        </>
    )
}

export default Novedades;