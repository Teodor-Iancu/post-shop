import { Container, Row, Col } from 'react-bootstrap';
import logo3 from '../assets/logo3.png';
import Imprint from './Imprint';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className='p-3 mb-3 bg-dark text-white'>
        <Row>
          <Col className='text-center py-3'>
            <p>
              {' '}
              <img src={logo3} height={30} alt='Post Shop' />
              {''} {currentYear}, Demo Abschlussprojekt "Post Briefmarken &
              Philatelie Online Shop"
            </p>
            <Imprint />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
