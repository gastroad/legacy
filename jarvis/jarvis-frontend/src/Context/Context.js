import React, { createContext } from "react";

const Context = createContext();

const { Provider } = Context;

class SampleProvider extends React.Component {
	state = {
		member: ["이경민", "진현성", "윤민혁", "한규현", "박중현", "차도인"],
		shuffleMember: [],
		number: 0,
		times: []
	};

	actions = {
		setMember: data => {
			this.setState({ member: data.data });
		},
		setShuffleMember: data => {
			this.setState({ shuffleMember: data.data });
		},
		setNumber: number => {
			this.setState({ number });
		},
		setTimes: times => {
			this.setState({ times });
		}
	};

	render() {
		const { state, actions } = this;
		const value = { state, actions };
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}

export { SampleProvider, Context };
