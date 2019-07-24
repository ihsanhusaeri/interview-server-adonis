'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number').notNullable().unique()
      table.string('description', 256).notNullable()
      table.string('type', 64).notNullable()
      table.string('options', 64)
      table.string('answer', 512)
      table.integer('timer', 64).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
