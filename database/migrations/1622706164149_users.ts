import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('steam_id').primary()
      table.string('username')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
