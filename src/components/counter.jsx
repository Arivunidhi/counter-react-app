import React, {Component} from 'react';

class Counter extends Component {
	render() {
		return (
			<div classname="row">
				{this.props.children}

				{/* <span style={this.styles} >{this.state.count}</span> */}
				{/* <span className="badge badge-warning m-2">{this.formatCount()}</span> */}

				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>

				<button
					onClick={() => {
						this.props.onIncrement(this.props.counter);
					}}
					className="col-sm-1 btn btn-secondary btn-sm m-2">
					+
				</button>

				<button
					onClick={() => {
						this.props.onDecrement(this.props.counter);
					}}
					className="col-sm-1 btn btn-secondary btn-sm m-2"
					disabled={this.getDisabledButton()}>
					-
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="col-sm-1 btn btn-danger btn-sm m-2">
					x
				</button>
			</div>
		);
	}

	getDisabledButton() {
		return this.props.counter.value === 0;
	}

	getBadgeClasses() {
		let classes = 'col-sm-1 p-1 badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const co = this.props.counter.value;
		return co === 0 ? 'Zero' : co;
	}
}

export default Counter;
