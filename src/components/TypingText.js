import React from 'react';
import Typical from 'react-typical';

const TypingText = () => {
  return (
    <Typical
      steps={['Designing...', 2500, 'Developing...', 2500, 'UI/UX...',2500 ,'Prototyping..', 2500]}  // Example steps, adjust them according to your needs
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default TypingText;