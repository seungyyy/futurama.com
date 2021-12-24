export interface CharacterData {
  name: {
    first: string,
    middle: string,
    last: string
  },
  image: {
    headShot: string,
    main: string
  },
  gender: string,
  species: string,
  homePlanet: string,
  occupation: string,
  age: string,
  id: number,
  sayings: [string]
}