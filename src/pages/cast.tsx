import type { NextPage } from 'next';
import { CastContainer } from '../components';

const CastPage: NextPage = () => {
  const name = 'cast';
  return (
    <div>
        <CastContainer text={name} />
    </div>
  );
};


export default CastPage;
