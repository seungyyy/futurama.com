import styled from '@emotion/styled';
import { useState } from 'react';
import { Error, Loading } from '..';
import { InventoryCard } from './inventoryCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Inventory } from '../../types/inventory';
import { theme } from '../../constants/theme';
import { seletedInventoryList, inventoryName } from '../../data/inventoryData';
interface InventoryContainerProps { 
  text: string;
}

export const InventoryContainer = ({ text }: InventoryContainerProps) => { 
  const { data, error } = useFuturamaData(text);
  const [list, setList] = useState<string>('all');
  const [isOff, setIsOff] = useState<boolean>(true);

  if (error) return <Error />;
  if (!data) return <Loading />;


  const handleClickSeleted = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsOff(!isOff);

    return inventoryCategoryChange((event.target as HTMLLIElement).textContent);
  };
  
  const inventoryCategoryChange = (inventoryText: string | null) => { 
    if (typeof (inventoryText) === 'string') { 
      return setList(inventoryName[inventoryText]);
    }
  };

  return (
    <Section1>
      <Category>Inventory</Category>
      <ul onClick={handleClickSeleted} className={'seleted' + `${isOff === true ? '' : ' active'}`}>
        {isOff &&
          seletedInventoryList.map((item) => {
            if (item.category === list) {
              return <li key={item.id}>{item.category}</li>;
            }
          })}
        {!isOff &&
          seletedInventoryList.map((item) => {
            return <li key={item.id}>{item.category}</li>;
          })}
      </ul>

      <Article>
        {data.map((inventoryData: Inventory, index: any) => {
          if (data[index].category === list) {
            return (
              <InventoryCard
                key={`${text}-list-${inventoryData.id}`}
                inventoryData={inventoryData}
              />
            );
          } else if (list === 'all') {
            return (
              <InventoryCard
                key={`${text}-list-${inventoryData.id}`}
                inventoryData={inventoryData}
              />
            );
          }
        })}
      </Article>
    </Section1>
  );
}

const Section1 = styled.section`
  position: relative;
  ${theme.common.section};
  .seleted {
    ${theme.common.seletedList}
  }
  .seleted.active {
    padding: 0 25px 10px 10px;
    box-sizing: border-box;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin-top: 9rem;
  }
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
