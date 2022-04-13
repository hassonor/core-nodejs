const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Enter a first name'],
      minlength: [2, 'Name must be minimum 2 chars'],
      maxlength: [100, "Name can't exceed 100 chars"],
    },
    lastName: {
      type: String,
      required: [true, 'Enter a last name'],
      minlength: [2, 'Name must be minimum 2 chars'],
      maxlength: [100, "Name can't exceed 100 chars"],
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    phone: {
      type: Number,
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const ContactModel = mongoose.model('ContactModel', ContactSchema, 'contacts');

module.exports = ContactModel;
