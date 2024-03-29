export const capitalize = (str: string): string => {
    return str[0].toUpperCase() + str.split('').splice(1, str.length).join('')
}

export const getRandomValue = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const changeWord = (condition: boolean, singularWord: string, pluralWord: string): string => {
    return condition ? pluralWord : singularWord
}