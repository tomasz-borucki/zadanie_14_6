var Counter = React.createClass({
	getInitialState: function() {
		return {
			counterEven: 0,
			counterOdd: 0
		};
	},

	increment: function(num) {
		var check = num % 2;
		if (check === 0) {
			this.setState({
				counterEven: this.state.counterEven + num
			});
		} else {
			this.setState({
				counterOdd: this.state.counterOdd + num
			});
		}
	},

	decrement: function(num) {
		var check = num % 2;
		if (check === 0) {
			this.setState({
				counterEven: this.state.counterEven - num
			});
		} else {
			this.setState({
				counterOdd: this.state.counterOdd - num
			});
		}
	},

	render: function() {
		return React.createElement('div', {className: 'container'},
			React.createElement('div', {className: 'row'}, 
				React.createElement('p', {}, 'Licznik parzyste: ' + this.state.counterEven),
				React.createElement('button', {onClick: this.increment.bind(this, 2), className: 'btn'}, '+'),
				React.createElement('button', {onClick: this.decrement.bind(this, 2), className: 'btn'}, '-')
			),
			React.createElement('div', {className: 'row'}, 
				React.createElement('p', {}, 'Licznik nieparzyste: ' + this.state.counterOdd),
				React.createElement('button', {onClick: this.increment.bind(this, 1), className: 'btn'}, '+'),
				React.createElement('button', {onClick: this.decrement.bind(this, 1), className: 'btn'}, '-')
			)
		);
	}
});

var element = React.createElement('div', {}, 
	React.createElement(Counter, {}),
	React.createElement(Counter, {}),
	React.createElement(Counter, {}),
	React.createElement(Counter, {})
);

ReactDOM.render(element, document.getElementById('app'));