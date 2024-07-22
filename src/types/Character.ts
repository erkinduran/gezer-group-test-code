import Location from "./Location"
import Origin from "./Origin"

export default interface Character {
    id: number|null
    name: string|null
    status: string|null
    species: string|null
    type: string|null
    gender: string|null
    origin: Origin|null
    location: Location|null
    image: string|null
    episode: string[]|null
    url: string|null
    created: Date|null|string|undefined
}