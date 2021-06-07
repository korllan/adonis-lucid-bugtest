import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({serializeAs: null})
  public steam_id: BigInt

  @belongsTo(() => User, {localKey: 'steam_id', foreignKey: 'steam_id'})
  public user: BelongsTo<typeof User>
}
