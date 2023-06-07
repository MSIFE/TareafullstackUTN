import style from "../style/style.css";


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
                        
                        </div>

                    </div>
                </div>


            </main>

        </>
    )
}

export default Contacto;