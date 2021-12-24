import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Info } from '../../types/info';


const CastPage: NextPage = () => {
    const title = 'info';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((InfoData: Info) => {
                return (
                    <div key={`fututama-${title}-${InfoData.id}`}>
                        <div>synopsis: {InfoData.synopsis}</div>
                        <br></br>
                        <div>yearsAired: {InfoData.yearsAired}</div>
                    </div>
                );
            })}
        </div>
    );
}




export default CastPage;
