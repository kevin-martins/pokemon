import { AlertProps } from '../../models/alert'

const Alert = (alert: AlertProps) => {
  return (
    <div className='flex flex-row h-full'>
      {alert.pokemonSprite !== null &&
        <img
          src={alert.pokemonSprite}
          alt={alert.pokemonSprite}
          className={`w-12 h-12 ml-auto pr-2`}
        />
      }
      <p className='mr-auto font-bold mx-auto h-full text-white'>
        {alert.message}
      </p>
    </div>
  )
}

export default Alert