const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id: uuidv4(),
        username: 'lala mia',
        email: 'lalamia@gmail.com'
    },
    {
        id: uuidv4(),
        username: 'rokibul',
        email: 'rokibul@gmail.com'
    },
]

module.exports = users;