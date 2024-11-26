// constants/index.js

export const supabaseURL = 'https://xrgfqgcirekpbmevplcp.supabase.co';
export const supabaseAnonKey = 'your_supabase_anon_key';

// Existing homeCategories array
export const homeCategories = [
  {
    name: 'Gym',
    image: require('../assets/images/gym.webp'),
  },
  {
    name: 'Sports',
    image: require('../assets/images/gym.webp'),
  },
  {
    name: 'Wellness',
    image: require('../assets/images/gym.webp'),
  },
  {
    name: 'Therapy',
    image: require('../assets/images/gym.webp'),
  },
];

// Enhanced stub data for places with image and distance
export const categoryPlaces = {
  Gym: [
    {
      id: '1',
      name: 'FitLife Gym',
      address: '123 Main St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '0.5 km',
      feesPerMonth: '$50',
    },
    {
      id: '2',
      name: 'StrongBody Gym',
      address: '456 Elm St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '1.2 km',
      feesPerMonth: '$50',
    },
    // Add more gyms as needed
  ],
  Sports: [
    {
      id: '1',
      name: 'City Sports Center',
      address: '789 Oak St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '0.8 km',
      feesPerMonth: '$50',
    },
    {
      id: '2',
      name: 'Downtown Stadium',
      address: '321 Pine St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '2.0 km',
      feesPerMonth: '$50',
    },
    // Add more sports centers
  ],
  Wellness: [
    {
      id: '1',
      name: 'Harmony Wellness Spa',
      address: '654 Maple St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '1.5 km',
      feesPerMonth: '$50',
    },
    {
      id: '2',
      name: 'Zen Wellness Center',
      address: '987 Cedar St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '2.5 km',
      feesPerMonth: '$50',
    },
    // Add more wellness centers
  ],
  Therapy: [
    {
      id: '1',
      name: 'Healing Hands Therapy',
      address: '246 Birch St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '0.7 km',
      feesPerMonth: '$50',
    },
    {
      id: '2',
      name: 'Mind & Body Therapy',
      address: '135 Spruce St, City',
      image: require('../assets/images/gym.webp'), // Add this image to assets/images
      distance: '1.3 km',
      feesPerMonth: '$50',
    },
    // Add more therapy centers
  ],
};
