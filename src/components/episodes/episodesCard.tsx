import { Episodes } from '../../types/episodes';
import styled from '@emotion/styled/';
import { theme } from '../../constants/theme';

interface EpisodeProps {
  episodesData: Episodes;
}

export const EpisodeCard = ({ episodesData }: EpisodeProps) => {
  const { number, title, writers, originalAirDate, desc } = episodesData;

  return (
    <Container>
      <h3>{title}</h3>
      <p>{number}</p>
      <p>{originalAirDate}</p>
      <p className="ep-desc">{desc}</p>
      <p>{writers}</p>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  ${theme.common.containerShadow}
  &:hover {
    background-color: ${theme.colors.middleGrey};
  }
  .ep-desc {
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;