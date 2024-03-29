import { capitalize } from '../helpers/utils'
import Redirection from './shared/Redirection'

type NavigationProps = {
  to: string,
  name: string,
}

const navigationOptions: NavigationProps[] = [
  { to: "/", name: "pokedex" },
  { to: "/my-team", name: "my team" },
  { to: "/battle", name: "battle" },
]

export const Navigation = () => {
  return (
    <nav className='relative bg-gray-800 z-50 py-6 text-white text-xl shadow-xl sticky top-0'>
      <div className='w-max mx-auto flex gap-5'>
        {navigationOptions.map((option: NavigationProps, i: number) => (
          <Redirection
            key={i}
            to={option.to}
            className='hover:text-yellow-500'
          >
            <p>{capitalize(option.name)}</p>
          </Redirection>
        ))}
      </div>
    </nav>
  )
}

export default Navigation