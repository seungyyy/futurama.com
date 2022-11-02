import styled from '@emotion/styled';
import { Error, Loading } from '..';
import { EpisodeCard } from './episodesCard';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Episodes } from '../../types/episodes';
import { useState } from 'react';
import { theme } from '../../constants/theme';
import { seletedEpisodeList, episodeName } from '../../data/episodeData';
interface EpisodeContainerProps {
  text: string;
}

export const EpisodeContainer = ({ text }: EpisodeContainerProps) => {
  const { data, error } = useFuturamaData(text);
  const [list, setList] = useState<number>(1);
  const [isOff, setIsOff] = useState<boolean>(true);

  if (error) return <Error />;
  if (!data) return <Loading />;


  const handleClickSeleted = (event: React.MouseEvent<HTMLElement>) => {
    setIsOff(!isOff);

    return episodeCategoryChange((event.target as HTMLElement).textContent);
  };

  const episodeCategoryChange = (episodeText: string | null) => {
    if (typeof episodeText === 'string') {
      setList(episodeName[episodeText]);
    }
  };

  return (
    <Section1>
      <Category>Episodes</Category>
      <ul
        onClick={handleClickSeleted}
        className={'seleted' + `${isOff === true ? '' : ' active'}`}
      >
        {isOff &&
          seletedEpisodeList.map((item) => {
            if (item.id === list) {
              return <li key={item.id}>{item.title}</li>;
            }
          })}
        {!isOff &&
          seletedEpisodeList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
      <Article>
        {list === 1 &&
          data.map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 2 &&
          data.slice(0, 13).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 3 &&
          data.slice(13, 32).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 4 &&
          data.slice(32, 55).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 5 &&
          data.slice(55, 72).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 6 &&
          data.slice(72, 76).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 7 &&
          data.slice(76, 102).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
        {list === 8 &&
          data.slice(102).map((episodesData: Episodes) => {
            return (
              <EpisodeCard key={`${text}-list-${episodesData.id}`} episodesData={episodesData} />
            );
          })}
      </Article>
    </Section1>
  );
}

const Section1 = styled.section`
  position: relative;
  ${theme.common.section}
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
  ${theme.common.category}
`;

const Article = styled.section`
    display: grid;
    gap: 3em;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) { 
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    } 
`;
