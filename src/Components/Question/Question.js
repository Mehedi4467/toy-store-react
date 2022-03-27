import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-area'>
            <h1>Question And Answer</h1>
            <div>
                <h4>How to react work?</h4>
                <p><b>Answer :</b> React is a javaScript library.React A same to same creates another DOM similar to this browser DOM called virtual dom.Now this DOM looks exactly like the real DOM, but this virtual DOM is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM. Now comparing the new one with the previous one, seeing the reaction, exactly which specific element has been changed. According to him, React does not re-render or re-paint the whole dome but only changes what has been changed. It is easy to work quickly and the browser does not have to do any extra, unnecessary work.</p>
                <h4>How useState work?</h4>
                <p><b>Answer : </b> useState is a react hook.React.useState () is a function that assumes an initial value. We can give this value as we need.React.useState returns one pair value and this pair value returns to an array type which has 2 elements inside.We get our initial value in the first index and we get a function in the second index and it is through this function that we update our state data.When we call the function we actually tell React that our state has been updated, React then renders the whole counter again, and when it re-renders our whole component function is re-run again. And with this re-run we get our updated state value. </p>
            </div>
        </div>
    );
};

export default Question;