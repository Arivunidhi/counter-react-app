import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const {onReset, counters, onIncrement, onDelete, onDecrement} = this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				<div class="container">
					{counters.map((counter) => (
						<Counter
							onIncrement={onIncrement}
							onDelete={onDelete}
							onDecrement={onDecrement}
							key={counter.id}
							counter={counter}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Counters;
