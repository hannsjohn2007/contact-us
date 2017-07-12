import resource from 'resource-router-middleware';
import addresses from '../models/addresses';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'address',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let address = addresses.find( address => address.id===id ),
			err = address ? null : 'Not found';
		callback(err, address);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(addresses);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = addresses.length.toString(36);
		addresses.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ address }, res) {
		res.json(address);
	},

	/** PUT /:id - Update a given entity */
	update({ address, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				address[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ address }, res) {
		addresses.splice(addresses.indexOf(address), 1);
		res.sendStatus(204);
	}
});
