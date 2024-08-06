
const USERS = []
let id = 1
const setId = () => {
    return id++
}

const getUserById = (id) => {
    return USERS.find(user => user.id == id)
}

const getUsers = (limit, offset) => {
    const users = USERS.slice(offset, limit)
    return users
}

const getUser = (id) => {
    const user = getUserById(id)
    return user
}

const createUser = (user) => {
    const newUser = { ...user, id: setId() }
    USERS.push(newUser)
    return newUser
}

const upsertUser = (id, user) => {
    const isUser = getUserById(id)
    if (!isUser) {
        const newUser = createUser(user)
        return newUser
    }
    const index = USERS.findIndex(user => user.id == id)
    USERS[index] = {...user, id}
    return user
}

const deleteUser = (id) => {
    const index = USERS.findIndex(user => user.id == id)
    if (index === -1) {
        return null
    }
    USERS.splice(index, 1)
    return id
}
module.exports = { getUsers, getUser, createUser, upsertUser, deleteUser }