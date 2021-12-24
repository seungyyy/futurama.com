import styled from '@emotion/styled';
import { Error, Loading } from '.';
import { MEDIA_QUERY_END_POINT } from '../constants';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/cast';

interface CastContainerProps {
    castData: Cast
}

export const CastContainer = ({ castData }: CastContainerProps) => {
    const { data, error } = useFuturamaData('cast');
    const { name, born, bio } = castData;

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <CastTitle>Cast</CastTitle>
            <CastCardContainer>
                {data.map((castData: Cast) => {
                    return (
                        <Container key={`fututama-cast-${castData.id}`}>
                            <h3>{name}</h3>
                            <p>{born}</p>
                            <p>{bio.url}</p>
                            <p>{bio.text}</p>
                        </Container>
                    );
                })}
            </CastCardContainer>
        </div>
    );
};

const CastTitle = styled.h1`
    font-size: 1.5em;
    line-height: 180%;
    border-bottom: 1px solid #eee;
`;

const CastCardContainer = styled.main`
    display: grid;
    gap: 1em;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1em;
`;