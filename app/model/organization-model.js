const mongoose = require("mongoose");
const Scheme = mongoose.Schema

const organizationSchema = new Scheme({
    organization_id: {
       type: Number,
       required: [true, 'Organization id is required'],
       unique: [true, 'Organization id already exsist'],
    },
    url: {
        type: String
    },
    external_id: {
        type: String,
        required: [true, 'External id is required'],
        unique: [true, 'External id already exsist'],
    },
    name: {
        type: String,
    },
    domain_names: [{
        type: String,
    }],
    created_at: {
        type: String
    },
    details: {
        type: String
    },
    shared_tickets: {
        type: Boolean
    },
    tags: [{
        type: String
    }]
});

module.exports = mongoose.model('organizations', organizationSchema);
