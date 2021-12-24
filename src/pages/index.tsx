import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from 'axios'
import type { InfoData } from '../types/info'


const FuturamaIndexPage: NextPage = () => {
  const url = 'https://api.sampleapis.com/futurama/info';
  
  
  const fetchers = (url: string) => axios.get(url).then((res) => res.data);
  
  const { data, error } = useSWR(url, fetchers)


  if (error) return <div>error has occurred.</div>
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((info: InfoData) => {
        return (
          <div key={`futurama-info-${info.synopsis}`}>
            {info.synopsis}
          </div>
        )
      })}
    </div>

  )
}

export default FuturamaIndexPage
