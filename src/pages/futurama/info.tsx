import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Info } from '../../types/info';


const InfoPage: NextPage = () => {
    const title = 'info';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((infoData: Info) => {
                const { synopsis, yearsAired } = infoData;

                return (
                    <div key={`fututama-${title}-${infoData.id}`}>
                        <div>synopsis: {synopsis}</div>
                        <br></br>
                        <div>yearsAired: {yearsAired}</div>
                    </div>
                );
            })}
        </div>
    );
}




export default InfoPage;
