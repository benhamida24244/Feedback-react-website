import { FaTimes , FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackItems({ item}) {
  const {deleteFeed} = useContext(FeedbackContext)
  const {editFeed} = useContext(FeedbackContext)
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeed(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeed(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItems;
