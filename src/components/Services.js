import React from "react";

function Services() {
  return (
    <div
      data-aos="fade-in"
      className="container d-flex row serrvices justify-content-center align-items-center mb-5"
    >
      <h1>Servicios</h1>
      <div className="d-flex m-3 flex-wrap justify-content-center align-items-center">
        <div className="service-bx">
          <p>
            <i class="fa-solid fa-mobile-screen"></i>
          </p>
          <h4>Diseño Responsivo</h4>
          <p className="service-bx-p">
            Tu sitio web se verá bien en cualquier dispositivo incluyendo
            escritorios de computadora, tablets y dispositivos móviles.
          </p>
        </div>
        <div className="service-bx">
          <p>
            <i class="fa-solid fa-pen-ruler"></i>
          </p>
          <h4>Diseño Creativo</h4>
          <p className="service-bx-p">
            Un sitio web completo y atractivo ayuda a mantener la presencia de
            tu marca ya que es tu imágen digital.
          </p>
        </div>
        <div className="service-bx">
          <p>
            <i class="fa-solid fa-code"></i>
          </p>
          <h4>Desarrollo </h4>
          <p className="service-bx-p">
            El desarrollo web es muy importante para las marcas, yo te puedo
            ayudar a crear un sitio web que ames.
          </p>
        </div>
        <div className="service-bx">
          <p>
            <i class="fa-solid fa-thumbs-up"></i>
          </p>
          <h4>Redes Sociales</h4>
          <p className="service-bx-p">
            Hay muchas redes sociales en las que puedes promover tu presencia y tu sitio web.
          </p>
        </div>
        <div className="service-bx">
          <p>
          <i class="fa-solid fa-paintbrush"></i>
          </p>
          <h4>Diseño Gráfico</h4>
          <p className="service-bx-p">
            Tal vez lo que necesitas es una nueva imágen o publicidad de calidad, un mejor diseño significa una mejor marca.
          </p>
        </div>
        <div className="service-bx">
          <p>
          <i class="fa-solid fa-gauge-high"></i>
          </p>
          <h4>Optimización</h4>
          <p className="service-bx-p" >
            Para que un sitio web sea de calidad tiene que ser rápido, esto ayuda a retener clientes en tu sitio. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
