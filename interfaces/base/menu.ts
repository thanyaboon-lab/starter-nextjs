export interface Menu {
  menuId: string;
  menuTitle: string;
  menuName: string;
  url: string
  children?: Menu[];
}