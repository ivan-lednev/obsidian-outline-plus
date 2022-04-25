import { Plugin } from "obsidian";

import { OutlinePlusView, VIEW_TYPE_EXAMPLE } from "./OutlinePlusView";

interface OutlinePlusSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: OutlinePlusSettings = {
	mySetting: "default",
};

export default class OutlinePlus extends Plugin {
	settings: OutlinePlusSettings;

	async onload() {
		await this.loadSettings();
		this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new OutlinePlusView(leaf));
		this.addRibbonIcon("dice", "Activate view", () => {
			this.activateView();
		});
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

		await this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_EXAMPLE,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
		);
	}

	onunload() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
