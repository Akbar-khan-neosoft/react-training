import React, { Component } from 'react';
import Person from './Person';

class List extends Component {
	constructor() {
		super();
		this.state = {
			Data: [
				{ Name: 'Akbar', Age: '68', id: 'asdf' },
				{ Name: 'Atikrant', Age: '15', id: 'jhg' },
				{ Name: 'Manas', Age: '54', id: 'jlkhhg' },
				{ Name: 'Ameya', Age: '45', id: 'kjg' },
			],
			flag: false,
		};
	}

	onClickHandle = () => {
		const flag = this.state.flag;
		this.setState({ flag: !flag });
	};

	onClickDelete = dataIndex => {
		const person = [...this.state.Data];
		person.splice(dataIndex, 1);
		this.setState({ Data: person });
	};

	onEditHandle = (e, id) => {
		const dataIndex = this.state.Data.findIndex(p => {
			return p.id === id;
		});

		const person = { ...this.state.Data[dataIndex] };
		person.Name = e.target.value;

		const data = [...this.state.Data];
		data[dataIndex] = person;
		this.setState({ Data: data });
	};

	render() {
		const buttonStyle = {
			width: '100px',
			height: '30px',
			backgroundColor: 'black',
			color: 'white',
			fontWeight: '700',
		};

		let persons;

		if (this.state.flag === true) {
			persons = (
				<div>
					{this.state.Data.map((person, index) => {
						return (
							<Person
								name={person.Name}
								age={person.Age}
								key={person.id}
								click={() => this.onClickDelete(index)}
								change={e => this.onEditHandle(e, person.id)}
							/>
						);
					})}
				</div>
			);

			buttonStyle.backgroundColor = 'Grey'; // dynamic stylimg
			buttonStyle.color = 'Black';
		}

		return (
			<div>
				<p>Hey, Welcome to List Example</p>
				<button onClick={this.onClickHandle} style={buttonStyle}>
					Display Button{' '}
				</button>
				{persons}
			</div>
		);
	}
}

export default List;
