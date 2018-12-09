import React from 'react';
import TypingAnimation from 'react-typing-animation';

const Typing = (props) => {
  const {words} = props;
  let content = [];

  words.forEach(function (word, index) {
    if(index === 0) {
      content.push(<TypingAnimation.Delay ms={500} key={index}/>);
    }
    content.push(word);
    content.push(<TypingAnimation.Delay ms={3000} key={index+1}/>);
    content.push(<TypingAnimation.Backspace count={word.length} key={index+1}/>);
  })

  return (
    <div id="typing" className="mt-4">
      <TypingAnimation speed={30} loop={true}>
        {content}
      </TypingAnimation>
    </div>
  );
};

export default Typing;