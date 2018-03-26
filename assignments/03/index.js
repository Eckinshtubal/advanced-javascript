const Question = (props) => {
  return (
    <div>
      <div>
        <span>
          Q{props.number}.
        </span>
        <span>
          {props.question}
        </span>
      </div>
      <br/>
      <div>
        {eval(`answer${props.number}()`)}
      </div>
    </div>
  );
};

const questions = [
  `
  Write a line of JSX that renders 'Hello world!'
  `,
  `
  This class component has has a bug in it,
  fix it so it renders the sum of its props (4 and 7)
  `,
  `
  Change this functional component so it accepts a third prop ("toe") and renders it to the screen
  `,
  `
  Add a method to this class component so that it saves any input the user types to the state key 'userInput'. You *must* use the onchange event (no jQuery or accessing the DOM directly!)
  `,
  `
  Change this component so it uses the following conditional logic. If the value of count is divisble by 3, render three dots (...) otherwise if the value of count is divisble by 2 render two dots (..) otherwise render a single dot (.)
  `,
  `
  Change this function to use ES5 arrow function syntax
  `,
  `
  The function 'addXtoY' is supposed to return '11', but it is currently throwing an error. It tries to reference the properties 'x' and 'y', but they aren't currently available in its scope. Use the function .bind() to make 'myObject' the scope for 'addXtoY'.
  `,
  `
  The function 'addXtoY' is supposed to return '11', but it is returning NaN. addXtoY is loosing reference to its scope (myObject). Use .bind() to attach myObject to addXtoY so 'Component' will return 11.
  `
];

const renderedQuestions = questions.map(
  (question, index) =>
  <div key={index}>
    <Question
      number={index + 1}
      question={question}/>
    <br/>
    <br/>
  </div>
);

ReactDOM.render(
  <div>
    <p>
      Assignment #3
    </p>
    <br/>
    {renderedQuestions}
    <p>
      Once you have completed all the questions, commit your code to your git repository and push it up to github to submit assignment #3.
    </p>
    <p>
      Git Commands Reference
    </p>
    <p>
      <strong>
      git add ./
      <br/>
      git commit -m "Assignment #3"
      <br/>
      git push personal master
      </strong>
    </p>
  </div>,
  document.getElementById('root')
);