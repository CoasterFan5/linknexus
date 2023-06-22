import type mongoose from 'mongoose';

export enum SpecialLink {
	GitHub,
	Instagram,
	Twitter,
	Youtube,
	Twitch,
	TikTok,
	Patreon,
	Snapchat,
	LinkedIn,
	Facebook,
	Spotify
}

export enum BackgroundType {
	COLOR,
	GRADIENT
}

export enum ButtonStyle {
	SOLID,
	DASHED,
	DOTTED
}

export enum Font {
	ARIAL,
	ROBOTO,
	VERDANA,
	CALIBRI,
	SEGOE_UI,
	HELVETICA,
	TAHOMA,
	TIMES_NEW_ROMAN
}

export interface IUser extends mongoose.Document {
	email: string;
	password: string;
	username: string;
	bio?: string;
	theme: ITheme;
	links: {
		title: string;
		url: string;
	}[];
	specials: {
		type: SpecialLink;
		username: string;
	}[];
}

export interface ITheme extends mongoose.Document {
	background: {
		type: BackgroundType;
		color: string;
	};
	button: {
		radius: number;
		style: ButtonStyle;
		color: string;
		fontColor: string;
	};
	font: Font;
	fontColor: string;
}
