const userService = require('../services/users-service')

const getUsers = (req, res) => {
    const { limit } = req.query 
    const { offset } = req.query 
    const parseLimit = parseInt(limit, 10) || 10
    const parseOffset = parseInt(offset, 10) || 0

    if (isNaN(parseLimit)) {
        return res.status(400).send('Invalid limit')
    }
    if (isNaN(parseOffset)) {
        return res.status(400).send('Invalid offset')
    }
    const users = userService.getUsers(parseLimit, parseOffset)
    res.send(users)
}

const getUser = (req, res) => {
    const { id } = req.params
    const user = userService.getUser(id)
    if (!user) {
        return res.status(404).send('User not found')
    }
    res.status(200).send(user)
}


const createUser = (req, res) => {
    const user = req.body
    const { name, address, email } = user
    if (!name || !address || !email) {
        return res.status(400).send('Missing required fields')
    }
    const newUser = userService.createUser(user)
    res.status(201).send(`has user added successfully ${newUser}`)
}

const upsertUser = (req, res) => {
    const { id } = req.params
    const user = req.body
    const { name, address, email } = user
    if (!name || !address || !email) {
        return res.status(400).send('Missing required fields')
    }
    const updatedUser = userService.upsertUser(id, user)
    res.status(200).send(`has user updated successfully ${updatedUser}`)
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const isDeleted = userService.deleteUser(id)
    if (!isDeleted) {
        return res.status(404).send('User not found')
    }
    res.status(200).send(`has user deleted successfully ${id}`)
}

module.exports = { getUsers, getUser, createUser, upsertUser, deleteUser }