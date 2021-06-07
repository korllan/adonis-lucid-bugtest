import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Game from './Game'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public steam_id: BigInt

  @column()
  public username: string

  @hasMany(() => Game, {localKey: 'steam_id', foreignKey: 'steam_id'})
  public games: HasMany<typeof Game>
}
