import type { NextPage } from 'next';
import { EpisodeContainer } from '../components'


const EpisodesPage: NextPage = () => {
    const name = 'episodes';

    return (
      <EpisodeContainer text={name}/>
    );
};


export default EpisodesPage;
