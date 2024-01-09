import React from "react";
import ReactDOM from "react-dom";
import { Carousel, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Imobiliaria = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Imobiliária</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Início</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Imóveis</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section class="carousel-container">
        <Carousel
          interval={2000}
          controls={true}
          indicators={true}
          wrap={true}
        >
          <Carousel.Item>
            <img
              src="img/imovel1.jpg"
              alt="Imóvel 1"
              class="d-block w-100"
            />
            <Carousel.Caption>
              <h5>Imóvel 1</h5>
              <p>Casa de 3 quartos com quintal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="img/imovel2.jpg"
              alt="Imóvel 2"
              class="d-block w-100"
            />
            <Carousel.Caption>
              <h5>Imóvel 2</h5>
              <p>Apartamento de 2 quartos com varanda</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="img/imovel3.jpg"
              alt="Imóvel 3"
              class="d-block w-100"
            />
            <Carousel.Caption>
              <h5>Imóvel 3</h5>
              <p>Terreno de 1000m²</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
      function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
      </section>

      <section class="links">
        <Button
          variant="primary"
          href="/imoveis"
          size="lg"
          block
        >
          Ver imóveis
        </Button>
        <Button
          variant="primary"
          href="/contato"
          size="lg"
          block
        >
          Contato
        </Button>
      </section>
    </div>
  );
};

ReactDOM.render(<Imobiliaria />, document.getElementById("root"));
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
  </body>
  