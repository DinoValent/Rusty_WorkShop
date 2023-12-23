
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import { Carousel } from "react-bootstrap";
export const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gato_capucha.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Descripción del primer slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/gato_capucha.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Descripción del segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Agrega más elementos de Carousel según tus necesidades */}
    </Carousel>
  );
};
