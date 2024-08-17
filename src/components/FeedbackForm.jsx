import Card from './shared/Card'
import Button from './shared/Button'
import { useState }  from 'react'
import RatingSelect from './RatingSelect';
import { useContext , useEffect } from 'react'
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10)
  const [Disabled, setDisabled] = useState(true);
  const [Message, setMessage] = useState('');

  const {feedbackSubmit , EditFeedback , updateFeedback} = useContext(FeedbackContext)

  const InputText = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim().length < 10){
      setDisabled(true);
      setMessage("Your feedback must be at least 10 characters");
    } else {
      setDisabled(false);
      setMessage('');
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const NewFeedback = {
      text,
      rating,
    }
    if (EditFeedback.edit === true) {
      updateFeedback(EditFeedback.item.id, NewFeedback)
    }
    else {
       feedbackSubmit(NewFeedback)
    }
   setText('')
   setRating(10)
   setDisabled(true)
    }
    useEffect(() => {
      if(EditFeedback.edit === true) {
        setText(EditFeedback.item.text)
        setRating(EditFeedback.item.rating)
        setDisabled(false)
      }
    } , [EditFeedback])
  return (
    <Card>
      <form onSubmit={HandleSubmit}>
      <h2>How would you rate your service with us?</h2>
       <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input onChange={InputText} type="text" placeholder='Enter Your Rating' value={text} />
          <Button type='submit' isDisabled={Disabled}>Send</Button>
        </div>
      </form>
      <div>
        {Message && <p className="message">{Message}</p>}
      </div>
    </Card>
  );
}

export default FeedbackForm;
