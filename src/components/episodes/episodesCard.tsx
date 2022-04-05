import { Episodes } from '../../types/episodes';
import styled from '@emotion/styled/';

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
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  &:hover {
    background-color: #b5b8b0;
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