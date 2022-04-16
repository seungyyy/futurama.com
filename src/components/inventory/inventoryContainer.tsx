import styled from '@emotion/styled';
import { useState } from 'react';
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
  const [list, setList] = useState('all');
  const [isOff, setIsOff] = useState(true);

  if (error) return <Error />;
  if (!data) return <Loading />;


  const handleClickSeleted = (event: React.MouseEvent<HTMLElement>) => {
    setIsOff(!isOff);
    switch ((event.target as any).textContent) {
      case 'Pest Control':
        setList('Pest Control');
        break;
      case 'Misc':
        setList('Misc');
        break;
      case 'Food':
        setList('Food');
        break;
      case 'Publications':
        setList('Publications');
        break;
      case 'Toys':
        setList('Toys');
        break;
      case 'Health':
        setList('Health');
        break;
      case 'Clothing':
        setList('Clothing');
        break;
      case 'all':
        setList('all');
        break;
      default:
        setList('all');
    }
  };

  const seletedList = [
    {
      id: 0,
      category: 'all',
    },
    {
      id: 1,
      category: 'Pest Control',
    },
    {
      id: 2,
      category: 'Misc',
    },
    {
      id: 3,
      category: 'Food',
    },
    {
      id: 4,
      category: 'Publications',
    },
    {
      id: 5,
      category: 'Toys',
    },
    {
      id: 6,
      category: 'Health',
    },
    {
      id: 7,
      category: 'Clothing',
    },
  ];
  
  return (
    <Section1>
      <Category>Inventory</Category>
      <ul onClick={handleClickSeleted} className={'seleted' + `${isOff === true ? '' : ' active'}`}>
        {isOff &&
          seletedList.map((item) => {
            if (item.category === list) {
              return <li key={item.id}>{item.category}</li>;
            }
          })}
        {!isOff &&
          seletedList.map((item) => {
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
