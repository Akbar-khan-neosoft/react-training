import React, { useState, useEffect } from 'react';

function HooksUseEffect() {
	const [Age, setAge] = useState(0);

	const buttonHandler = () => {
		setAge(Age + 1);
	};

	// useEffect(
	//     () => { console.log("you are Born")});
	useEffect(() => console.log('Hello useEffext'));

	useEffect(() => {
		if (Age > 0 && Age < 18) {
			console.log('You are a kid');
		} else if (Age > 18 && Age < 50) {
			console.log('you are an adult now');
		}
	});

	useEffect(() => {
		if (Age > 50) {
			console.log('You are Old now');
		}
	});

	return (
		<div>
			<button onClick={buttonHandler}>click</button> your age is {Age}
			<p></p>
		</div>
	);
}

export default HooksUseEffect;
