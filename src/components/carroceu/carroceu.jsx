import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imageList from '../react-img/teste';

export default function Exibicao() {
  return (
    <div id="caixaprincipal">
      <Carousel>
        {imageList.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              key={index}
              src={src}
              alt={`imagem-${index}`}
              style={{
                cursor: 'pointer',
                width: '100%',
                height: '450px',
                objectFit: 'cover',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
