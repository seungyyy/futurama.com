import type { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Character } from '../types/characters';
import Image from 'next/image';

const CharactersPage: NextPage = () => {
    const title = 'characters';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((charactersData: Character) => {
                const { age, gender, homePlanet, sayings, name, images } = charactersData;

                return (
                    <div key={`fututama-${title}-${charactersData.id}`}>
                        <div>
                            name: {name.first}
                            {name.middle}
                            {name.last}
                        </div>
                        <br></br>
                        <Image src={images.main} alt="" />
                        <br></br>
                        <div>gender: {gender}</div>
                        <br></br>
                        <div>homePlanet: {homePlanet}</div>
                        <div>age: {age}</div>
                        <div>sayings: {sayings[0]}</div>
                    </div>
                );
            })}
        </div>
    );
};




export default CharactersPage;
