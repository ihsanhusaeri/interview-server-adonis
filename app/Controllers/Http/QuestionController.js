'use strict'
const Database = use('Database')
const Question = use('App/Models/Question')
class QuestionController {
    async index({response}){
        // const total = await Database
        //         .from('questions')
        //         .getCount()
        // return response.status(201).json({data:total}) 

        const questions = await Question.all()
        return response.status(201).json({data:questions})
    }
    async show({params, response}){
        const questionNumber = params.number
        const question =  await Database
            .table('questions')
            .where('number', questionNumber)
        return response.status(201).json({data:question})
    }
}   

module.exports = QuestionController
