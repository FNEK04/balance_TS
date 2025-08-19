import { MenuItem } from '../types';

export const mockMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Американо',
    price: 150,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop',
    category: 'coffee',
    description: 'Классический кофе с горячей водой',
    customizable: true,
    options: {
      syrup: ['Без сиропа', 'Ваниль', 'Карамель', 'Лесной орех'],
      milk: ['Без молока', 'Обычное', 'Миндальное', 'Овсяное', 'Кокосовое'],
      size: ['S (250мл)', 'M (350мл)', 'L (450мл)']
    }
  },
  {
    id: 2,
    name: 'Капучино',
    price: 180,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop',
    category: 'coffee',
    description: 'Эспрессо с молочной пеной',
    customizable: true,
    options: {
      syrup: ['Без сиропа', 'Ваниль', 'Карамель', 'Лесной орех', 'Корица'],
      milk: ['Обычное', 'Миндальное', 'Овсяное', 'Кокосовое', 'Безлактозное'],
      size: ['S (250мл)', 'M (350мл)', 'L (450мл)']
    }
  },
  {
    id: 3,
    name: 'Латте',
    price: 200,
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=300&fit=crop',
    category: 'coffee',
    description: 'Эспрессо с молоком и легкой пеной',
    customizable: true,
    options: {
      syrup: ['Без сиропа', 'Ваниль', 'Карамель', 'Лесной орех', 'Лаванда'],
      milk: ['Обычное', 'Миндальное', 'Овсяное', 'Кокосовое', 'Безлактозное'],
      size: ['S (250мл)', 'M (350мл)', 'L (450мл)']
    }
  },
  {
    id: 4,
    name: 'Эспрессо',
    price: 100,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop',
    category: 'coffee',
    description: 'Крепкий черный кофе',
    customizable: false
  },
  {
    id: 5,
    name: 'Круассан',
    price: 120,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f636c1c?w=300&h=300&fit=crop',
    category: 'food',
    description: 'Свежий французский круассан',
    customizable: false
  },
  {
    id: 6,
    name: 'Чизкейк',
    price: 250,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=300&h=300&fit=crop',
    category: 'dessert',
    description: 'Нежный чизкейк с ягодами',
    customizable: false
  }
];

export const cities: string[] = ['Нальчик', 'Владикавказ', 'Ставрополь', 'Ростов-на-Дону', 'Самара', 'Сочи'];
