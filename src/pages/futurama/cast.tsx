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
                            <h3>name {castData.name}</h3>
                            <br></br>
                            <p>born {castData.born}</p>
                            <br></br>
                            <p>url {castData.bio.url}</p>
                            <br></br>
                            <p>text {castData.bio.text}</p>
                        </div>
                    );})}
        </div>
    )
}




export default CastPage;
