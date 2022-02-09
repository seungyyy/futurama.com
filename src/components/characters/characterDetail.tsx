import styled from '@emotion/styled/';
import { useRouter } from 'next/router';
import { Error, Loading } from '..';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import Link from 'next/link';
import Image from 'next/image';
import backBtn from '../../../public/image/icon-arrow-left.png';


export const CharacterDetail = () => {
  const path = 'characters';
  const router = useRouter();
  const { pid } = router.query;
  console.log(path);
  const { data, error } = useFuturamaData(path, pid);

  if (!data) return <Loading />;
  if (error) return <Error />;

  const { age, gender, homePlanet, sayings, name, images } = data;

  return (
    <Container>
      <Detail>
        <div className="img-box">
          <img src={images.main} alt="캐릭터이미지" />
        </div>
        <NameTxt>
          {name.first}
          {name.middle}
          {name.last}
          <div className="genderBox">
            {gender == 'Male' ? <Male>Male</Male> : <Female>Female</Female>}
          </div>
          <span className="info-age">age: {age}</span>
          <span className="info-planet">homePlanet: {homePlanet}</span>
          <DetailInfo>
            {sayings.slice(0, 6).map((el: any, index: any) => {
              return <div key={index}>"{el.split()}"</div>;
            })}
          </DetailInfo>
        </NameTxt>
        <Link href="/characters" passHref>
          <a className="back-link">
            <Image src={backBtn} alt="뒤로가기버튼" />
          </a>
        </Link>
      </Detail>
    </Container>
  );
};

const Container = styled.article`
  width: 80%;
  margin: 0 auto;
  padding: 25px 0;
`;

const Detail = styled.div`
  position: relative;
  display: flex;
  background-color: #fcfff6;
  border-radius: 6px;
  padding: 2rem 0;
  box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  .back-link {
    position: absolute;
    top: 20px;
    left: 14px;
    width: 30px;
  }
  .img-box {
    width: 50%;
    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    display: block;
    .img-box {
    width: 70%;
    margin: 0 auto;
  }
}
`;

const NameTxt = styled.div`
  font-size: 2em;
  letter-spacing: 0.5px;
  padding: 1em 1.5em;
  .genderBox {
    border-radius: 10px;
    display: inline-block;
  }
  .info-age {
    margin: 0 15px;
    font-size: 0.7em;
  }
  .info-planet {
    font-size: 0.7em;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    margin-top: 2em;
    text-align: center;
    font-size: 1.7em;
  }
  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 1em;
    font-size: 1.2em;
    .info-planet {
      display: block;
    }
  }
`;

const Male = styled.span`
  margin-left: 0.7em;
  color: #00e6c7;
  font-size: 0.6em;
`;

const Female = styled.span`
  margin-left: 0.7em;
  color: pink;
  font-size: 0.6em;
  `;

const DetailInfo = styled.div`
  margin-top: 1em;
  font-size: 0.8em;
  line-height: 1.6;
`;