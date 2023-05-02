import { Component } from 'react';
import { Button, Container, Name, Number } from './ContactCard.styled';

// import PropTypes from 'prop-types';

export class ContactCard extends Component {

  render() {
 
    const {
      item: { id, name, number},
      onDelete,
    } = this.props;

    return (
      <Container>
      <Name>
        {name}</Name>:<Number>{number}</Number>
      <Button aria-label="Delete" onClick={() => onDelete(id)}>
             Delete 
            </Button>
      </Container>
    );
  }
}
