import type { NextPage } from 'next';
import { CastContainer } from '../components/castContainer';

const CastPage: NextPage = () => {
  const name = 'cast';
  return <CastContainer name={name}/>;
};


export default CastPage;
