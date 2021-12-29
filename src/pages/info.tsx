import type { NextPage } from 'next';
import { InfoContainer } from '../components';

const InfoPage: NextPage = () => {
  const name = 'info';

  return (
    <InfoContainer text={name}/>
  );
}

export default InfoPage;
