import { MovesProps } from "./query-response/pokemon-info-by-id/moves"
import { StatsProps } from "./query-response/pokemon-info-by-id/stats"
import { TypesProps } from "./query-response/pokemon-info-by-id/types"
import { NamesProps } from "./query-response/shared/names"

export type SpritesProps = {
    default: string,
    shiny: string,
}

export type NewPokemonEvolutionProps = {
    level: number,
    name: string,
    sprite: string,
    current: boolean,
}

export type NewPokemonSpeciesProps = {
    capture_rate: number,
    is_legendary: boolean,
    is_mythical: boolean,
    names: NamesProps[],
    evolutions: string,
}

export type GenerationRangeProps = {
    value: string,
    from: number,
    to: number,
}

export type NewPokemonMovesProps = {
    name: string,
    power: number,
    pp: number,
    accuracy: number,
    type: string,
}

export type NewPokemonDataProps = {
    id: number,
    name: string,
    names: NamesProps[],
    discovered: boolean,
    current_level: number,
    current_xp: number,
    to_next_level: number,
    capture_rate: number,
    evolutions: NewPokemonEvolutionProps[],
    is_legendary: boolean,
    is_mythical: boolean,
    moves: NewPokemonMovesProps[],
    current_moves: NewPokemonMovesProps[],
    sprites: SpritesProps,
    stats: StatsProps[],
    types: TypesProps[],
}
