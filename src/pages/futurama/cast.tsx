import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Cast } from '../../types/cast';


const CastPage: NextPage = () => {
    const name = 'cast';
    const { data, error } = useFuturamaData(name);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return(
        <div>
            <h1>${name}</h1>
                {data.map((castData: Cast) => {
                    return (
                        <div key={`fututama-${name}-${castData.id}`}>
                            <h3>{castData.name}</h3>
                            <p>{castData.born}</p>
                            <p>{castData.bio.url}</p>
                            <p>{castData.bio.text}</p>
                        </div>
                )})}
        </div>
    )
}




export default CastPage;
