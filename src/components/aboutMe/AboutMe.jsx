import React from "react";
import Container from "react-bootstrap/Container";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../aboutMe/AboutMe.css";
const AboutMe = () => {
  return (
    <Container>
      {/* <div className="card g-0 ">
        <div className="card-row">
          <div className="col-md-6 m-2 text-start ">
            <h3>Sobre mí</h3>
            <p>
            Soy estudiante de la carrera de Ingeniería en Sistemas de Información. Este proyecto lo estoy desarrollando para la materia Comunicaciones, con el profesor Agustín Carrasco.<br />{" "}
            </p>
          </div>
          <div className="col-md-5 align-column">
            <h3> Contacto</h3>
            <p>
               <i className="fa-regular fa-envelope"></i>{" "}
               melisaalbornoz@gmail.com <br />
               <i className="fa-solid fa-phone"></i> +54938147856 <br />
              <i className="fa-solid fa-location-dot"></i> Argentina, Tucumán,
              San Miguel de Tucumán. <br />
            </p>
          </div>
        </div>
      </div> */}
      <div className="card" id="aboutme">
        <div className="card-row-aboutme">
          <div className="card-content">
            <h3>Sobre mí</h3>
            <p>
              Estudiante de la carrera de <span className="fw-bold">Ingeniería en Sistemas de
              Información </span>. Este proyecto lo desarrolle para la materia
              <span className="fw-bold"> Comunicaciones</span>, con el profesor <span className="fw-bold">Agustín Carrasco</span>.
              <br />{" "}
            </p>
          </div>
          <div className="card-align ">
            <h3> Contacto</h3>
            <p>
            <i className="fa-solid fa-user"></i> Silvia Melisa Albornoz <br />
              <i className="fa-regular fa-envelope"></i>{" "}
              melisaalbornoz@gmail.com <br />
              <i className="fa-solid fa-phone"></i> +54938147856 <br />
              <i className="fa-solid fa-location-dot"></i> Argentina, Tucumán,
              San Miguel de Tucumán. <br />
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
