import React , {useContext} from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../Context/FeedbackContext'; // Importing default export

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext); // Using context hook to access feedback state from the parent component

  // Calculate the average rating
  const average = feedback.reduce((acc, item) => {
    return acc + item.rating;
  }, 0) / feedback.length;

  // Fix average to 1 decimal place
  const roundedAverage = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(roundedAverage) ? 0 : roundedAverage}</h4>
    </div>
 
  );
}


export default FeedbackStats;
