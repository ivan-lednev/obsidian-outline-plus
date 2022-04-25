import { ItemView, WorkspaceLeaf } from "obsidian";

import * as React from "react";
import { Root, createRoot } from "react-dom/client";

import { ReactView } from "./ReactView";

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
		this.root.render(<ReactView />);
	}

	async onClose() {
		this.root.unmount();
	}

	private getContainer() {
		return this.containerEl.children[1];
	}
}
