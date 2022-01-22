export class DatabaseConfiguation {
	static readonly uri = process.env.DB_URI || 'mongodb+srv://cluster556.v1vyu.mongodb.net/notepad';
	static readonly user = process.env.DB_USER || 'notepad';
	static readonly pass = process.env.DB_PASS || 'djXt4DasGK28HYjOaag5YCdwK7LTIJI7sf2pXMOE4NA6pjq3E2';
}

export default () => Object.freeze({
	database: DatabaseConfiguation
});
