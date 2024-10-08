import { createContext, useState , useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([]);
    const [EditFeedback , setEditfeed] = useState({
      item:{},
      edit:false,
    })
     useEffect(() => {
      fetchFeedback()
     } , [])

     const fetchFeedback = async () => {
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    }
    const deleteFeed = async (id) => {
        if (window.confirm('Are you sure you want to delete this')) {
          await fetch(`/feedback/${id}` , { method: 'DELETE'})
          const Updatefeedback = feedback.filter(feed => feed.id !== id);
          setFeedback(Updatefeedback);   
        }
      };
      const feedbackSubmit = async (feedSub) => {
        const response = await fetch('/feedback' , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedSub),
        });
        const newFeedback = [feedSub, ...feedback];
        setFeedback(newFeedback);
    };
    const editFeed = (Myfeed) => {
        feedback.forEach(feed => {
        if(feed.id === Myfeed.id) {
          console.log(feed);   
          setEditfeed({
            item:feed,
            edit:true,
          });
        }
      });
    }
    const updateFeedback = async (id, updatedFeedback) => {
      const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFeedback),
      })
      setFeedback(
        feedback.map((item) => 
          item.id === id ? { ...item, ...updatedFeedback } : item
        )
      );
      
      setEditfeed({
        item: {},
        edit: false,
      });
    };
    

    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeed,feedbackSubmit,editFeed,EditFeedback,updateFeedback , }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
