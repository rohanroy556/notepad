export class DATABASE {
	static readonly URI = process.env.DB_URI || 'mongodb://localhost:27017/notepad';
	static readonly USER = process.env.DB_USER || '';
	static readonly PASS = process.env.DB_PASS || '';
	static readonly ENABLE_SEED = process.env.DB_ENABLE_SEED === 'true' || true;
}
