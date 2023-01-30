export type Meta = {
  icon: string;
  rank: number;
  roles: Array<string>;
  auths?: Array<string>;
  title: string;
};
export interface Menu {
  path: string;
  parentKey?: string;
  name: string;
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
