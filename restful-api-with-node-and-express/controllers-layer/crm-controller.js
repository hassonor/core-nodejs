const express = require('express');
const logic = require('../business-logic-layer/crm-logic');
const ContactModel = require('../models/crm-model');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const contacts = await logic.getAllContactsAsync();
    response.json(contacts);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.get('/:_id', async (request, response) => {
  try {
    const { _id } = request.params;

    const product = await logic.getOneContactAsync(_id);
    if (!product) return response.status(404).send(`_id ${_id} not found.`);

    return response.json(product);
  } catch (err) {
    return response.status(500).send(err.message);
  }
});

router.post('/', async (request, response) => {
  try {
    const contact = new ContactModel(request.body);

    // Validation:
    const errors = contact.validateSync();
    if (errors) return response.status(400).send(errors.message);

    const addedContact = await logic.addContactAsync(contact);
    return response.status(201).json(addedContact);
  } catch (err) {
    return response.status(500).send(err.message);
  }
});

router.put('/:_id', async (request, response) => {
  try {
    const { _id } = request.params;
    request.body._id = _id;
    const contact = new ContactModel(request.body);

    const updatedContact = await logic.updateContactAsync(contact);
    if (!updatedContact) return response.status(404).send(`_id ${_id} not found.`);

    return response.json(updatedContact);
  } catch (err) {
    return response.status(500).send(err.message);
  }
});

router.delete('/:_id', async (request, response) => {
  try {
    const { _id } = request.params;

    await logic.deleteContactAsync(_id);

    return response.sendStatus(204);
  } catch (err) {
    return response.status(500).send(err.message);
  }
});

module.exports = router;