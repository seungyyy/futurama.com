import type { NextPage } from 'next';
import { InventoryContainer } from '../components';


const InventoryPage: NextPage = () => {
    const name = 'inventory';
    return (
      <InventoryContainer text={name}/>
    );
};

export default InventoryPage;
