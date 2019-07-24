'use strict'
const Answer = use('App/Models/Answer')
const Database = use('Database')
class AnswerController {
    async store({request, response}){
        // const userId = request.input('userId')
        // const questionId = request.input('questionId')
        // const answerInpute = request.input('answer')
        const answerIdentity = request.only(['userId', 'questionId', 'answer'])

        

        const answer = new Answer()
        answer.user_id = answerIdentity.userId
        answer.question_id = answerIdentity.questionId
        answer.answer = answerIdentity.answer

        await answer.save()

        return response.status(201).json({data: answer})

    }
}

module.exports = AnswerController
