import React, {Component} from 'react';

class CounterSecond extends Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no Tags !</p>;
		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				{this.state.tags.length !== 0 && 'Please find the below elements'}
				{this.renderTags()}
			</div>
		);
	}
}

export default CounterSecond;
