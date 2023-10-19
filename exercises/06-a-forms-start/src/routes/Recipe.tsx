import { Recipe as RecipeType } from '@/types/Recipe'
import { fetcher } from '@/utils/fetcher'
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

export const loader = ({ params }: LoaderFunctionArgs) => {
  return fetcher(`http://localhost:8000/recipes/${params.id}`)
}

export const Recipe = () => {
  const recipe = useLoaderData() as RecipeType

  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
        <div>{recipe.description}</div>
        <div>
          <img
            src={`/images/${recipe.img}`}
            alt="img"
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <Link to="/">Back to home</Link>
    </div>
  )
}
