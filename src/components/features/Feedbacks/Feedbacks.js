import React, { useState, useMemo } from 'react';
import { getAll } from '../../../redux/feedbacksRedux.js';
import { useSelector } from 'react-redux';
import styles from './Feedbacks.module.scss';
import Feedback from '../../common/Feedback/Feedback.js';
import Swipeable from '../../common/Swipeable/Swipeable.js';

const Feedbacks = () => {
  const feedbacks = useSelector(getAll);
  const [activeFeedback, setActiveFeedback] = useState(0);
  const handleFeedbackChange = newFeedback => setActiveFeedback(newFeedback);

  // Swipeable action
  const rightAction = () => {
    if (activeFeedback > 0) {
      let feedback = activeFeedback - 1;
      handleFeedbackChange(feedback);
    }
  };
  const leftAction = () => {
    let feedback = activeFeedback + 1;
    if (feedback < feedbacks.length) {
      handleFeedbackChange(feedback);
    }
  };

  const dots = useMemo(() => {
    const dots = [];
    for (let i = 0; i < feedbacks.length; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => handleFeedbackChange(i)}
            className={i === activeFeedback ? styles.active : undefined}
          >
            feedback {i}
          </a>
        </li>
      );
    }

    return dots;
  }, [feedbacks.length, activeFeedback]);

  return (
    <Swipeable leftAction={leftAction} rightAction={rightAction}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {<Feedback {...feedbacks[activeFeedback]} />}
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default Feedbacks;
