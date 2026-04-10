export interface SubColumn {
  title: string;
  items: string[];
}

export interface MenuItem {
  title: string;
  type: 'dropdown' | 'megamenu' | 'link';
  items?: string[];
  columns?: SubColumn[];
  path?: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    title: 'Gold',
    type: 'dropdown',
    items: ['Rings', 'Chains', 'Necklaces', 'Bangles']
  },
  {
    title: 'Silver',
    type: 'dropdown',
    items: ['Anklets', 'Bangles', 'Idols', 'Rings']
  },
  {
    title: 'Platinum',
    type: 'dropdown',
    items: ['Bands', 'Chains']
  },
  {
    title: 'Diamond',
    type: 'dropdown',
    items: ['Rings', 'Pendants', 'Earrings']
  },
  {
    title: 'About',
    type: 'link',
    path: '/about'
  }
];
