const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = require('express').Router();

// router.get('/users', (req, res) => {
//     res.status(200).json({users})
// })
// router.get('/users', getAllUsers)
router.get('/', getAllUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;