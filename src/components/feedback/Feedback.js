import PropTypes from 'prop-types';
import {List, Button} from './Feedback.styled'

export function FeedbackOptions ({ options, onLeaveFeedback, }) {
return (
    <List>
      {options.map(option => {
    return (
  <li key={option}>
  <Button type="button" onClick={() => onLeaveFeedback(option)}>
   {option}
  </Button>
   </li>);
      })}
    </List>
        )
};
    
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}   
    
