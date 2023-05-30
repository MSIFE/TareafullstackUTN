import img01 from '../style/Img/img01.jpg';
import img02 from '../style/Img/img02.jpg';
import img03 from '../style/Img/img03.jpg';
import img04 from '../style/Img/img04.jpg';
import img05 from '../style/Img/img05.jpg';
import img06 from '../style/Img/img06.jpg';
import img07 from '../style/Img/img07.jpg';

const Gallery =(props) =>{
    return(
        <>
        <main className="holder">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={img01} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Terrestre</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img02} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Terrestre</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img03} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Terrestre</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img04} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Maritimo</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img05} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Maritimo</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img06} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Ferroviario</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={img07} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Ferroviario</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
       
        </>
    )
}

export default Gallery;