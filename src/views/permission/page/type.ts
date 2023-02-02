export type Meta = {
  icon: string;
  rank: number;
  roles: Array<string>;
  auths?: Array<string>;
  title: string;
};
export interface Menu {
  id: number;
  path: string;
  parentKey?: string;
  name: string;
  key?: string;
  component: string;
  icon?: string;
  title?: string;
  meta?: Meta;
  rank?: number;
  showLink?: boolean;
  keepAlive?: boolean;
  hasChildren?: boolean;
  children?: Menu[];
}
