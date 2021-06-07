import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class SeedSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        steam_id: BigInt('76561199062731078'),
        username: 'korllan',
      },
      {
        steam_id: BigInt('7000000000001'),
        username: 'adonis'
      }
    ])

    const firstUser = await User.findOrFail('76561199062731078')
    firstUser.related('games').create({
      name: 'Counter-Strike GO'
    })

    const secondUser = await User.findOrFail('7000000000001')
    secondUser.related('games').create({
      name: 'Dota'
    })
  }
}
