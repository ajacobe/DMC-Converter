import React, { Component } from "react";

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = { decimal: 0, degrees: 0, minutes: 0, seconds: 0 };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.getDecimal = this.getDecimal.bind(this);
		this.getDegrees = this.getDegrees.bind(this);
		this.getMin = this.getMin.bind(this);
		this.getSeconds = this.getSeconds.bind(this);
	}

	handleInputChange(e) {
		e.preventDefault();
		const dd = this.getDecimal(e.target.name, e.target.value);
		this.setState({ decimal: dd });
	}

	getMin(val) {
		let min = 60;
		return parseInt(val) / min;
	}

	getSeconds(val) {
		let seconds = 3600;
		return parseInt(val) / seconds;
	}

	getDegrees(val) {
		let degrees = 0;
		return parseInt(val);
	}

	getDecimal(elem, value) {
		let dd = 0.0;
		let min = 60,
			seconds = 3600,
			degrees = 0;

		if (elem == "degrees") {
			this.setState({ degrees: value });
			dd = this.getDegrees(value) + this.getMin(this.state.minutes) + this.getSeconds(this.state.seconds);
		} else if (elem == "minutes") {
			this.setState({ minutes: value });

			dd = this.getDegrees(this.state.degrees) + this.getMin(value) + this.getSeconds(this.state.seconds);
		} else {
			this.setState({ seconds: value });
			dd = this.getDegrees(this.state.degrees) + this.getMin(this.state.minutes) + this.getSeconds(value);
		}

		return dd;
	}

	render() {
		return (
			<div>
				<label>Degrees</label>
				<input type="text" onChange={this.handleInputChange} name="degrees" />
				<br />
				<label>Minutes</label>
				<input type="text" onChange={this.handleInputChange} name="minutes" />
				<br />
				<label>Seconds</label>
				<input type="text" onChange={this.handleInputChange} name="seconds" />
				<br />
				<label>
					Decimal Degrees:
					<strong> {this.state.decimal}</strong>
				</label>
			</div>
		);
	}
}

export default Converter;
