import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Categories', icon: 'LayoutGrid' },
  { id: 'smartphones', name: 'Smartphones', icon: 'Smartphone' },
  { id: 'laptops', name: 'Laptops & Computers', icon: 'Laptop' },
  { id: 'audio', name: 'Audio & Headphones', icon: 'Headphones' },
  { id: 'cameras', name: 'Cameras & Video', icon: 'Camera' },
  { id: 'gaming', name: 'Gaming Consoles', icon: 'Gamepad2' },
  { id: 'accessories', name: 'Accessories', icon: 'Cable' },
];

const LOREM_DESC = "Experience the pinnacle of technology with this premium device. Designed for professionals and enthusiasts alike, it features state-of-the-art components, a sleek ergonomic design, and durability that lasts. Whether you are working, gaming, or creating content, this product delivers exceptional performance and reliability. Includes a 1-year manufacturer warranty and premium support.";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Smartphone 14 Pro Max 256GB Gold',
    price: 1099.00,
    oldPrice: 1199.00,
    category: 'smartphones',
    rating: 5,
    image: 'https://picsum.photos/id/1/800/800',
    isNew: true,
    discount: 8,
    sku: 'SP-14-MAX-GLD',
    stock: 15,
    description: "The ultimate smartphone experience. Featuring the dynamic island, a 48MP main camera, and the A16 Bionic chip. The Super Retina XDR display is up to 2x brighter outdoors. All-day battery life and up to 29 hours of video playback."
  },
  {
    id: 2,
    title: 'Ultra Slim Laptop 15" Core i7',
    price: 1299.00,
    category: 'laptops',
    rating: 4,
    image: 'https://picsum.photos/id/2/800/800',
    sku: 'LT-SLIM-15-I7',
    stock: 8,
    description: "Power through your day with the Ultra Slim Laptop. Powered by the latest Intel Core i7 processor and featuring a stunning 15-inch 4K display, this laptop combines performance and portability in a sleek aluminum chassis."
  },
  {
    id: 3,
    title: 'Wireless Noise Cancelling Headphones',
    price: 249.00,
    oldPrice: 299.00,
    category: 'audio',
    rating: 5,
    image: 'https://picsum.photos/id/3/800/800',
    discount: 17,
    sku: 'HD-NC-WL-01',
    stock: 42,
    description: "Immerse yourself in music with industry-leading noise cancellation. Features up to 30 hours of battery life, quick charging, and touch controls. The comfortable earcups are designed for long listening sessions."
  },
  {
    id: 4,
    title: '4K Action Camera Waterproof',
    price: 399.00,
    category: 'cameras',
    rating: 4,
    image: 'https://picsum.photos/id/4/800/800',
    sku: 'CAM-ACT-4K-WP',
    stock: 20,
    description: "Capture your adventures in stunning 4K resolution. This rugged, waterproof camera features hypersmooth stabilization, voice control, and live streaming capabilities. Perfect for surfing, skiing, or hiking."
  },
  {
    id: 5,
    title: 'Gaming Console X-Series 1TB',
    price: 499.00,
    category: 'gaming',
    rating: 5,
    image: 'https://picsum.photos/id/5/800/800',
    isNew: true,
    sku: 'GM-CON-X-1TB',
    stock: 5,
    description: "Experience next-gen gaming with 12 teraflops of processing power, 4K gaming at up to 120fps, and 1TB of custom SSD storage. Includes one wireless controller and high-speed HDMI cable."
  },
  {
    id: 6,
    title: 'Smart Watch Series 8 Midnight',
    price: 399.00,
    oldPrice: 450.00,
    category: 'accessories',
    rating: 4,
    image: 'https://picsum.photos/id/6/800/800',
    discount: 11,
    sku: 'SW-S8-MID',
    stock: 25,
    description: "Advanced health sensors and apps to measure heart rate and blood oxygen. Features crash detection, sleep tracking, and a durable crack-resistant front crystal. Water resistant up to 50 meters."
  },
  {
    id: 7,
    title: 'Professional DSLR Camera Body',
    price: 1899.00,
    category: 'cameras',
    rating: 5,
    image: 'https://picsum.photos/id/7/800/800',
    sku: 'CAM-DSLR-PRO',
    stock: 3,
    description: LOREM_DESC
  },
  {
    id: 8,
    title: 'Bluetooth Portable Speaker',
    price: 79.00,
    oldPrice: 99.00,
    category: 'audio',
    rating: 4,
    image: 'https://picsum.photos/id/8/800/800',
    discount: 20,
    sku: 'SPK-BT-PRT',
    stock: 100,
    description: "Big sound in a small package. This portable Bluetooth speaker delivers crisp audio and powerful bass. Waterproof and dustproof design makes it perfect for outdoor use. 12 hours of playtime."
  },
  {
    id: 9,
    title: 'Mechanical Gaming Keyboard RGB',
    price: 129.00,
    category: 'accessories',
    rating: 5,
    image: 'https://picsum.photos/id/9/800/800',
    sku: 'KB-MECH-RGB',
    stock: 18,
    description: "Dominate the competition with lightning-fast actuation. Features per-key RGB lighting, aircraft-grade aluminum frame, and detachable wrist rest. Programmable macros and dedicated media controls."
  },
  {
    id: 10,
    title: 'Wireless Gaming Mouse 25K DPI',
    price: 89.00,
    category: 'accessories',
    rating: 4,
    image: 'https://picsum.photos/id/10/800/800',
    sku: 'MS-WL-25K',
    stock: 30,
    description: LOREM_DESC
  },
  {
    id: 11,
    title: 'Tablet Pro 11-inch 128GB Space Gray',
    price: 799.00,
    category: 'laptops',
    rating: 5,
    image: 'https://picsum.photos/id/11/800/800',
    sku: 'TB-PRO-11-GRY',
    stock: 12,
    description: "The ultimate iPad experience. Now with M2 chip, next-level Apple Pencil hover experience, and Wi-Fi 6E. Liquid Retina display features ProMotion, True Tone, and P3 wide color."
  },
  {
    id: 12,
    title: 'Smartphone 13 Mini 128GB Blue',
    price: 699.00,
    oldPrice: 729.00,
    category: 'smartphones',
    rating: 4,
    image: 'https://picsum.photos/id/12/800/800',
    discount: 4,
    sku: 'SP-13-MINI-BLU',
    stock: 9,
    description: "Super bright, super colorful, super sharp. Features a ceramic shield front, A15 Bionic chip, and 5G speed. Dual-camera system for wide and ultra-wide photos."
  }
];