const { send, json } = require('micro')
const { router, get, post, put } = require('microrouter')
const Users = require('./data/users.json')

const users = (req, res) => send(res, 200, Users)
const notfound = (req, res) => send( res, 404, 'Not found route')

const newArrayItem = (data) => {
    const createdUser = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        age: data.age,
        password: data.password
    }
    Users.push(createdUser);
    return (Users)
}
const newUser = (req, res) => {
    const newData = req.params;
    // const matchedEmail = matchEmail(newData.email);
    newArrayItem(newData);
    send (res, 200, Users)
}

const matchEmail = async (questioned) => {
    const result = await Users.find((User)=> User.email == questioned)
    return result
  }

const userEmail = async (req, res) => {
    const wantedUser = req.params.email;
    const foundUser = await matchEmail(wantedUser)
    send(res, 200, foundUser)
}

const updatePasswordByEmail = async (req, res) => {
    const desiredEmail = req.params.email;
    const newPassword = req.params.password;
    const foundEmail = await matchEmail(desiredEmail);
    foundEmail.password = newPassword;
    send(res, 200, foundEmail)
}


module.exports = router(
    get('/users', users),
    get('/users/:email', userEmail),
    post('/users/:firstName/:lastName/:email/:phone/:age/:password', newUser),
    put('/users/:email/:password', updatePasswordByEmail),
    get('/*', notfound)
)