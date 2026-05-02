export type ToyColor = 'pink' | 'green' | 'purple' | 'yellow' | 'blue' | 'peach';

export interface Toy {
  id: string;
  name: string;
  emoji: string;
  color: ToyColor;
  pixelArt: string[][];
  tasks: string[];
  description: string;
}

export const toyColors: Record<ToyColor, { bg: string; border: string; shadow: string; light: string }> = {
  pink:   { bg: '#F4B8C4', border: '#E48898', shadow: '#D0687A', light: '#FDDDE6' },
  green:  { bg: '#B8DDB8', border: '#88BB88', shadow: '#5A9A5A', light: '#D8F0D8' },
  purple: { bg: '#C8B0D8', border: '#A080B8', shadow: '#7050A0', light: '#E0D0F0' },
  yellow: { bg: '#F8E090', border: '#D0B040', shadow: '#A08020', light: '#FFF2C0' },
  blue:   { bg: '#A8CCE8', border: '#6098C8', shadow: '#3070A8', light: '#C8E4F8' },
  peach:  { bg: '#F0C8A0', border: '#D09860', shadow: '#A06830', light: '#F8E0C0' },
};

export const toys: Toy[] = [
  {
    id: 'bunny',
    name: 'Bunny',
    emoji: '',
    color: 'pink',
    description: 'A sweet fluffy bunny who loves quiet focus time.',
    pixelArt: [
      ['_','W','_','_','W','_'],
      ['_','W','W','W','W','_'],
      ['W','e','W','W','e','W'],
      ['W','W','n','W','W','W'],
      ['_','W','W','W','W','_'],
      ['_','W','_','_','W','_'],
    ],
    tasks: [
      'Spend 25 minutes learning and practicing five new keyboard shortcuts for your IDE or terminal to speed up ypur workflow',
      'Write a 500-word essay',
      'Spend one focus session entirely away from screens. Use a notebook to brainstorm, sketch or outline',
      'Read for 20 minutes without interruption',
      'Take a standard fact-based article and brainstorm three ways to turn it into a game',
    ]
  },
  {
    id: 'chick',
    name: 'Chick',
    emoji: '',
    color: 'yellow',
    description: 'A cheerful baby chick who chirps encouragement!',
    pixelArt: [
      ['_','Y','Y','Y','_','_'],
      ['Y','Y','Y','Y','Y','_'],
      ['Y','e','Y','e','Y','o'],
      ['Y','Y','b','Y','Y','_'],
      ['_','Y','Y','Y','_','_'],
      ['_','o','_','o','_','_'],
    ],
    tasks: [
      'Study or learn something new for 30 minutes',
      'Find five words in a literary text that dont have a direct one-word translation and write a definition entry explaining their cultural weight',
      'Research accessible design and pick a color palette for your charts that is easy for colorblind people to read',
      'Write three different ways to describe your passion project',
      'Draft three specific questions you want to ask people the next time you show them your work',
    ]
  },
  {
    id: 'dog',
    name: 'Puppy',
    emoji: '',
    color: 'blue',
    description: 'A loyal little puppy to sit beside you while you focus.',
    pixelArt: [
      ['B','_','_','_','_','B'],
      ['B','B','B','B','B','B'],
      ['B','e','B','B','e','B'],
      ['_','B','n','B','B','_'],
      ['_','B','B','B','B','_'],
      ['_','B','_','_','B','_'],
    ],
    tasks: [
      'Complete one chapter or section of your reading',
      'Write a 60-second speech explaining why your current project matters to someone who has never heard of it',
      'Take a paragraph from a myth and rewrite it in the style of a modern-day breaking news report',
      'Practice a skill of your choice for 25 minutes',
      'Write in your journal or do a brain dump for 15 minutes',
    ]
  },
  {
    id: 'bear',
    name: 'Bear',
    emoji: '',
    color: 'peach',
    description: 'A cozy honey bear who makes every work session feel warm.',
    pixelArt: [
      ['P','_','P','P','_','P'],
      ['P','P','P','P','P','P'],
      ['P','e','P','P','e','P'],
      ['_','P','m','P','P','_'],
      ['_','P','P','P','P','_'],
      ['_','P','P','P','P','_'],
    ],
    tasks: [
      'Do a 30-minute deep work session on your hardest task',
      'Read a book or a long-form article with zero digital distractions',
      'Write a summary of what you learned today',
      'Work on your most important project for 25 minutes',
      'Write a paragraph on how a specific mathematical discovery would have changed if it had happened 100 years earlier/later',
    ]
  },
  {
    id: 'cat',
    name: 'Kitty',
    emoji: '',
    color: 'purple',
    description: 'A mysterious kitty who purrs you into a productivity zone.',
    pixelArt: [
      ['V','_','V','V','_','V'],
      ['_','V','V','V','V','_'],
      ['V','e','V','V','e','V'],
      ['_','V','w','V','V','_'],
      ['_','V','V','V','V','_'],
      ['_','_','V','V','_','_'],
    ],
    tasks: [
      'Spend 25 minutes coding or building something',
      'Pick one statistic or historical date from a draft and spend a focus block finding at least two primary sources to verify it',
      'Complete three small tasks without switching contexts',
      'Do focused research on a topic for 20 minutes',
      'Write bullet points summarizing a key idea',
    ]
  },
  {
    id: 'frog',
    name: 'Froggy',
    emoji: '',
    color: 'green',
    description: 'A happy little frog who hops through tasks with you!',
    pixelArt: [
      ['G','_','_','_','_','G'],
      ['G','G','G','G','G','G'],
      ['_','e','G','G','e','_'],
      ['_','G','s','G','G','_'],
      ['G','G','G','G','G','G'],
      ['G','_','_','_','_','G'],
    ],
    tasks: [
      'Take a draft of an article and reduce its word count by 30% without losing the core meaning',
      'Explain a specific subject to an imaginary beginner',
      'Review and update a project you have been neglecting',
      'Write a to-do list and estimate times for each item',
      'Practice a language or skill for 25 minutes',
    ]
  },
  {
    id: 'hamster',
    name: 'Hamster',
    emoji: '',
    color: 'peach',
    description: 'A tiny hamster spinning the wheel of productivity!',
    pixelArt: [
      ['_','H','H','H','H','_'],
      ['H','H','H','H','H','H'],
      ['H','e','H','H','e','H'],
      ['H','H','n','H','H','H'],
      ['_','H','H','H','H','_'],
      ['_','_','H','H','_','_'],
    ],
    tasks: [
      'Work for 20 minutes on repetitive but important tasks',
      'Take a previous essay or article and manually highlight every noun phrase, checking for complex structures',
      'Take raw survey percentages and sketch out how the comparison bars or charts should look before actually building them',
      'Review a section of your code to improve variable naming and comments for better readability',
      'Do a 15-minute cleanup of your files or folders',
    ]
  },
  {
    id: 'star',
    name: 'Star Pup',
    emoji: '',
    color: 'yellow',
    description: 'A sparkling star puppy who lights up your focus sessions!',
    pixelArt: [
      ['_','_','S','S','_','_'],
      ['S','S','S','S','S','S'],
      ['S','e','S','S','e','S'],
      ['_','S','*','S','S','_'],
      ['S','S','S','S','S','S'],
      ['_','_','S','S','_','_'],
    ],
    tasks: [
      'Work on a passion project for 30 minutes',
      'Challenge yourself to finish something ahead of schedule',
      'Brainstorm 10 new ideas in 10 minutes',
      'Write a 150-word encouraging message for someone struggling with a specific subject',
      'Go through a document specifically to fix font sizes, bolding and spacing to make it look professional',
    ]
  },
];

export function getRandomToy(): Toy {
  return toys[Math.floor(Math.random() * toys.length)];
}

export function getRandomTask(toy: Toy): string {
  return toy.tasks[Math.floor(Math.random() * toy.tasks.length)];
}
