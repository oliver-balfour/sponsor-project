import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='row'>

        <div className="container talent-item">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/talento/01.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text talent-description">
                <h2>Mel Krywoj</h2>
                <h3>Apasionada por lo que hace, en su libertad elige este deporte una y otra vez.</h3>
                <p>Hoy es una promesa del tenis Argentino y sueña con pisar las "grandes ligas" a nivel internacional 
                  postulándose en el top 50 del mundo.</p>
                <p>Correr, aguantar y jugar con variantes son sus fuertes. Su vida está dedicada al tenis, lo sufre, lo transpira, 
                  lo piensa, lo ama y lo vuelve a elegir cada vez que golpea una pelota.</p>
                <a className="btn btn-custom" href="https://mpago.la/19nApZs" role="button">Comprar TalenToken</a>
              </div>
            </div>
          </div>
        </div>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Meta</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Acuerdo</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Redes</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Hoy es una promesa del tenis Argentino y sueña con pisar las "grandes ligas" a nivel internacional 
                  postulándose en el top 50 del mundo.</div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Correr, aguantar y jugar con variantes son sus fuertes. Su vida está dedicada al tenis, lo sufre, lo transpira, 
                  lo piensa, lo ama y lo vuelve a elegir cada vez que golpea una pelota.</div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>

        

        </div>
      </div>
    </div>
  )
}
