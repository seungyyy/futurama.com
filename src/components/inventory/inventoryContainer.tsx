import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { InventoryCard } from './inventoryCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Inventory } from '../../types/inventory';

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

const Category = styled.p`
  color: #236e2d;
  font-size: 37px;
  border-bottom: 1px solid #236e2d;
`;

const Section1 = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 25px 0;
`;

const Article = styled.section`
  display: grid;
  gap: 3em;
  text-align: center;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
