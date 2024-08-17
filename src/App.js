import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/about'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AboutIcon from './components/AboutIcon';
import {FeedbackProvider} from './Context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
     <Router>
           <Header />
           <div className='container'>
           <Routes>
             <Route exact path='/' element = {
               <>
                 <FeedbackForm />
                 <FeedbackStats/>
                 <FeedbackList/> 
               </>
             } />
             <Route path='/about' element={<About/>}></Route>
             </Routes>
           </div>
           <AboutIcon/>
         </Router>
         </FeedbackProvider>
       );
}

export default App;
