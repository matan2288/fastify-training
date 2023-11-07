const { v4: uuidv4 } = require("uuid");
let items = require("../ItemsMock.js");

const getItems = (req, reply) => {
	reply.send(items);
};

const getItem = (req, reply) => {
	const { id } = req.params;
	const item = items.find((item) => item.id === id);
	reply.send(item);
};

const addItem = (req, reply) => {
	const itemName = req.body.name;
	req.body = { itemName };
	const item = {
		id: uuidv4(),
		name: itemName,
	};

	items = [...items, item];
	reply.code(201).send(item);
};

const deleteItem = (req, reply) => {
	const id = req.params;
	items = items.filter((item) => item.id !== id);

	reply.send(`Item ${id} has been removed`);
};

const updateItem = (req, reply) => {
	const id = req.params;
    const name = request.body;

	items = items.map(item=>(item.id === id ? {id, name} : item));
	items = items.find((item) => item.id === id);

	reply.send(`Item ${id} has been updated`);
};

module.exports = { getItem, getItems, addItem, deleteItem, updateItem};
