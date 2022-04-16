import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { InventoryCard } from './inventoryCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Inventory } from '../../types/inventory';
import { theme } from '../../constants/theme';

interface InventoryContainerProps { 
  text: string;
}

export const InventoryContainer = ({ text }: InventoryContainerProps) => { 
  const { data, error } = useFuturamaData(text);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Section1>
      <Category>Inventory</Category>
      <Article>
        {data.map((inventoryData: Inventory) => {
          return (
          <InventoryCard key={`${text}-list-${inventoryData.id}`} inventoryData={inventoryData} 
          />
          );
        })}
      </Article>
    </Section1>
  );
}

const Section1 = styled.section`
  ${theme.common.section};
`;

const Category = styled.p`
  ${theme.common.category};
`;

const Article = styled.section`
  display: grid;
  gap: 3em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
