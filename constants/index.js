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

// Enhanced stub data for places with image, distance, and amenities
export const categoryPlaces = {
  Gym: [
    {
      id: 'gym-1', // Made unique by prefixing
      name: 'FitLife Gym',
      address: '123 Main St, City',
      image: require('../assets/images/gym.webp'), // Ensure this image exists
      distance: '0.5 km',
      feesPerMonth: '$50',
      amenities: ['Shower', 'Sauna', 'Parking', 'Wi-Fi'],
    },
    {
      id: 'gym-2',
      name: 'StrongBody Gym',
      address: '456 Elm St, City',
      image: require('../assets/images/gym.webp'),
      distance: '1.2 km',
      feesPerMonth: '$50',
      amenities: ['Parking', 'Wi-Fi'],
    },
    // Add more gyms as needed
  ],
  Sports: [
    {
      id: 'sports-1',
      name: 'City Sports Center',
      address: '789 Oak St, City',
      image: require('../assets/images/gym.webp'),
      distance: '0.8 km',
      feesPerMonth: '$50',
      amenities: ['Parking', 'Wi-Fi'],
    },
    {
      id: 'sports-2',
      name: 'Downtown Stadium',
      address: '321 Pine St, City',
      image: require('../assets/images/gym.webp'),
      distance: '2.0 km',
      feesPerMonth: '$50',
      amenities: ['Shower', 'Wi-Fi'],
    },
    // Add more sports centers
  ],
  Wellness: [
    {
      id: 'wellness-1',
      name: 'Harmony Wellness Spa',
      address: '654 Maple St, City',
      image: require('../assets/images/gym.webp'),
      distance: '1.5 km',
      feesPerMonth: '$50',
      amenities: ['Sauna', 'Wi-Fi'],
    },
    {
      id: 'wellness-2',
      name: 'Zen Wellness Center',
      address: '987 Cedar St, City',
      image: require('../assets/images/gym.webp'),
      distance: '2.5 km',
      feesPerMonth: '$50',
      amenities: ['Shower', 'Parking'],
    },
    // Add more wellness centers
  ],
  Therapy: [
    {
      id: 'therapy-1',
      name: 'Healing Hands Therapy',
      address: '246 Birch St, City',
      image: require('../assets/images/gym.webp'),
      distance: '0.7 km',
      feesPerMonth: '$50',
      amenities: ['Wi-Fi'],
    },
    {
      id: 'therapy-2',
      name: 'Mind & Body Therapy',
      address: '135 Spruce St, City',
      image: require('../assets/images/gym.webp'),
      distance: '1.3 km',
      feesPerMonth: '$50',
      amenities: ['Parking', 'Shower'],
    },
    // Add more therapy centers
  ],
};
