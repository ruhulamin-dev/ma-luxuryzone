const shirts = [
  {
    id: 1,
    name: 'Full Sleeve Shirt',
    images: ['/shirt1-img1.jpg', '/shirt1-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳8,00' },
      { label: 'L', price: '৳8,00' },
      { label: 'XL', price: '৳8,00' },
    ],
  },
  {
    id: 2,
    name: 'Full Sleeve Shirt',
    images: ['/shirt2-img1.jpg', '/shirt2-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳8,00' },
      { label: 'L', price: '৳8,00' },
      { label: 'XL', price: '৳8,00' },
    ],
  },
  {
    id: 3,
    name: 'Full Sleeve Shirt',
    images: ['/shirt3-img1.jpg', '/shirt3-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳8,00' },
      { label: 'L', price: '৳8,00' },
      { label: 'XL', price: '৳8,00' },
    ],
  },
  {
    id: 4,
    name: 'Full Sleeve Solid Colour (Baby pink) Shirt',
    images: ['/shirt4-img1.jpg', '/shirt4-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳7,50' },
      { label: 'L', price: '৳7,50' },
      { label: 'XL', price: '৳7,50' },
    ],
  },
  {
    id: 5,
    name: 'Full Sleeve Solid Solour (White) Shirt',
    images: ['/shirt5-img1.jpg', '/shirt5-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳7,50' },
      { label: 'L', price: '৳7,50' },
      { label: 'XL', price: '৳7,50' },
    ],
  },
  {
    id: 6,
    name: 'Full Sleeve Solid Colour (Black) Shirt',
    images: ['/shirt6-img1.jpg', '/shirt6-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳7,50' },
      { label: 'L', price: '৳7,50' },
      { label: 'XL', price: '৳7,50' },
    ],
  },
  {
    id: 7,
    name: 'Half Sleeve T-shirt',
    images: ['/shirt7-img1.jpg', '/shirt7-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳4,50' },
      { label: 'L', price: '৳4,50' },
      { label: 'XL', price: '৳4,50' },
    ],
  },
  {
    id: 8,
    name: 'Drop Shoulder T-shirt',
    images: ['/shirt8-img1.jpg', '/shirt8-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳5,00' },
      { label: 'L', price: '৳5,00' },
      { label: 'XL', price: '৳5,00' },
    ],
  },
  {
    id: 9,
    name: 'Half Sleeve T-shirt',
    images: ['/shirt9-img1.jpg', '/shirt9-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳4,50' },
      { label: 'L', price: '৳4,50' },
      { label: 'XL', price: '৳4,50' },
    ],
  },
  {
    id: 10,
    name: 'Half Sleeve T-shirt',
    images: ['/shirt10-img1.jpg', '/shirt10-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳4,50' },
      { label: 'L', price: '৳4,50' },
      { label: 'XL', price: '৳4,50' },
    ],
  },
  {
    id: 11,
    name: 'Polo T-shirt',
    images: ['/shirt11-img1.jpg', '/shirt11-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳5,50' },
      { label: 'L', price: '৳5,50' },
      { label: 'XL', price: '৳5,50' },
    ],
  },
  {
    id: 12,
    name: 'Polo T-shirt',
    images: ['/shirt12-img1.jpg', '/shirt12-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳6,50' },
      { label: 'L', price: '৳6,50' },
      { label: 'XL', price: '৳6,50' },
    ],
  },
  {
    id: 13,
    name: 'Black Polo (Ralph Lauren)',
    images: ['/shirt13-img1.jpg', '/shirt13-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳6,50' },
      { label: 'L', price: '৳6,50' },
      { label: 'XL', price: '৳6,50' },
    ],
  },
  {
    id: 14,
    name: 'Navy Blue Polo (Ralph Lauren)',
    images: ['/shirt14-img1.jpg', '/shirt14-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳6,50' },
      { label: 'L', price: '৳6,50' },
      { label: 'XL', price: '৳6,50' },
    ],
  },
  {
    id: 15,
    name: 'LV Drop Shoulder',
    images: ['/shirt15-img1.jpg', '/shirt15-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳8,00' },
      { label: 'L', price: '৳8,00' },
      { label: 'XL', price: '৳8,00' },
    ],
  },
  {
    id: 16,
    name: 'Polo T-shirt (Ralph Lauren)',
    images: ['/shirt16-img1.jpg', '/shirt16-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳6,50' },
      { label: 'L', price: '৳6,50' },
      { label: 'XL', price: '৳6,50' },
    ],
  },
  {
    id: 17,
    name: 'Navy Blue Polo (Ralph Lauren)',
    images: ['/shirt17-img1.jpg', '/shirt17-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳6,50' },
      { label: 'L', price: '৳6,50' },
      { label: 'XL', price: '৳6,50' },
    ],
  },
  {
    id: 18,
    name: 'Dior black Drop Shoulder',
    images: ['/shirt18-img1.jpg', '/shirt18-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳7,50' },
      { label: 'L', price: '৳7,50' },
      { label: 'XL', price: '৳7,50' },
    ],
  },
  {
    id: 19,
    name: 'Dior White Drop Shoulder',
    images: ['/shirt19-img1.jpg', '/shirt19-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳7,50' },
      { label: 'L', price: '৳7,50' },
      { label: 'XL', price: '৳7,50' },
    ],
  },
  {
    id: 20,
    name: 'LV Drop Shoulder',
    images: ['/shirt20-img1.jpg', '/shirt20-img2.jpg'],
    sizes: [
      { label: 'M', price: '৳8,00' },
      { label: 'L', price: '৳8,00' },
      { label: 'XL', price: '৳8,00' },
    ],
  },
];

export default shirts;
