const Home =(props) =>{
    return(
        <>
        <main class="holder">
        <div>
           {/*  <img src="/img/home/img01.jpg" alt="avion"> */}
        </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione ipsum est provident, maxime
                    necessitatibus cupiditate impedit fuga asperiores illum aliquam doloremque cum tempora dolores nobis
                    praesentium sed, perspiciatis repellendus.</p>
            </section>
            <section class="testimonios">
                <h2>testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Excelente</span>
                    <span class="autor">Pepito - Pepas.com</span>
                </div>
            </section>
        </div>
    </main>
      
        </>
    )
}

export default Home;