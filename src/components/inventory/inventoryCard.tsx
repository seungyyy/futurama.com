import { Inventory } from '../../types/inventory';
import styled from '@emotion/styled/';
import { theme } from '../../constants/theme'

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
  ${theme.common.containerShadow}
  &:hover {
    background-color: ${theme.colors.lightGrey};
  }
`;