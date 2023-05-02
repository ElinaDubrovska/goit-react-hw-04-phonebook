
import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactCard item={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func
};