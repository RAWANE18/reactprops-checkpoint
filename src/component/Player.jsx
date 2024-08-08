
import { Card, CardGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Player({  name, team, nationality, jerseyNumber, age, imageUrl }) {
  console.log(imageUrl);
  
  return (
    <div >
      <Container className="my-5">
      {/*card that contains all components created using react-bootstrap  */}
    <CardGroup className='container'>
       <Card className='card'  >
            <Card.Img variant="top" src={imageUrl} style={{width:"300px" , height:"200px"}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        </Container>
    </div>
  )
  
}
{/* default Props  */}
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop16x9.1023w.png"
};
