import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Episodes } from '../../types/episodes';


const EpisodesPage: NextPage = () => {
    const name = 'episodes';
    const { data, error } = useFuturamaData(name);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{name}</h1>
            {data.map((episodesData: Episodes) => {
                const { number, title, writers, originalAirDate, desc } = episodesData;

                return (
                    <div key={`fututama-${name}-${episodesData.id}`}>
                        <h3>title {title}</h3>
                        <br></br>
                        <p>number {number}</p>
                        <p>originalAirDate {originalAirDate}</p>
                        <p>desc {desc}</p>
                        <p>writers {writers}</p>
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
};




export default EpisodesPage;
