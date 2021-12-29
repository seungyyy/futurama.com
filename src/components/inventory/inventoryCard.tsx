import { Inventory } from '../../types/inventory';
import styled from '@emotion/styled/';

interface InventoryProps {
  inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
  const { title, category, description, slogan, price } = inventoryData;
  
  return (
    <Container>
      <h3>title {title}</h3>
      <br></br>
      <p>category {category}</p>
      <br></br>
      <p>description {description}</p>
      <br></br>
      <p>slogan {slogan}</p>
      <br></br>
      <p>price {price}</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
        rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  &:hover {
    background-color: #b5b8b0;
    }
`;