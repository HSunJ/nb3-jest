export const fetchData = (cb: (data: string) => void) => {
  setTimeout(() => cb('ok'), 100);
}

export const getAvatars = async () => {
    const response = await fetch('https://learn.codeit.kr/api/avatars')
    const { results } = await response.json()
    return results
}