import { Plugin } from "obsidian";

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
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
