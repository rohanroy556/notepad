export class DATABASE {
	static readonly URI = process.env.DB_URI || 'mongodb+srv://cluster556.v1vyu.mongodb.net/notepad';
	static readonly USER = process.env.DB_USER || 'notepad';
	static readonly PASS = process.env.DB_PASS || 'djXt4DasGK28HYjOaag5YCdwK7LTIJI7sf2pXMOE4NA6pjq3E2';
}
