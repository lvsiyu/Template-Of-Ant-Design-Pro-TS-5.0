export type CardTableDataType = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  progress: number;
  status: string;
};

export type CardTableDataParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};
