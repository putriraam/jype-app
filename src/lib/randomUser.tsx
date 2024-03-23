export const getItem = async() => {
    const res = await fetch(`https://randomuser.me/api/?results=30`)
    const data = await res.json()

    return data
}