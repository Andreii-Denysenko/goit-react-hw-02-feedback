import PropTypes from 'prop-types';
import {List, Item} from './Statistics.styled'
import { GrLike } from "react-icons/gr";
import { MdMoodBad } from "react-icons/md";
import { BsEmojiNeutral } from "react-icons/bs";

export  function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  }) {
    return (
      <div>
        <h2>Statistics</h2>
        <List>
          <Item><GrLike/> Good: {good}</Item>
          <Item><BsEmojiNeutral/> Neutral: {neutral}</Item>
          <Item><MdMoodBad/> Bad: {bad}</Item>
        </List>
        <List>
          <Item>Total feedbacks: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
      </div>
    );
  }


  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
