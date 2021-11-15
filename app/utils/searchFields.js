const userFields = [
    { key: 'user_id', value: 'user_id', flag: 'user_id', text: 'user_id' },
    { key: 'url', value: 'url', flag: 'url', text: 'url' },
    { key: 'external_id', value: 'external_id', flag: 'external_id', text: 'external_id' },
    { key: 'name', value: 'name', flag: 'name', text: 'name' },
    { key: 'alias', value: 'alias', flag: 'alias', text: 'alias' },
    { key: 'created_at', value: 'created_at', flag: 'created_at', text: 'created_at' },
    { key: 'active', value: 'active', flag: 'active', text: 'active' },
    { key: 'verified', value: 'verified', flag: 'verified', text: 'verified' },
    { key: 'shared', value: 'shared', flag: 'shared', text: 'shared' },
    { key: 'locale', value: 'locale', flag: 'locale', text: 'locale' },
    { key: 'timezone', value: 'timezone', flag: 'timezone', text: 'timezone' },
    { key: 'last_login_at', value: 'last_login_at', flag: 'last_login_at', text: 'last_login_at' },
    { key: 'email', value: 'email', flag: 'email', text: 'email' },
    { key: 'phone', value: 'phone', flag: 'phone', text: 'phone' },
    { key: 'signature', value: 'signature', flag: 'signature', text: 'signature' },
    { key: 'organization_id', value: 'organization_id', flag: 'organization_id', text: 'organization_id' },
    { key: 'tags', value: 'tags', flag: 'tags', text: 'tags' },
    { key: 'suspended', value: 'suspended', flag: 'suspended', text: 'suspended' },
    { key: 'role', value: 'role', flag: 'role', text: 'role' }
]

const ticketFields = [
    { key: 'ticket_id', value: 'ticket_id', flag: 'ticket_id', text: 'ticket_id' },
    { key: 'url', value: 'url', flag: 'url', text: 'url' },
    { key: 'external_id', value: 'external_id', flag: 'external_id', text: 'external_id' },
    { key: 'created_at', value: 'created_at', flag: 'created_at', text: 'created_at' },
    { key: 'type', value: 'type', flag: 'type', text: 'type' },
    { key: 'subject', value: 'subject', flag: 'subject', text: 'subject' },
    { key: 'description', value: 'description', flag: 'description', text: 'description' },
    { key: 'priority', value: 'priority', flag: 'priority', text: 'priority' },
    { key: 'status', value: 'status', flag: 'status', text: 'status' },
    { key: 'submitter_id', value: 'submitter_id', flag: 'submitter_id', text: 'submitter_id' },
    { key: 'assignee_id', value: 'assignee_id', flag: 'assignee_id', text: 'assignee_id' },
    { key: 'organization_id', value: 'organization_id', flag: 'organization_id', text: 'organization_id' },
    { key: 'tags', value: 'tags', flag: 'tags', text: 'tags' },
    { key: 'has_incidents', value: 'has_incidents', flag: 'has_incidents', text: 'has_incidents' },
    { key: 'due_at', value: 'due_at', flag: 'due_at', text: 'due_at' },
    { key: 'via', value: 'via', flag: 'via', text: 'via' }
]

const organizationFields = [
    { key: 'organization_id', value: 'organization_id', flag: 'organization_id', text: 'organization_id' },
    { key: 'url', value: 'url', flag: 'url', text: 'url' },
    { key: 'external_id', value: 'external_id', flag: 'external_id', text: 'external_id' },
    { key: 'name', value: 'name', flag: 'name', text: 'name' },
    { key: 'domain_names', value: 'domain_names', flag: 'domain_names', text: 'domain_names' },
    { key: 'created_at', value: 'created_at', flag: 'created_at', text: 'created_at' },
    { key: 'details', value: 'details', flag: 'details', text: 'details' },
    { key: 'shared_tickets', value: 'shared_tickets', flag: 'shared_tickets', text: 'shared_tickets' },
    { key: 'tags', value: 'tags', flag: 'tags', text: 'tags' }
]

module.exports = {
    userFields,
    ticketFields,
    organizationFields
}
