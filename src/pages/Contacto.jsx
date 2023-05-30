const Contacto = (props) => {
    return (
        <>
            <main class="holder">

                <div class="container">
                    <div class="row mt-5 mb-5 justify-content-center">
                        <div class="col-sm8 pt-5 pb-5">
                            <h1 class="text-center">CONTACTO</h1>
                            <h2 class="mt-5">Datos</h2>
                            <ul>
                                <li><strong>Razón social </strong> TransporteX.sa</li>
                                <li><strong>Celular </strong> 549 11 222 555 79</li>
                                <li><strong>Email </strong> tranporte@gmail.com</li>
                                <li><strong>Direccion </strong> Av. Santa fe 2445</li>
                            </ul>

                            <h2 class="mt-5">Formulario</h2>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </form>
                            <h2 class="mt-5">Ubicación</h2>
                           {/*  <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3851032270586!2d-58.40420232344392!3d-34.594422257008915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca90c1b39e6f%3A0xcd36f95425fe1387!2sAv.%20Sta.%20Fe%202445%2C%20C1123AAG%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2suy!4v1683645181415!5m2!1ses-419!2suy"
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>

                    </div>
                </div>


            </main>

        </>
    )
}

export default Contacto;