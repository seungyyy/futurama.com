import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Character } from '../../types/characters';


const CastPage: NextPage = () => {
    const title = 'characters';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((CharactersData: Character) => {
                const { age, gender, homePlanet, sayings, name, images } = CharactersData;

                return (
                    <div key={`fututama-${title}-${CharactersData.id}`}>
                        <div>
                            name: {name.first}
                            {name.middle}
                            {name.last}
                        </div>
                        <br></br>
                        <img src={images.main} />
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
}




export default CastPage;
