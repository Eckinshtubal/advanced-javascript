function answer1() {
  /* Replace 'undefined' with some JSX */
  return (
    <h1>Hello World!</h1>
    );
}


function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b =
          {this.props.a + this.props.b}
        </div>
      );
    }
  }

  return (
    <BuggyComponent a={4} b={7}/>
  );
}


function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        , {someProps.three} is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
      three={'toe'}
    />
  );
}


function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);
      this.newInput = this.newInput.bind(this);
      this.state = {
        userInput: ''
      };      
    }

    newInput(e){
      this.setState({userInput: e.target.value});
    }

    render() {
      return (
        <div>
          <input onChange={this.newInput}/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}

function answer5() {
  class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    componentDidMount() {
      var counter = function() {
        if(this.state.count == 3){
          console.log(this.state.count + ' ...');
        }
        else if(this.state.count == 2){
          console.log(this.state.count + ' ..');
        }
        else{
          console.log(this.state.count + ' .');
        }
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
      }.bind(this);

      setInterval(counter, 1000);
    }

    render() {
      var dots = '...';

      return (
        <div>
          {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}

function answer6() {
  let convertMeToArrowSyntax = (a, b, c) => {
    return a * (b - c);
  }

  return convertMeToArrowSyntax(3, 7, 5);
}

function answer7() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  try {
    return myObject.addXtoY();
  } catch(e) {
    return String(e);
  }
}

function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  function Component(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }

  let newFunction = myObject.addXtoY.bind(myObject);

  return (
    <Component callback={newFunction}/>
  );
}