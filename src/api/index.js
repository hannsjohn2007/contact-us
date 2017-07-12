import { version } from '../../package.json';
import { Router } from 'express';
import address from './address';
export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/address', address({ config, db }));

	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
