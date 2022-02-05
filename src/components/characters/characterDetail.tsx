import styled from '@emotion/styled/';
import { useRouter } from 'next/router';
import { Error, Loading } from '..';
import { useFuturamaData } from '../../hooks/useFuturamaData';


export const CharacterDetail = () => {
  const path = 'characters';
  const router = useRouter();
  const { pid } = router.query;
  console.log(path);
  const { data, error } = useFuturamaData(path, pid);

  if (!data) return <Loading />;
  if (error) return <Error />;


  const { age, gender, homePlanet, sayings, name, images } = data;

  console.log(age);
  console.log(gender);
  console.log(name);
  return (
    <>
      <div style={{ color: "red" }}>{age}</div>
      <div style={{color: "red"}}>sadjlksajlsadkajljdklsajlsadsa</div>
      <div style={{color: "red"}}>sadjlksajlsadkajljdklsajlsadsa</div>
      <div style={{color: "red"}}>sadjlksajlsadkajljdklsajlsadsa</div>
      <div style={{color: "red"}}>sadjlksajlsadkajljdklsajlsadsa</div>
      <div style={{color: "red"}}>sadjlksajlsadkajljdklsajlsadsa</div>
    </>
  );
};


