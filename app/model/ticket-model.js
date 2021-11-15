const mongoose = require("mongoose");
const Scheme = mongoose.Schema

const ticketSchema = new Scheme({
    ticket_id: {
       type: String,
       required: [true, 'Ticket id is required'],
       unique: [true, 'Ticket id already exsist'],
    },
    url: {
        type: String
    },
    external_id: {
        type: String,
        required: [true, 'External id is required'],
        unique: [true, 'External id already exsist'],
    },
    created_at: {
        type: String
    },
    type: {
        type: String,
    },
    subject: {
        type: String,
    },
    description: {
        type: String
    },
    priority: {
        type: String
    },
    status: {
        type: String
    },
    submitter_id: {
        type: Number
    },
    assignee_id: {
        type: Number
    },
    organization_id: {
        type: Number,
        required: [true, 'Organization id is required'],
    },
    tags: [{
        type: String
    }],
    has_incidents: {
        type: Boolean
    },
    due_at: {
        type: String
    },
    via: {
        type: String
    }
});

module.exports = mongoose.model('tickets', ticketSchema);
