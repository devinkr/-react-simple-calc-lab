import { Component } from 'react';

class Calculator extends Component {
	state = {
		num1: 0,
		num2: 0,
		op: '+',
		result: 0,
	};

	setNum = (e, num) => {
		this.setState({ [num]: Number(e.target.value) });
	};

	setOp = (e) => {
		this.setState({ op: e.target.value });
	};

	calculateResult = () => {
		let result;
		switch (this.state.op) {
			case '+':
				result = this.state.num1 + this.state.num2;
				this.setState({ result: result });
				break;
			case '-':
				result = this.state.num1 - this.state.num2;
				this.setState({ result: result });
				break;
			case '*':
				result = this.state.num1 * this.state.num2;
				this.setState({ result: result });
				break;
			case '/':
				result = this.state.num1 / this.state.num2;
				this.setState({ result: result });
				break;

			default:
				break;
		}
	};

/* 	calculate = () => {
		// take the two values from state
		// add them together
		this.setState((prevState) => {
			let result = 0;
			if (prevState.operation === '+') {
				result = prevState.num1 + prevState.num2;
			} else if (prevState.operation === '-') {
				result = prevState.num1 - prevState.num2;
			} else if (prevState.operation === '/') {
				result = prevState.num1 / prevState.num2;
			} else if (prevState.operation == '*') {
				result = prevState.num1 * prevState.num2;
			} else {
				console.warn('something has gone wrong with the math!');
			}

			return {
				// set the result in state to be the new value
				result,
			};
		});
	}; */

	render() {
		return (
			<div className='container'>
				<h1>Math with React!</h1>

				<div className='add'>
					<input
						type='number'
						name='num1'
						placeholder='Enter your first number'
						value={this.state.num1}
						onChange={(e) => this.setNum(e, 'num1')}
					/>
					<select
						name='operation'
						id='operation'
						onChange={this.setOp}
						value={this.state.op}>
						<option value='+'>+</option>
						<option value='-'>-</option>
						<option value='*'>*</option>
						<option value='/'>/</option>
					</select>
					<input
						type='number'
						name='num2'
						placeholder='Enter your second number'
						value={this.state.num2}
						onChange={(e) => this.setNum(e, 'num2')}
					/>
					<button onClick={this.calculateResult}>=</button>
					<h3>Result: {this.state.result}</h3>
				</div>
			</div>
		);
	}
}

export default Calculator;
