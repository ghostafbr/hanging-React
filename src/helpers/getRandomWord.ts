const words = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'ice cream',
  'jelly',
  'kiwi',
  'lemon',
  'mango',
  'nectarine',
  'orange',
  'pear',
  'quince',
  'raspberry',
  'strawberry',
  'tomato',
  'ugli fruit',
  'vanilla',
  'watermelon',
  'xigua',
  'yam',
  'zucchini',
];

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}
