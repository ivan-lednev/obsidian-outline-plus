import * as React from "react";
import { useState } from "react";

export class StateChanger {
	private setReactState: any;

	saveStateChanger(stateSetter: any) {
		this.setReactState = stateSetter;
	}

	setState(state: any) {
		this.setReactState(state);
	}
}

interface ReactViewProps {
	stateChanger: StateChanger;
}

export const ReactView = (props: ReactViewProps) => {
	const [text, setText] = useState("Initial");
	props.stateChanger.saveStateChanger(setText);
	return <h2>{text}</h2>;
};
