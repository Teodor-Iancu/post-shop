import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Imprint = () => {
  return (
    <Card className='p-3 mb-3 bg-dark text-white'>
      <Card.Body>
        <Card.Text>
          <Badge bg='warning' text='black'>
            Disclaimer
          </Badge>{' '}
          Diese Webseite ist nur eine fiktive Anwendung, die ausschließlich zur
          Proof-of-Concept und Lernzwecken dient und wird im Kürze gelöscht.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Imprint;
