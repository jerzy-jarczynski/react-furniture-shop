import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const touchStartX = useRef(null);

  const handleTouchStart = event => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = event => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 0 && leftAction) {
      rightAction();
    } else if (deltaX < 0 && rightAction) {
      leftAction();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }} // Enable vertical scrolling
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
