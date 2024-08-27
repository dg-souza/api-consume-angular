export class GameDTO {
    developer: string | null
    freetogame_profile_url: string | null
    game_url: string | null
    genre: string | null
    id: number
    platform: string | null
    publisher: string | null
    release_date: string | null
    short_description: string | null
    description: string | null
    minimum_system_requirements: {
        os: string | null
        processor: string | null
        memory: string | null
        graphics: string | null
        storage: string | null
    }
    thumbnail: string | null
    title: string | null
}