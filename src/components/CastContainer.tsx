import styled from '@emotion/styled';
import { Error, Loading, CastCard } from '.';
import { MEDIA_QUERY_END_POINT } from '../constants';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/cast';

interface CastContainerProps {
  name: string;
}

export const CastContainer = ({ name }: CastContainerProps) => {
    const { data, error } = useFuturamaData(name);

    if (error) return <Error />;
    if (!data) return <Loading />;

    return (
        <div>
            <CastTitle>{name}</CastTitle>
            <CastCardContainer>
                {data.map((castData: Cast) => {
                    return (
                        <CastCard
                            key={`${name}-${castData.id}`}
                            castData={castData}
                        />
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