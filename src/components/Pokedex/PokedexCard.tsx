import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToTeam, removeFromTeam } from '../../features/pokemon-slice'
import { getPokemonNames } from '../../helpers/pokemons/getData'
import { capitalize } from '../../helpers/utils'
import { NewPokemonDataProps } from '../../models/pokemon'
import Button from '../shared/Button'

type Props = {
  pokemon: NewPokemonDataProps,
  onlyDiscovered: boolean
}

const PokedexCard = ({ pokemon, onlyDiscovered }: Props): JSX.Element => {
  const team = useAppSelector(state => state.pokemon.team)
  const [isInTeam, setIsInTeam] = useState<boolean>(getPokemonNames(team).includes(pokemon.name))
  const [hover, setHover] = useState(false)
  const dispatch = useAppDispatch()

  const handleEnter = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  const handleAddToTeam = () => {
    dispatch(addToTeam(pokemon))
  }

  const handleRemoveFromTeam = () => {
    dispatch(removeFromTeam(pokemon))
  }

  useEffect(() => {
    setIsInTeam(getPokemonNames(team).includes(pokemon.name))
  }, [team, onlyDiscovered])

  return (
    <div
      className={`relative mx-auto bg-gray-900 w-72 h-80 rounded-lg border-2 border-gray-900 
        ${isInTeam && 'border-green-500'}
      `}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {hover &&
        <div className='absolute z-30 grid bg-gray-900/70 w-full h-full rounded-lg place-items-center'>
          <div className='flex flex-col text-center w-44 m-auto gap-5'>
            {!pokemon.discovered
              ? <p className='text-white'>Pokemon not discovered</p>
              : pokemon.hasEvolved
                ? <p className='text-white'>Pokemon has been evolved</p>
                : <>
                  {isInTeam ? 
                    <Button
                      className='w-full text-center px-3 py-2 bg-white mx-auto hover:bg-gray-400'
                      onClick={handleRemoveFromTeam}
                    >
                      <p>Remove from Team</p>
                    </Button>
                    : <Button
                        className='w-full text-center px-3 py-2 bg-white mx-auto hover:bg-gray-400'
                        onClick={handleAddToTeam}
                      >
                        <p>Add to Team</p>
                      </Button>
                  }
                  {/* <Redirection
                    to={`/pokedex/${pokemon.id}`}
                    className='w-full text-center px-3 py-2 bg-white mx-auto hover:bg-gray-400'
                  >
                    about
                  </Redirection> */}
                </>
            }
          </div>
        </div>
      }
      <p className='text-2xl text-white text-center mt-5'>
        {pokemon.discovered && capitalize(pokemon.name)}
      </p>
      <img src={pokemon.sprites.default} alt={pokemon.name} className={`w-60 h-60 m-auto ${!pokemon.discovered && 'grayscale'}`} />
      {pokemon.discovered &&
        <p className='w-full text-end text-white pr-2 -mt-1'>
          n°
          <span className='text-xl'>{pokemon.id}</span>
        </p>
      }
    </div>
  )
}

export default PokedexCard