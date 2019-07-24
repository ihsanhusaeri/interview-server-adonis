'use strict'
const User = use('App/Models/User')
class UserController {
    async store({request, response}){
        const userIdentity = request.only(['name', 'email', 'phone_number'])
        const user = new User()
        user.name = userIdentity.name
        user.email = userIdentity.email
        user.phone_number = userIdentity.phone_number

        await user.save()

        const userResponse = await User.query().select('id', 'name', 'email')
                            .where('email', request.input('email'))
                            .fetch()
        response.status(201).json({data:userResponse})
    }
}

module.exports = UserController
