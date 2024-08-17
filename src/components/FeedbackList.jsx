import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import FeedbackItems from './FeedbackItems';
import FeedbackContext from '../Context/FeedbackContext'; // Importing default export

function FeedbackList({ handleDelete }) {
    const { feedback } = useContext(FeedbackContext);

    if (feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItems key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    );
}

export default FeedbackList;
