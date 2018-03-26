const formatTime = (time) => {
	if(time < 10){
		return '0' + time;
	}
	return time;
};

function TimeDisplay(props){
	let centiseconds = formatTime(
		Math.floor(props.millisecond % 1000 / 10)
	);

	let seconds = formatTime(
		Math.floor(props.millisecond % 60000 / 1000)
	);

	let minutes = formatTime(
		Math.floor(props.millisecond / 60000)
	);

	if(props.millisecond === 0){
		return (<div>Times Up!</div>);
	}
	else{
		return (<div>
			{/*00:00:00*/}
			{/*props.millisecond*/}
			{minutes}:{seconds}:{centiseconds}
			</div>);
	}
}

class Watch extends React.Component{
	constructor(props){
		super(props);

    	this.startCountUp = this.startCountUp.bind(this);
    	this.startCountDown = this.startCountDown.bind(this);
    	this.timeChange = this.timeChange.bind(this);

    	this.interval

		this.state = {
			currentMilliseconds: props.currentMilliseconds
		};
	}

  	// Clear current interval, then set new interval counting up
	startCountUp(){
    	clearInterval(this.interval);

    	this.interval = setInterval(
			function() {
				let newTime = this.state.currentMilliseconds;
				newTime += 10;
				this.setState(
					{currentMilliseconds: newTime
				});
			}.bind(this),
			10
		);
  	}

  	// Clear current interval, then set new interval counting down
  	startCountDown(){
    	clearInterval(this.interval);

    	this.interval = setInterval(
			function() {
				let newTime = this.state.currentMilliseconds;
				newTime -= 10;

				if(newTime > 0){
					this.setState(
						{currentMilliseconds: newTime
					});
				}
				else{
					this.setState(
						{currentMilliseconds: 0
					});
				}
			}.bind(this),
			10
		);
  	}

  	// Sets the current milliseconds to the value in the text box
  	// On invalid input, set the current milliseconds to 0
  	timeChange(e){
  		if(e.target.value > 0){
  			this.setState({currentMilliseconds: (e.target.value)*1000});
  		}
  		else{
  			this.setState({currentMilliseconds: 0});
  		}
  	}

	render(){
		return(
			<div>
				<TimeDisplay millisecond={this.state.currentMilliseconds}/>

				<form>
					<label>Count</label>
					<br/>
					<input type='radio' name='count' value='up' onClick={this.startCountUp}/> Up
					<br/>
					<input type='radio' name='count' value='down' onClick={this.startCountDown}/> Down
					<br/>
					<label>Set Time (Seconds) </label>
					<input type='text' onChange={this.timeChange}/>
				</form>
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<h1>Assignment #2</h1>
		<Watch currentMilliseconds={3000}/>
	</div>,
	document.getElementById('root')
);