import type { NextPage } from 'next'
import axios from 'axios';
import useSWR from 'swr';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);


const FuturamaIndexPage: NextPage = () => {
  const {data} = useSWR('https://api.sampleapis.com/futurama/cast'); 


  return (
    <div>
     
    </div>

  )
}

export default FuturamaIndexPage
