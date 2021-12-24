import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Cast } from '../../types/cast';


const CastPage: NextPage = () => {
    const title = 'cast';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return(
        <div>
            <h1>{title}</h1>
                {data.map((castData: Cast) => {
                    const { name, born, bio } = castData;
                    
                    return (
                        <div key={`fututama-${title}-${castData.id}`}>
                            <h3>name {name}</h3>
                            <br></br>
                            <p>born {born}</p>
                            <br></br>
                            <p>url {bio.url}</p>
                            <br></br>
                            <p>text {bio.text}</p>
                        </div>
                    );})}
        </div>
    )
}




export default CastPage;
