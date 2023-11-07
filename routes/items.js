const {
	getItem,
	getItems,
	addItem,
	deleteItem,
	updateItem
} = require("../controllers/itemsControllers.js");

// Options for get all items
const getItemsOptionsSchema = {
	schema: {
		response: {
			200: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						name: { type: "string" },
					},
				},
			},
		},
	},
	handler: getItems,
};

const getOneItemOptsSchema = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					id: { type: "string" },
					name: { type: "string" },
				},
			},
		},
	},
	handler: getItem,
};

const postItemOpts = {
	schema: {
		response: {
			body: {
				type: "object",
				required: ["name"],
				properties: {
					name: { type: "string" },
				},
			},
			201: {
				type: "object",
				properties: {
					id: { type: "string" },
					name: { type: "string" },
				},
			},
		},
	},
	handler: addItem,
};

const deleteItemOpts = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					message: {type: 'string'}
				},
			},
		},
	},
	handler: deleteItem,
};

const updateItemOps = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					message: {type: 'string'}
				},
			},
		},
	},
	handler: updateItem,
};

// Route creation
function itemRoutes(fastify, options, done) {
	// Get all items
	fastify.get("/items", getItemsOptionsSchema);

	// Get single item
	fastify.get("/items/:id", getOneItemOptsSchema);

	// Add single item
	fastify.post("/items", postItemOpts);

	// Delete single item
	fastify.delete("/items/:id", deleteItemOpts);

	// Update single item
	fastify.put("/items/:id", updateItemOps);

	done();
}

module.exports = itemRoutes;
