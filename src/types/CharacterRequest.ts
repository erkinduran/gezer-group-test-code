import Character from "./Character"
import Info from "./Info"

export default interface CharacterRequest {
    info: Info
    results: Character[]|null
}