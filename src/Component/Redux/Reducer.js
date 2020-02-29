import { ADD } from './Action';
import { SUB } from './Action';
const initialState = {
	age: 15,
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				age: state.age + 1,
			};
		case SUB:
			return {
				...state,
				age: state.age - 1,
			};
		default:
			return state;
	}
};

export default Reducer;
