import type { NextPage } from 'next';
import { CharactersContainer } from '../components';

const CharactersPage: NextPage = () => {
  const name = 'characters';

  return (
    <div>
      <CharactersContainer text={name} />
    </div>
  );
};

export default CharactersPage;
