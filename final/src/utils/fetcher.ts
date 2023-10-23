export const fetcher = async <T = unknown>(
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })

  if (!response.ok) {
    let result

    try {
      result = await response.json()
    } catch (e) {
      result = { message: 'Something went wrong' }
    }

    throw new Error(result.message)
  }

  return (await response.json()) as T
}
