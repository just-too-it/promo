export interface MenuItemProps {
  id: number;
  label: string;
  href: string;
}

export interface MenuProps {
  menu: MenuItemProps[];
  className?: string;
  isHeader?: boolean;
  setIsModalOpen?: (x:boolean)=>void;
}
