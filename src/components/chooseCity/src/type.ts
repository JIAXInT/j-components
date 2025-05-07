export interface ICity {
  id: number;
  name: string;
  //   拼音
  spell: string;
}

export interface IProvince {
  name: string;
  data: string[];
  id?: string;
}
