import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
           {
                id: 1,
                rating: 10,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
              },
              {
                id: 2,
                rating: 9,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
              },
              {
                id: 3,
                rating: 8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
              },
    ]);
    const [EditFeedback , setEditfeed] = useState({
      item:{},
      edit:false,
    })
    const deleteFeed = (id) => {
        if (window.confirm('Are you sure you want to delete this')) {
          const Updatefeedback = feedback.filter(feed => feed.id !== id);
          setFeedback(Updatefeedback);   
        }
      };
      const feedbackSubmit = (feedSub) => {
        feedSub.id = uuidv4();
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
    const updateFeedback = (id, updatedFeedback) => {
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
