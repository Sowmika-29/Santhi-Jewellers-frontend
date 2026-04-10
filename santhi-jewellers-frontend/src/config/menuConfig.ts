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
    items: ['Rings', 'Chains', 'Necklaces', 'Bangles', 'Earrings', 'Pendants', 'Bridal Sets', 'Customized Jewelry']
  },
  {
    title: 'Silver',
    type: 'dropdown',
    items: ['Rings', 'Chains', 'Anklets', 'Bracelets', 'Earrings', 'Silver Articles']
  },
  {
    title: 'Platinum',
    type: 'dropdown',
    items: ['Rings', 'Couple Rings', 'Chains', 'Bracelets', 'Pendants']
  },
  {
    title: 'Diamond',
    type: 'dropdown',
    items: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Bridal Sets']
  },
  {
    title: 'About',
    type: 'link',
    path: '/about'
  }
];
