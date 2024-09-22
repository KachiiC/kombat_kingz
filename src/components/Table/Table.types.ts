export interface ITableColumn {
  label: string;
  key: string;
}

export interface ITable {
  columns: ITableColumn[];
  data: any[];
  defaultSort?: string;
  searchPlaceHolder?: string;
}
