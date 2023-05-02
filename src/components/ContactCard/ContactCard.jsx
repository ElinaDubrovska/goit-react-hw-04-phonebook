
import { Button, Container, Name, Number } from './ContactCard.styled';



export const ContactCard = ( {

      item: { id, name, number},
      onDelete,
}) =>(
      <Container>
      <Name>
        {name}</Name>:<Number>{number}</Number>
      <Button aria-label="Delete" onClick={() => onDelete(id)}>
             Delete 
            </Button>
      </Container>)

 
