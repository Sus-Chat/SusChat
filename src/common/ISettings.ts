export interface ISettings {
	alwaysOnTop: boolean;
	microphone: string;
	speaker: string;
	pushToTalk: boolean;
	serverURL: string;
	pushToTalkShortcut: string;
	deafenShortcut: string;
	muteShortcut: string;
	offsets: {
		version: string;
		data: string;
	};
	hideCode: boolean;
	enableSpatialAudio: boolean;
	haunting: boolean;
	localLobbySettings: {
		maxDistance: number;
	};
}

export interface ILobbySettings {
	maxDistance: number;
}
