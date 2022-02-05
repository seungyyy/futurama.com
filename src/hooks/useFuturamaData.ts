import useSWR from 'swr';
import { fetcher } from  '../utils/fetcher';
import { FUTURAMA_API_ENDPOINT } from '../constants';

export const useFuturamaData = (path: string, pid?: string | string[] | undefined) => {
  if (pid) path += `/${pid}`;
  return useSWR(`${FUTURAMA_API_ENDPOINT}${path}`, fetcher);
};