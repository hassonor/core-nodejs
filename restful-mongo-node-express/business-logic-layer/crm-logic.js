require('../data-access-layer/dal');
const ContactModel = require('../models/crm-model');

function getAllContactsAsync() {
  return ContactModel.find().exec();
}

function getOneContactAsync(_id) {
  return ContactModel.findById(_id).exec();
}

function addContactAsync(contact) {
  return contact.save();
}

async function updateContactAsync(contact) {
  const result = await ContactModel.findOneAndUpdate({ _id: contact._id }, contact, {
    new: true,
    useFindAndModify: false,
  }).exec();
  return result;
}

function deleteContactAsync(_id) {
  return ContactModel.findOneAndDelete({ _id }).exec();
}

module.exports = {
  getAllContactsAsync,
  addContactAsync,
  getOneContactAsync,
  updateContactAsync,
  deleteContactAsync,
};
