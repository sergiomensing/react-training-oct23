export const fetcher = async <T = unknown>(
  url: string,
  options?: RequestInit
) => {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return (await response.json()) as T
}
