const { send, json } = require('micro')
const { router, get, post, put } = require('microrouter')
const Users = require('./data/users.json')

const users = (req, res) => send(res, 200, Users)
const notfound = (req, res) => send( res, 404, 'Not found route')

const newArrayItem = (data) => {
    const createdUser = {
        'firstName': data.firstName,
        'lastName': data.lastName,
        'email': data.email,
        'phone': data.phone,
        'age': data.age,
        'password': data.password
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
    // const result = await Users.filter((User)=> User.email == questioned.email)
    let result = {}
    const index =0;
    for(let i =0; i > Users.length; i++){
        if(questioned == Users[i].email){
            index = i;
        }
    }
    result = Users[index];
    const final = {
        "firstName": result.firstName,
        "lastName": result.lastName,
        "email": result.email,
        "phone": result.phone,
        "age": result.age,
        "password": result.password 
    }
    return final
  }

const userEmail = async (req, res) => {
    const wantedUser = req.params;
    const foundUser = await matchEmail(wantedUser)
    send(res, 200, foundUser)
}

const updatePasswordByEmail = async (req, res) => {
    const desiredEmail = req.params.email;
    const newPassword = req.params.password;
    let foundEmail = {};
    foundEmail = await matchEmail(desiredEmail);
    console.log(foundEmail);
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