import { ClientDto } from '@notepad-helper/models';

export const CLIENTS: ReadonlyArray<ClientDto> = [
	{
		name: process.env.CLIENT_NAME || 'NOTEPAD_CLIENT',
		secret: process.env.CLIENT_SECRET || 'YhHlsmXQAvP9s0sHr4G6KFTTptCOdYqvjWSoWhAEFtIlDNuerESVsZ4RyV2DGavclkNP8BoGOHRGN2OhiTQJJhCn3IHSAJcoL8EBIZexJ4NOrTJ6bmIGeOpPaCpQ8Nvz7BVAMTznb2JPdceEmaaxoBoSXRey5XBO3Q9G65NSLk3mw0IHz7ARpHVLaAQJPSaNeJWZFn7yYm8WsQTlh3dTDtesFJhj0yNclgeCIr9yuJzTBr7mfvOjWkZwjzzDJb6J',
		jwtSecret: process.env.JWT_SECRET || 'Jqrw2q367Fmb9J0ZKHdODDCGu7mejvBhKqtE9uBBGwF6MyxNR4qm727jhc6PR0x1Rbk3qBMCuEPD5wKxqGrl2eXkym2hTQDNpQ0xYb6OwwurA8UjIIqnccsfaWZ2GtbYk2EMqqQtpAHMzzIjtkTtzL6SpcaEkmd96ZnBfASYWA24qMkFWHiTPQ1d7Kl5Ei7tpHHz7acGsNGu5HSDKbEkE5ogJ8H27T69Jg4vFgXLracnHbfs6iabx7DSpnol3eHA',
	}
];
