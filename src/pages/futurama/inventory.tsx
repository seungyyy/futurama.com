import type { NextPage } from 'next';
import { Error, Loading } from '../../components';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Inventory } from '../../types/inventory';


const InventoryPage: NextPage = () => {
    const title = 'inventory';
    const { data, error } = useFuturamaData(title);
    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <h1>{title}</h1>
            {data.map((inventoryData: Inventory) => {
                const { title, category, description, slogan, price } = inventoryData;
                return (
                    <div key={`fututama-${title}-${inventoryData.id}`}>
                        <h3>title {title}</h3>
                        <br></br>
                        <p>category {category}</p>
                        <br></br>
                        <p>description {description}</p>
                        <br></br>
                        <p>slogan {slogan}</p>
                        <br></br>
                        <p>price {price}</p>
                    </div>
                );
            })}
        </div>
    );
};




export default InventoryPage;
