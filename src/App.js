import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
	state = {
		counters: [
			{id: 0, value: 4},
			{id: 1, value: 3},
			{id: 2, value: 2},
			{id: 3, value: 1},
		],
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({counters});
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value--;
		this.setState({counters});
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState(counters);
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
						onDecrement={this.handleDecrement}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
