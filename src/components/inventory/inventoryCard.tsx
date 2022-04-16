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
      <div className="tit-box">
        <h3 className="tit">{title}</h3>
        <p className="category">{category}</p>
      </div>
      {slogan && <p>&ldquo;{slogan}&rdquo;</p>}
      <p>{description}</p>
      <p>price $ {price}</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  ${theme.common.containerShadow}
  &:hover {
    background-color: ${theme.colors.lightGrey};
  }
  .tit-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .tit {
      font-weight: regular;
    }
    .category {
      margin-left: 15px;
      font-size: .8rem;
    }
  }
`;