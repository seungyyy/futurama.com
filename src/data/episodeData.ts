export const seletedEpisodeList = [
  {
    id: 1,
    title: 'all',
  },
  {
    id: 2,
    title: 'Episode 1',
  },
  {
    id: 3,
    title: 'Episode 2',
  },
  {
    id: 4,
    title: 'Episode 3',
  },
  {
    id: 5,
    title: 'Episode 4',
  },
  {
    id: 6,
    title: 'Episode 5',
  },
  {
    id: 7,
    title: 'Episode 6',
  },
  {
    id: 8,
    title: 'Episode 7',
  },
];

interface EpisodeFilterNum {
  [key: string]: number;
};

export const episodeName: EpisodeFilterNum = {
  'all': 1,
  'Episode 1': 2,
  'Episode 2': 3,
  'Episode 3': 4,
  'Episode 4': 5,
  'Episode 5': 6,
  'Episode 6': 7,
  'Episode 7': 8,
};