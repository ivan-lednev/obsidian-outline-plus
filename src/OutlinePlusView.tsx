import { ItemView, WorkspaceLeaf } from "obsidian";

import * as React from "react";
import { Root, createRoot } from "react-dom/client";

import { ReactView, StateChanger } from "./ReactView";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class OutlinePlusView extends ItemView {
	private root: Root;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		this.root = createRoot(this.getContainer());
		const stateChanger = new StateChanger();
		this.root.render(<ReactView stateChanger={stateChanger} />);

		setInterval(() => {
			stateChanger.setState(new Date().toLocaleTimeString());
		}, 1000);
	}

	async onClose() {
		this.root.unmount();
	}

	private getContainer() {
		return this.containerEl.children[1];
	}
}
