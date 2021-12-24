export interface InfoData {
    synopsis: string;
    yearsAired: number;
    creators: [
      {
        name: string,
        url: string
      }
    ],
    id: number
}