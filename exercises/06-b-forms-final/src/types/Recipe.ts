export type Ingredient = {
  name: string
  quantity: number
  unit?: string
}

export type Recipe = {
  id: number
  title: string
  description: string
  img: string
  ingredients: Ingredient[]
  steps: string[]
}
