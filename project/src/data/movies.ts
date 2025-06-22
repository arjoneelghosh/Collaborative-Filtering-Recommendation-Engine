import { Movie, Genre } from '../types/Movie';

// Action Movies
const actionMovies: Movie[] = [
  {
    id: 'action-1',
    title: 'Avengers: Endgame',
    year: 2019,
    genre: 'Action',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anthony Russo',
    mainActor: 'Robert Downey Jr.',
    description: 'The Avengers assemble once more to reverse the damage caused by Thanos and restore balance to the universe.'
  },
  {
    id: 'action-2',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    poster: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher Nolan',
    mainActor: 'Christian Bale',
    description: 'Batman faces his greatest challenge yet as the Joker wreaks havoc on Gotham City.'
  },
  {
    id: 'action-3',
    title: 'Mad Max: Fury Road',
    year: 2015,
    genre: 'Action',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'George Miller',
    mainActor: 'Tom Hardy',
    description: 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.'
  },
  {
    id: 'action-4',
    title: 'John Wick',
    year: 2014,
    genre: 'Action',
    rating: 7.4,
    poster: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Chad Stahelski',
    mainActor: 'Keanu Reeves',
    description: 'A retired hitman seeks vengeance against the gangsters who killed his dog.'
  },
  {
    id: 'action-5',
    title: 'Mission: Impossible',
    year: 2018,
    genre: 'Action',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher McQuarrie',
    mainActor: 'Tom Cruise',
    description: 'Ethan Hunt and his team race against time to prevent a global catastrophe.'
  },
  {
    id: 'action-6',
    title: 'Wonder Woman',
    year: 2017,
    genre: 'Action',
    rating: 7.4,
    poster: 'https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Patty Jenkins',
    mainActor: 'Gal Gadot',
    description: 'Diana Prince discovers her full powers and true destiny while fighting alongside men in a war to end all wars.'
  },
  {
    id: 'action-7',
    title: 'Black Panther',
    year: 2018,
    genre: 'Action',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/7991227/pexels-photo-7991227.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ryan Coogler',
    mainActor: 'Chadwick Boseman',
    description: 'T\'Challa returns home to Wakanda to serve as king, but finds his sovereignty challenged.'
  },
  {
    id: 'action-8',
    title: 'Deadpool',
    year: 2016,
    genre: 'Action',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Tim Miller',
    mainActor: 'Ryan Reynolds',
    description: 'A former Special Forces operative turned mercenary is subjected to a rogue experiment.'
  },
  {
    id: 'action-9',
    title: 'Free Guy',
    year: 2021,
    genre: 'Action',
    rating: 7.1,
    poster: 'https://images.pexels.com/photos/7991228/pexels-photo-7991228.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Shawn Levy',
    mainActor: 'Ryan Reynolds',
    description: 'A bank teller discovers he is actually a background player in a video game.'
  },
  {
    id: 'action-10',
    title: 'The Matrix',
    year: 1999,
    genre: 'Action',
    rating: 8.7,
    poster: 'https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'The Wachowskis',
    mainActor: 'Keanu Reeves',
    description: 'A computer hacker learns the shocking truth about his reality and his role in the war against its controllers.'
  },
  {
    id: 'action-11',
    title: 'War',
    year: 2019,
    genre: 'Action',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991229/pexels-photo-7991229.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Siddharth Anand',
    mainActor: 'Hrithik Roshan',
    description: 'An Indian soldier is assigned to eliminate his former mentor who has gone rogue.'
  },
  {
    id: 'action-12',
    title: 'Baahubali 2',
    year: 2017,
    genre: 'Action',
    rating: 8.7,
    poster: 'https://images.pexels.com/photos/8111361/pexels-photo-8111361.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'S.S. Rajamouli',
    mainActor: 'Prabhas',
    description: 'Shiva learns about his heritage and the conflict that his father faced with the evil Bhallaladeva.'
  },
  {
    id: 'action-13',
    title: 'Dangal',
    year: 2016,
    genre: 'Action',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/7991230/pexels-photo-7991230.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Nitesh Tiwari',
    mainActor: 'Aamir Khan',
    description: 'A former wrestler trains his daughters to become world-class wrestlers.'
  },
  {
    id: 'action-14',
    title: 'Tiger Zinda Hai',
    year: 2017,
    genre: 'Action',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/8111362/pexels-photo-8111362.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ali Abbas Zafar',
    mainActor: 'Salman Khan',
    description: 'Tiger and Zoya are back to save a group of hostages from a terrorist organization.'
  },
  {
    id: 'action-15',
    title: 'Pathaan',
    year: 2023,
    genre: 'Action',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/7991231/pexels-photo-7991231.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Siddharth Anand',
    mainActor: 'Shah Rukh Khan',
    description: 'An exiled RAW agent partners with his former colleague to stop a mercenary organization.'
  },
  {
    id: 'action-16',
    title: 'Don 2',
    year: 2011,
    genre: 'Action',
    rating: 7.1,
    poster: 'https://images.pexels.com/photos/8111363/pexels-photo-8111363.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Farhan Akhtar',
    mainActor: 'Shah Rukh Khan',
    description: 'Don continues his conquest of the Asian underworld but faces new challenges.'
  },
  {
    id: 'action-17',
    title: 'Ra.One',
    year: 2011,
    genre: 'Action',
    rating: 5.8,
    poster: 'https://images.pexels.com/photos/7991232/pexels-photo-7991232.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anubhav Sinha',
    mainActor: 'Shah Rukh Khan',
    description: 'A video game developer creates a game where the villain escapes into the real world.'
  },
  {
    id: 'action-18',
    title: 'Fast & Furious 9',
    year: 2021,
    genre: 'Action',
    rating: 5.2,
    poster: 'https://images.pexels.com/photos/8111364/pexels-photo-8111364.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Justin Lin',
    mainActor: 'Vin Diesel',
    description: 'Dom and his family face their most lethal opponent yet - his forsaken brother.'
  },
  {
    id: 'action-19',
    title: 'Aquaman',
    year: 2018,
    genre: 'Action',
    rating: 6.8,
    poster: 'https://images.pexels.com/photos/7991233/pexels-photo-7991233.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'James Wan',
    mainActor: 'Jason Momoa',
    description: 'Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis.'
  },
  {
    id: 'action-20',
    title: 'Spider-Man: No Way Home',
    year: 2021,
    genre: 'Action',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/8111365/pexels-photo-8111365.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Jon Watts',
    mainActor: 'Tom Holland',
    description: 'Spider-Man seeks help from Doctor Strange when his identity is revealed.'
  },
  {
    id: 'action-21',
    title: 'Thor: Ragnarok',
    year: 2017,
    genre: 'Action',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/7991234/pexels-photo-7991234.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Taika Waititi',
    mainActor: 'Chris Hemsworth',
    description: 'Thor must escape the alien planet Sakaar in time to save Asgard from Ragnarok.'
  },
  {
    id: 'action-22',
    title: 'Captain America: Civil War',
    year: 2016,
    genre: 'Action',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/8111366/pexels-photo-8111366.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anthony Russo',
    mainActor: 'Chris Evans',
    description: 'Political pressure mounts to control the Avengers, fracturing the team.'
  },
  {
    id: 'action-23',
    title: 'Guardians of the Galaxy',
    year: 2014,
    genre: 'Action',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991235/pexels-photo-7991235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'James Gunn',
    mainActor: 'Chris Pratt',
    description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior.'
  },
  {
    id: 'action-24',
    title: 'Iron Man',
    year: 2008,
    genre: 'Action',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/8111367/pexels-photo-8111367.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Jon Favreau',
    mainActor: 'Robert Downey Jr.',
    description: 'After being held captive, an industrialist creates a unique weaponized suit to fight evil.'
  },
  {
    id: 'action-25',
    title: 'Doctor Strange',
    year: 2016,
    genre: 'Action',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/7991236/pexels-photo-7991236.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Scott Derrickson',
    mainActor: 'Benedict Cumberbatch',
    description: 'A former neurosurgeon embarks on a journey of healing, only to be drawn into the world of the mystic arts.'
  },
  {
    id: 'action-26',
    title: 'Ant-Man',
    year: 2015,
    genre: 'Action',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/8111368/pexels-photo-8111368.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Peyton Reed',
    mainActor: 'Paul Rudd',
    description: 'A thief becomes a hero when he must help his mentor protect the secret behind the Ant-Man technology.'
  },
  {
    id: 'action-27',
    title: 'The Incredible Hulk',
    year: 2008,
    genre: 'Action',
    rating: 6.7,
    poster: 'https://images.pexels.com/photos/7991237/pexels-photo-7991237.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Louis Leterrier',
    mainActor: 'Edward Norton',
    description: 'Bruce Banner searches for a cure to the curse of the Hulk.'
  },
  {
    id: 'action-28',
    title: 'Captain Marvel',
    year: 2019,
    genre: 'Action',
    rating: 6.8,
    poster: 'https://images.pexels.com/photos/8111369/pexels-photo-8111369.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anna Boden',
    mainActor: 'Brie Larson',
    description: 'Carol Danvers becomes one of the universe\'s most powerful heroes.'
  },
  {
    id: 'action-29',
    title: 'The Avengers',
    year: 2012,
    genre: 'Action',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991238/pexels-photo-7991238.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Joss Whedon',
    mainActor: 'Robert Downey Jr.',
    description: 'Earth\'s mightiest heroes must come together to stop an alien invasion.'
  },
  {
    id: 'action-30',
    title: 'Avengers: Infinity War',
    year: 2018,
    genre: 'Action',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/8111370/pexels-photo-8111370.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anthony Russo',
    mainActor: 'Robert Downey Jr.',
    description: 'The Avengers must stop Thanos from collecting all six Infinity Stones.'
  }
];

// Drama Movies
const dramaMovies: Movie[] = [
  {
    id: 'drama-1',
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    poster: 'https://images.pexels.com/photos/7991239/pexels-photo-7991239.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Frank Darabont',
    mainActor: 'Tim Robbins',
    description: 'Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: 'drama-2',
    title: 'The Godfather',
    year: 1972,
    genre: 'Drama',
    rating: 9.2,
    poster: 'https://images.pexels.com/photos/8111371/pexels-photo-8111371.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Francis Ford Coppola',
    mainActor: 'Marlon Brando',
    description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.'
  },
  {
    id: 'drama-3',
    title: 'Forrest Gump',
    year: 1994,
    genre: 'Drama',
    rating: 8.8,
    poster: 'https://images.pexels.com/photos/7991240/pexels-photo-7991240.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Robert Zemeckis',
    mainActor: 'Tom Hanks',
    description: 'The presidencies of Kennedy and Johnson through the eyes of an Alabama man with an IQ of 75.'
  },
  {
    id: 'drama-4',
    title: 'The Pursuit of Happyness',
    year: 2006,
    genre: 'Drama',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/8111372/pexels-photo-8111372.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Gabriele Muccino',
    mainActor: 'Will Smith',
    description: 'A struggling salesman takes custody of his son as he\'s poised to begin a life-changing professional career.'
  },
  {
    id: 'drama-5',
    title: 'A Beautiful Mind',
    year: 2001,
    genre: 'Drama',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991241/pexels-photo-7991241.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ron Howard',
    mainActor: 'Russell Crowe',
    description: 'After John Nash suffers a mental breakdown, his wife struggles to help him as he battles schizophrenia.'
  },
  {
    id: 'drama-6',
    title: 'Good Will Hunting',
    year: 1997,
    genre: 'Drama',
    rating: 8.3,
    poster: 'https://images.pexels.com/photos/8111373/pexels-photo-8111373.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Gus Van Sant',
    mainActor: 'Matt Damon',
    description: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics but needs help from a psychologist.'
  },
  {
    id: 'drama-7',
    title: 'The Green Mile',
    year: 1999,
    genre: 'Drama',
    rating: 8.6,
    poster: 'https://images.pexels.com/photos/7991242/pexels-photo-7991242.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Frank Darabont',
    mainActor: 'Tom Hanks',
    description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.'
  },
  {
    id: 'drama-8',
    title: 'One Flew Over the Cuckoo\'s Nest',
    year: 1975,
    genre: 'Drama',
    rating: 8.7,
    poster: 'https://images.pexels.com/photos/8111374/pexels-photo-8111374.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Milos Forman',
    mainActor: 'Jack Nicholson',
    description: 'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse.'
  },
  {
    id: 'drama-9',
    title: 'Schindler\'s List',
    year: 1993,
    genre: 'Drama',
    rating: 9.0,
    poster: 'https://images.pexels.com/photos/7991243/pexels-photo-7991243.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Steven Spielberg',
    mainActor: 'Liam Neeson',
    description: 'In German-occupied Poland, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.'
  },
  {
    id: 'drama-10',
    title: '12 Years a Slave',
    year: 2013,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111375/pexels-photo-8111375.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Steve McQueen',
    mainActor: 'Chiwetel Ejiofor',
    description: 'In the antebellum United States, Solomon Northup fights to survive and return home.'
  },
  {
    id: 'drama-11',
    title: 'Taare Zameen Par',
    year: 2007,
    genre: 'Drama',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/7991244/pexels-photo-7991244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Aamir Khan',
    mainActor: 'Aamir Khan',
    description: 'An eight-year-old boy is thought to be lazy and a trouble-maker, until a new art teacher discovers he has dyslexia.'
  },
  {
    id: 'drama-12',
    title: '3 Idiots',
    year: 2009,
    genre: 'Drama',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/8111376/pexels-photo-8111376.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rajkumar Hirani',
    mainActor: 'Aamir Khan',
    description: 'Two friends search for their long lost companion. They have a lead that he is in Goa.'
  },
  {
    id: 'drama-13',
    title: 'Zindagi Na Milegi Dobara',
    year: 2011,
    genre: 'Drama',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991245/pexels-photo-7991245.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Zoya Akhtar',
    mainActor: 'Hrithik Roshan',
    description: 'Three friends decide to turn their fantasy vacation into reality after one of them gets engaged.'
  },
  {
    id: 'drama-14',
    title: 'Pink',
    year: 2016,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111377/pexels-photo-8111377.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Aniruddha Roy Chowdhury',
    mainActor: 'Amitabh Bachchan',
    description: 'When three young women are implicated in a crime, a retired lawyer steps forward to help them clear their names.'
  },
  {
    id: 'drama-15',
    title: 'Queen',
    year: 2013,
    genre: 'Drama',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991246/pexels-photo-7991246.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Vikas Bahl',
    mainActor: 'Kangana Ranaut',
    description: 'A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.'
  },
  {
    id: 'drama-16',
    title: 'Anand',
    year: 1971,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111378/pexels-photo-8111378.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Hrishikesh Mukherjee',
    mainActor: 'Rajesh Khanna',
    description: 'The story of a terminally ill man who wishes to live life to the fullest before the inevitable occurs.'
  },
  {
    id: 'drama-17',
    title: 'Mughal-E-Azam',
    year: 1960,
    genre: 'Drama',
    rating: 8.5,
    poster: 'https://images.pexels.com/photos/7991247/pexels-photo-7991247.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'K. Asif',
    mainActor: 'Dilip Kumar',
    description: 'A sixteenth century love story about a marriage of alliance that gave birth to true love between a great Mughal emperor and a Rajput princess.'
  },
  {
    id: 'drama-18',
    title: 'Sholay',
    year: 1975,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111379/pexels-photo-8111379.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ramesh Sippy',
    mainActor: 'Dharmendra',
    description: 'After his family is murdered by a bandit, a former police officer enlists the services of two outlaws to capture the killer.'
  },
  {
    id: 'drama-19',
    title: 'Lagaan',
    year: 2001,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/7991248/pexels-photo-7991248.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ashutosh Gowariker',
    mainActor: 'Aamir Khan',
    description: 'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.'
  },
  {
    id: 'drama-20',
    title: 'Gully Boy',
    year: 2019,
    genre: 'Drama',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/8111380/pexels-photo-8111380.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Zoya Akhtar',
    mainActor: 'Ranveer Singh',
    description: 'A coming-of-age story based on the lives of street rappers in Mumbai.'
  },
  {
    id: 'drama-21',
    title: 'The Social Network',
    year: 2010,
    genre: 'Drama',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991249/pexels-photo-7991249.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Jesse Eisenberg',
    description: 'Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook.'
  },
  {
    id: 'drama-22',
    title: 'There Will Be Blood',
    year: 2007,
    genre: 'Drama',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/8111381/pexels-photo-8111381.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Paul Thomas Anderson',
    mainActor: 'Daniel Day-Lewis',
    description: 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector.'
  },
  {
    id: 'drama-23',
    title: 'No Country for Old Men',
    year: 2007,
    genre: 'Drama',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/7991250/pexels-photo-7991250.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ethan Coen',
    mainActor: 'Tommy Lee Jones',
    description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong.'
  },
  {
    id: 'drama-24',
    title: 'Moonlight',
    year: 2016,
    genre: 'Drama',
    rating: 7.4,
    poster: 'https://images.pexels.com/photos/8111382/pexels-photo-8111382.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Barry Jenkins',
    mainActor: 'Mahershala Ali',
    description: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood.'
  },
  {
    id: 'drama-25',
    title: 'Manchester by the Sea',
    year: 2016,
    genre: 'Drama',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/7991251/pexels-photo-7991251.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Kenneth Lonergan',
    mainActor: 'Casey Affleck',
    description: 'A depressed uncle is asked to take care of his teenage nephew after the boy\'s father dies.'
  },
  {
    id: 'drama-26',
    title: 'Her',
    year: 2013,
    genre: 'Drama',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/8111383/pexels-photo-8111383.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Spike Jonze',
    mainActor: 'Joaquin Phoenix',
    description: 'A sensitive writer develops an unlikely relationship with an operating system designed to meet his every need.'
  },
  {
    id: 'drama-27',
    title: 'La La Land',
    year: 2016,
    genre: 'Drama',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991252/pexels-photo-7991252.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Damien Chazelle',
    mainActor: 'Ryan Gosling',
    description: 'A jazz musician and an aspiring actress meet and fall in love in Los Angeles.'
  },
  {
    id: 'drama-28',
    title: 'Whiplash',
    year: 2014,
    genre: 'Drama',
    rating: 8.5,
    poster: 'https://images.pexels.com/photos/8111384/pexels-photo-8111384.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Damien Chazelle',
    mainActor: 'Miles Teller',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.'
  },
  {
    id: 'drama-29',
    title: 'Birdman',
    year: 2014,
    genre: 'Drama',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991253/pexels-photo-7991253.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Alejandro G. Iñárritu',
    mainActor: 'Michael Keaton',
    description: 'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.'
  },
  {
    id: 'drama-30',
    title: 'The Revenant',
    year: 2015,
    genre: 'Drama',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/8111385/pexels-photo-8111385.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Alejandro G. Iñárritu',
    mainActor: 'Leonardo DiCaprio',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear.'
  }
];

// Comedy Movies
const comedyMovies: Movie[] = [
  {
    id: 'comedy-1',
    title: 'The Hangover',
    year: 2009,
    genre: 'Comedy',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991254/pexels-photo-7991254.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Todd Phillips',
    mainActor: 'Bradley Cooper',
    description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.'
  },
  {
    id: 'comedy-2',
    title: 'Superbad',
    year: 2007,
    genre: 'Comedy',
    rating: 7.6,
    poster: 'https://images.pexels.com/photos/8111386/pexels-photo-8111386.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Greg Mottola',
    mainActor: 'Jonah Hill',
    description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.'
  },
  {
    id: 'comedy-3',
    title: 'Anchorman',
    year: 2004,
    genre: 'Comedy',
    rating: 7.2,
    poster: 'https://images.pexels.com/photos/7991255/pexels-photo-7991255.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Adam McKay',
    mainActor: 'Will Ferrell',
    description: 'Ron Burgundy is San Diego\'s top-rated newsman in the male-dominated broadcasting of the 1970s.'
  },
  {
    id: 'comedy-4',
    title: 'Step Brothers',
    year: 2008,
    genre: 'Comedy',
    rating: 6.9,
    poster: 'https://images.pexels.com/photos/8111387/pexels-photo-8111387.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Adam McKay',
    mainActor: 'Will Ferrell',
    description: 'Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.'
  },
  {
    id: 'comedy-5',
    title: 'Tropic Thunder',
    year: 2008,
    genre: 'Comedy',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/7991256/pexels-photo-7991256.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ben Stiller',
    mainActor: 'Ben Stiller',
    description: 'Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.'
  },
  {
    id: 'comedy-6',
    title: 'Zoolander',
    year: 2001,
    genre: 'Comedy',
    rating: 6.5,
    poster: 'https://images.pexels.com/photos/8111388/pexels-photo-8111388.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ben Stiller',
    mainActor: 'Ben Stiller',
    description: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.'
  },
  {
    id: 'comedy-7',
    title: 'Dumb and Dumber',
    year: 1994,
    genre: 'Comedy',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/7991257/pexels-photo-7991257.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Peter Farrelly',
    mainActor: 'Jim Carrey',
    description: 'After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen.'
  },
  {
    id: 'comedy-8',
    title: 'The Mask',
    year: 1994,
    genre: 'Comedy',
    rating: 6.9,
    poster: 'https://images.pexels.com/photos/8111389/pexels-photo-8111389.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Chuck Russell',
    mainActor: 'Jim Carrey',
    description: 'Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.'
  },
  {
    id: 'comedy-9',
    title: 'Ace Ventura: Pet Detective',
    year: 1994,
    genre: 'Comedy',
    rating: 6.9,
    poster: 'https://images.pexels.com/photos/7991258/pexels-photo-7991258.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Tom Shadyac',
    mainActor: 'Jim Carrey',
    description: 'A goofy detective specializing in animals goes in search of a missing dolphin mascot of a football team.'
  },
  {
    id: 'comedy-10',
    title: 'Meet the Parents',
    year: 2000,
    genre: 'Comedy',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/8111390/pexels-photo-8111390.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Jay Roach',
    mainActor: 'Ben Stiller',
    description: 'A man meets his girlfriend\'s parents for the first time, only to discover her father is a formidable intimidator.'
  },
  {
    id: 'comedy-11',
    title: 'Hera Pheri',
    year: 2000,
    genre: 'Comedy',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991259/pexels-photo-7991259.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Priyadarshan',
    mainActor: 'Akshay Kumar',
    description: 'Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper.'
  },
  {
    id: 'comedy-12',
    title: 'Andaz Apna Apna',
    year: 1994,
    genre: 'Comedy',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/8111391/pexels-photo-8111391.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rajkumar Santoshi',
    mainActor: 'Aamir Khan',
    description: 'Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.'
  },
  {
    id: 'comedy-13',
    title: 'Munna Bhai M.B.B.S.',
    year: 2003,
    genre: 'Comedy',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/7991260/pexels-photo-7991260.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rajkumar Hirani',
    mainActor: 'Sanjay Dutt',
    description: 'A gangster sets out to fulfill his father\'s dream of becoming a doctor.'
  },
  {
    id: 'comedy-14',
    title: 'Golmaal',
    year: 2006,
    genre: 'Comedy',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/8111392/pexels-photo-8111392.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rohit Shetty',
    mainActor: 'Ajay Devgn',
    description: 'Four runaway crooks take shelter in a bungalow which is owned by a blind couple.'
  },
  {
    id: 'comedy-15',
    title: 'Welcome',
    year: 2007,
    genre: 'Comedy',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/7991261/pexels-photo-7991261.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anees Bazmee',
    mainActor: 'Akshay Kumar',
    description: 'A man falls in love with a beautiful woman, but later discovers that her uncles are gangsters.'
  },
  {
    id: 'comedy-16',
    title: 'Phir Hera Pheri',
    year: 2006,
    genre: 'Comedy',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/8111393/pexels-photo-8111393.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Neeraj Vora',
    mainActor: 'Akshay Kumar',
    description: 'Babu Rao, Raju and Shyam, are living happily after having risen from rags to riches.'
  },
  {
    id: 'comedy-17',
    title: 'Dhamaal',
    year: 2007,
    genre: 'Comedy',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/7991262/pexels-photo-7991262.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Indra Kumar',
    mainActor: 'Sanjay Dutt',
    description: 'Four friends meet an accident victim who tells them about hidden treasure before dying.'
  },
  {
    id: 'comedy-18',
    title: 'Chup Chup Ke',
    year: 2006,
    genre: 'Comedy',
    rating: 7.1,
    poster: 'https://images.pexels.com/photos/8111394/pexels-photo-8111394.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Priyadarshan',
    mainActor: 'Shahid Kapoor',
    description: 'A debt-ridden young man attempts suicide, but is rescued only to find himself in more trouble.'
  },
  {
    id: 'comedy-19',
    title: 'Hulchul',
    year: 2004,
    genre: 'Comedy',
    rating: 7.1,
    poster: 'https://images.pexels.com/photos/7991263/pexels-photo-7991263.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Priyadarshan',
    mainActor: 'Akshaye Khanna',
    description: 'A man and woman from feuding families fall in love and must overcome their families\' hatred.'
  },
  {
    id: 'comedy-20',
    title: 'De Dana Dan',
    year: 2009,
    genre: 'Comedy',
    rating: 5.6,
    poster: 'https://images.pexels.com/photos/8111395/pexels-photo-8111395.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Priyadarshan',
    munActor: 'Akshay Kumar',
    description: 'Two down on their luck men try to kidnap a wealthy man\'s dog to demand a ransom.'
  },
  {
    id: 'comedy-21',
    title: 'Borat',
    year: 2006,
    genre: 'Comedy',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/7991264/pexels-photo-7991264.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Larry Charles',
    mainActor: 'Sacha Baron Cohen',
    description: 'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world.'
  },
  {
    id: 'comedy-22',
    title: 'Knocked Up',
    year: 2007,
    genre: 'Comedy',
    rating: 6.9,
    poster: 'https://images.pexels.com/photos/8111396/pexels-photo-8111396.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Judd Apatow',
    mainActor: 'Seth Rogen',
    description: 'For fun-loving party animal Ben, the last thing he ever expected was for his one-night stand to show up on his doorstep eight weeks later to tell him she\'s pregnant.'
  },
  {
    id: 'comedy-23',
    title: 'Pineapple Express',
    year: 2008,
    genre: 'Comedy',
    rating: 6.9,
    poster: 'https://images.pexels.com/photos/7991265/pexels-photo-7991265.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Gordon Green',
    mainActor: 'Seth Rogen',
    description: 'A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after witnessing his dealer\'s boss murder a competitor.'
  },
  {
    id: 'comedy-24',
    title: 'This Is the End',
    year: 2013,
    genre: 'Comedy',
    rating: 6.6,
    poster: 'https://images.pexels.com/photos/8111397/pexels-photo-8111397.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Evan Goldberg',
    mainActor: 'James Franco',
    description: 'Six Los Angeles celebrities are stuck in James Franco\'s house after a series of devastating events just destroyed Los Angeles.'
  },
  {
    id: 'comedy-25',
    title: 'The Other Guys',
    year: 2010,
    genre: 'Comedy',
    rating: 6.6,
    poster: 'https://images.pexels.com/photos/7991266/pexels-photo-7991266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Adam McKay',
    mainActor: 'Will Ferrell',
    description: 'Two mismatched New York City detectives seize an opportunity to step up like the city\'s top cops.'
  },
  {
    id: 'comedy-26',
    title: 'Talladega Nights',
    year: 2006,
    genre: 'Comedy',
    rating: 6.6,
    poster: 'https://images.pexels.com/photos/8111398/pexels-photo-8111398.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Adam McKay',
    mainActor: 'Will Ferrell',
    description: 'Number one NASCAR driver Ricky Bobby stays atop the heap thanks to a pact with his best friend and teammate.'
  },
  {
    id: 'comedy-27',
    title: 'Dodgeball',
    year: 2004,
    genre: 'Comedy',
    rating: 6.7,
    poster: 'https://images.pexels.com/photos/7991267/pexels-photo-7991267.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rawson Marshall Thurber',
    mainActor: 'Vince Vaughn',
    description: 'A group of misfits enter a Las Vegas dodgeball tournament in order to save their cherished local gym from the onslaught of a corporate health fitness chain.'
  },
  {
    id: 'comedy-28',
    title: 'Old School',
    year: 2003,
    genre: 'Comedy',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/8111399/pexels-photo-8111399.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Todd Phillips',
    mainActor: 'Luke Wilson',
    description: 'Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater.'
  },
  {
    id: 'comedy-29',
    title: 'Wedding Crashers',
    year: 2005,
    genre: 'Comedy',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/7991268/pexels-photo-7991268.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Dobkin',
    mainActor: 'Owen Wilson',
    description: 'John and Jeremy are emotional criminals who know how to use a woman\'s hopes and dreams for their own carnal gain.'
  },
  {
    id: 'comedy-30',
    title: 'Starsky & Hutch',
    year: 2004,
    genre: 'Comedy',
    rating: 6.1,
    poster: 'https://images.pexels.com/photos/8111400/pexels-photo-8111400.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Todd Phillips',
    mainActor: 'Ben Stiller',
    description: 'Two streetwise cops bust criminals in their red and white Ford Gran Torino, with the help of a police snitch called Huggy Bear.'
  }
];

// Sci-Fi Movies
const sciFiMovies: Movie[] = [
  {
    id: 'scifi-1',
    title: 'Blade Runner 2049',
    year: 2017,
    genre: 'Sci-Fi',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991269/pexels-photo-7991269.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Denis Villeneuve',
    mainActor: 'Ryan Gosling',
    description: 'Young Blade Runner K discovers a long-buried secret that leads him to track down former Blade Runner Rick Deckard.'
  },
  {
    id: 'scifi-2',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.6,
    poster: 'https://images.pexels.com/photos/8111401/pexels-photo-8111401.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher Nolan',
    mainActor: 'Matthew McConaughey',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
  },
  {
    id: 'scifi-3',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    poster: 'https://images.pexels.com/photos/7991270/pexels-photo-7991270.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher Nolan',
    mainActor: 'Leonardo DiCaprio',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.'
  },
  {
    id: 'scifi-4',
    title: 'The Matrix Reloaded',
    year: 2003,
    genre: 'Sci-Fi',
    rating: 7.2,
    poster: 'https://images.pexels.com/photos/8111402/pexels-photo-8111402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'The Wachowskis',
    mainActor: 'Keanu Reeves',
    description: 'Neo and his allies race against time before the machines discover the city of Zion and destroy it.'
  },
  {
    id: 'scifi-5',
    title: 'Dune',
    year: 2021,
    genre: 'Sci-Fi',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991271/pexels-photo-7991271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Denis Villeneuve',
    mainActor: 'Timothée Chalamet',
    description: 'Paul Atreides leads nomadic tribes in a revolt against the evil Harkonnen oppressors.'
  },
  {
    id: 'scifi-6',
    title: 'Ex Machina',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/8111403/pexels-photo-8111403.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Alex Garland',
    mainActor: 'Domhnall Gleeson',
    description: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence.'
  },
  {
    id: 'scifi-7',
    title: 'Arrival',
    year: 2016,
    genre: 'Sci-Fi',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/7991272/pexels-photo-7991272.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Denis Villeneuve',
    mainActor: 'Amy Adams',
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.'
  },
  {
    id: 'scifi-8',
    title: 'Gravity',
    year: 2013,
    genre: 'Sci-Fi',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/8111404/pexels-photo-8111404.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Alfonso Cuarón',
    mainActor: 'Sandra Bullock',
    description: 'Two astronauts work together to survive after an accident leaves them stranded in space.'
  },
  {
    id: 'scifi-9',
    title: 'The Martian',
    year: 2015,
    genre: 'Sci-Fi',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991273/pexels-photo-7991273.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ridley Scott',
    mainActor: 'Matt Damon',
    description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth.'
  },
  {
    id: 'scifi-10',
    title: 'Star Wars: The Force Awakens',
    year: 2015,
    genre: 'Sci-Fi',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/8111405/pexels-photo-8111405.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'J.J. Abrams',
    mainActor: 'Daisy Ridley',
    description: 'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.'
  },
  {
    id: 'scifi-11',
    title: 'Krrish',
    year: 2006,
    genre: 'Sci-Fi',
    rating: 6.4,
    poster: 'https://images.pexels.com/photos/7991274/pexels-photo-7991274.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rakesh Roshan',
    mainActor: 'Hrithik Roshan',
    description: 'Krishna is forced by circumstances to use his superpowers and become a masked superhero, Krrish, before getting drawn towards his lost legacy.'
  },
  {
    id: 'scifi-12',
    title: 'Krrish 3',
    year: 2013,
    genre: 'Sci-Fi',
    rating: 5.3,
    poster: 'https://images.pexels.com/photos/8111406/pexels-photo-8111406.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Rakesh Roshan',
    mainActor: 'Hrithik Roshan',
    description: 'Krrish and his scientist father must save the world and Krrish\'s love from a psychokinetic evil man named Kaal and his army of mutants.'
  },
  {
    id: 'scifi-13',
    title: 'Robot',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 7.1,
    poster: 'https://images.pexels.com/photos/7991275/pexels-photo-7991275.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'S. Shankar',
    mainActor: 'Rajinikanth',
    description: 'A scientist creates a robot that looks exactly like him. Problems arise when the robot falls in love with his creator\'s girlfriend.'
  },
  {
    id: 'scifi-14',
    title: '2.0',
    year: 2018,
    genre: 'Sci-Fi',
    rating: 6.2,
    poster: 'https://images.pexels.com/photos/8111407/pexels-photo-8111407.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'S. Shankar',
    mainActor: 'Rajinikanth',
    description: 'Dr. Vaseegaran creates Nila, a robot with the ability to understand human emotions, to help mankind. But Vaseegaran\'s former robot, Chitti, has been revived and is seeking revenge.'
  },
  {
    id: 'scifi-15',
    title: 'Mr. India',
    year: 1987,
    genre: 'Sci-Fi',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991276/pexels-photo-7991276.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Shekhar Kapur',
    mainActor: 'Anil Kapoor',
    description: 'A poor but big-hearted man takes orphaned children in his care. After discovering his scientist father\'s invisibility device, he rises to the occasion and fights to save his children and all of India from the clutches of the evil Mogambo.'
  },
  {
    id: 'scifi-16',
    title: 'Love Story 2050',
    year: 2008,
    genre: 'Sci-Fi',
    rating: 4.1,
    poster: 'https://images.pexels.com/photos/8111408/pexels-photo-8111408.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Harry Baweja',
    mainActor: 'Harman Baweja',
    description: 'With the help of his uncle, a man travels to the future to try and bring his girlfriend back to life.'
  },
  {
    id: 'scifi-17',
    title: 'Joker',
    year: 2012,
    genre: 'Sci-Fi',
    rating: 2.5,
    poster: 'https://images.pexels.com/photos/7991277/pexels-photo-7991277.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Shirish Kunder',
    mainActor: 'Akshay Kumar',
    description: 'Agastya, a NASA scientist, returns to his village to find his father. During his stay, he comes across the village folks who believe in superstition, and attempts to teach them the importance of science.'
  },
  {
    id: 'scifi-18',
    title: 'Alien: Covenant',
    year: 2017,
    genre: 'Sci-Fi',
    rating: 6.4,
    poster: 'https://images.pexels.com/photos/8111409/pexels-photo-8111409.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ridley Scott',
    mainActor: 'Michael Fassbender',
    description: 'The crew of a colony ship, bound for a remote planet, discover an uncharted paradise with a threat beyond their imagination.'
  },
  {
    id: 'scifi-19',
    title: 'Prometheus',
    year: 2012,
    genre: 'Sci-Fi',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/7991278/pexels-photo-7991278.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ridley Scott',
    mainActor: 'Noomi Rapace',
    description: 'Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.'
  },
  {
    id: 'scifi-20',
    title: 'Star Trek',
    year: 2009,
    genre: 'Sci-Fi',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/8111410/pexels-photo-8111410.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'J.J. Abrams',
    mainActor: 'Chris Pine',
    description: 'The brash James T. Kirk tries to live up to his father\'s legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.'
  },
  {
    id: 'scifi-21',
    title: 'District 9',
    year: 2009,
    genre: 'Sci-Fi',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/7991279/pexels-photo-7991279.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Neill Blomkamp',
    mainActor: 'Sharlto Copley',
    description: 'Violence ensues after an extraterrestrial race forced to live in slum-like conditions on Earth finds a kindred spirit in a government agent exposed to their biotechnology.'
  },
  {
    id: 'scifi-22',
    title: 'Elysium',
    year: 2013,
    genre: 'Sci-Fi',
    rating: 6.6,
    poster: 'https://images.pexels.com/photos/8111411/pexels-photo-8111411.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Neill Blomkamp',
    mainActor: 'Matt Damon',
    description: 'In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth.'
  },
  {
    id: 'scifi-23',
    title: 'Edge of Tomorrow',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/7991280/pexels-photo-7991280.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Doug Liman',
    mainActor: 'Tom Cruise',
    description: 'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.'
  },
  {
    id: 'scifi-24',
    title: 'Oblivion',
    year: 2013,
    genre: 'Sci-Fi',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/8111412/pexels-photo-8111412.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Joseph Kosinski',
    mainActor: 'Tom Cruise',
    description: 'A veteran assigned to extract Earth\'s remaining resources begins to question what he knows about his mission and himself.'
  },
  {
    id: 'scifi-25',
    title: 'Minority Report',
    year: 2002,
    genre: 'Sci-Fi',
    rating: 7.6,
    poster: 'https://images.pexels.com/photos/7991281/pexels-photo-7991281.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Steven Spielberg',
    mainActor: 'Tom Cruise',
    description: 'In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.'
  },
  {
    id: 'scifi-26',
    title: 'War of the Worlds',
    year: 2005,
    genre: 'Sci-Fi',
    rating: 6.5,
    poster: 'https://images.pexels.com/photos/8111413/pexels-photo-8111413.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Steven Spielberg',
    mainActor: 'Tom Cruise',
    description: 'As Earth is invaded by alien tripod fighting machines, one family fights for survival in this sci-fi action film.'
  },
  {
    id: 'scifi-27',
    title: 'I Am Legend',
    year: 2007,
    genre: 'Sci-Fi',
    rating: 7.2,
    poster: 'https://images.pexels.com/photos/7991282/pexels-photo-7991282.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Francis Lawrence',
    mainActor: 'Will Smith',
    description: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.'
  },
  {
    id: 'scifi-28',
    title: 'Men in Black',
    year: 1997,
    genre: 'Sci-Fi',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/8111414/pexels-photo-8111414.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Barry Sonnenfeld',
    mainActor: 'Tommy Lee Jones',
    description: 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.'
  },
  {
    id: 'scifi-29',
    title: 'Independence Day',
    year: 1996,
    genre: 'Sci-Fi',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/7991283/pexels-photo-7991283.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Roland Emmerich',
    mainActor: 'Will Smith',
    description: 'The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind\'s best weapon is the will to survive.'
  },
  {
    id: 'scifi-30',
    title: 'Transformers',
    year: 2007,
    genre: 'Sci-Fi',
    rating: 7.0,
    poster: 'https://images.pexels.com/photos/8111415/pexels-photo-8111415.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Michael Bay',
    mainActor: 'Shia LaBeouf',
    description: 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth.'
  }
];

// Thriller Movies
const thrillerMovies: Movie[] = [
  {
    id: 'thriller-1',
    title: 'Se7en',
    year: 1995,
    genre: 'Thriller',
    rating: 8.6,
    poster: 'https://images.pexels.com/photos/7991284/pexels-photo-7991284.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Morgan Freeman',
    description: 'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.'
  },
  {
    id: 'thriller-2',
    title: 'The Silence of the Lambs',
    year: 1991,
    genre: 'Thriller',
    rating: 8.6,
    poster: 'https://images.pexels.com/photos/8111416/pexels-photo-8111416.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Jonathan Demme',
    mainActor: 'Jodie Foster',
    description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.'
  },
  {
    id: 'thriller-3',
    title: 'Fight Club',
    year: 1999,
    genre: 'Thriller',
    rating: 8.8,
    poster: 'https://images.pexels.com/photos/7991285/pexels-photo-7991285.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Brad Pitt',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club.'
  },
  {
    id: 'thriller-4',
    title: 'The Sixth Sense',
    year: 1999,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111417/pexels-photo-8111417.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'M. Night Shyamalan',
    mainActor: 'Bruce Willis',
    description: 'A boy who communicates with spirits seeks the help of a disheartened child psychologist.'
  },
  {
    id: 'thriller-5',
    title: 'Zodiac',
    year: 2007,
    genre: 'Thriller',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/7991286/pexels-photo-7991286.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Jake Gyllenhaal',
    description: 'In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer.'
  },
  {
    id: 'thriller-6',
    title: 'Gone Girl',
    year: 2014,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111418/pexels-photo-8111418.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Ben Affleck',
    description: 'With his wife\'s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it\'s suspected that he may not be innocent.'
  },
  {
    id: 'thriller-7',
    title: 'Shutter Island',
    year: 2010,
    genre: 'Thriller',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991287/pexels-photo-7991287.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Martin Scorsese',
    mainActor: 'Leonardo DiCaprio',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.'
  },
  {
    id: 'thriller-8',
    title: 'Prisoners',
    year: 2013,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111419/pexels-photo-8111419.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Denis Villeneuve',
    mainActor: 'Hugh Jackman',
    description: 'When his daughter and her friend go missing, a desperate father takes matters into his own hands as the police pursue multiple leads.'
  },
  {
    id: 'thriller-9',
    title: 'The Prestige',
    year: 2006,
    genre: 'Thriller',
    rating: 8.5,
    poster: 'https://images.pexels.com/photos/7991288/pexels-photo-7991288.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher Nolan',
    mainActor: 'Christian Bale',
    description: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.'
  },
  {
    id: 'thriller-10',
    title: 'Memento',
    year: 2000,
    genre: 'Thriller',
    rating: 8.4,
    poster: 'https://images.pexels.com/photos/8111420/pexels-photo-8111420.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Christopher Nolan',
    mainActor: 'Guy Pearce',
    description: 'A man with short-term memory loss attempts to track down his wife\'s murderer.'
  },
  {
    id: 'thriller-11',
    title: 'Kahaani',
    year: 2012,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/7991289/pexels-photo-7991289.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Sujoy Ghosh',
    mainActor: 'Vidya Balan',
    description: 'A pregnant woman\'s search for her missing husband takes her from London to Kolkata, but everyone she meets there denies having ever met him.'
  },
  {
    id: 'thriller-12',
    title: 'Drishyam',
    year: 2015,
    genre: 'Thriller',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/8111421/pexels-photo-8111421.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Nishikant Kamat',
    mainActor: 'Ajay Devgn',
    description: 'Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.'
  },
  {
    id: 'thriller-13',
    title: 'Andhadhun',
    year: 2018,
    genre: 'Thriller',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/7991290/pexels-photo-7991290.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Sriram Raghavan',
    mainActor: 'Ayushmann Khurrana',
    description: 'A series of mysterious events change the life of a blind pianist who now must report a crime that was actually never witnessed by him.'
  },
  {
    id: 'thriller-14',
    title: 'Talvar',
    year: 2015,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111422/pexels-photo-8111422.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Meghna Gulzar',
    mainActor: 'Irrfan Khan',
    description: 'An experienced investigator confronts several conflicting theories about the perpetrators of a violent double homicide.'
  },
  {
    id: 'thriller-15',
    title: 'Special 26',
    year: 2013,
    genre: 'Thriller',
    rating: 8.0,
    poster: 'https://images.pexels.com/photos/7991291/pexels-photo-7991291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Neeraj Pandey',
    mainActor: 'Akshay Kumar',
    description: 'A group of con artists pose as CBI officers and raid the homes of corrupt businessmen and politicians.'
  },
  {
    id: 'thriller-16',
    title: 'A Wednesday',
    year: 2008,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111423/pexels-photo-8111423.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Neeraj Pandey',
    mainActor: 'Anupam Kher',
    description: 'A man calls the Mumbai police, and tells them he has placed five different bombs in the city -- all set to go off in some time.'
  },
  {
    id: 'thriller-17',
    title: 'Ugly',
    year: 2013,
    genre: 'Thriller',
    rating: 7.9,
    poster: 'https://images.pexels.com/photos/7991292/pexels-photo-7991292.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anurag Kashyap',
    mainActor: 'Rahul Bhat',
    description: 'The case of a missing girl takes us through a journey of human greed and brushes upon the egos and repressed emotions of the characters.'
  },
  {
    id: 'thriller-18',
    title: 'Raman Raghav 2.0',
    year: 2016,
    genre: 'Thriller',
    rating: 7.3,
    poster: 'https://images.pexels.com/photos/8111424/pexels-photo-8111424.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Anurag Kashyap',
    mainActor: 'Nawazuddin Siddiqui',
    description: 'Ramanna, a maniacal serial killer, finds a soulmate in Raghavan, a policeman, who inspects his murder cases.'
  },
  {
    id: 'thriller-19',
    title: 'Badlapur',
    year: 2015,
    genre: 'Thriller',
    rating: 7.4,
    poster: 'https://images.pexels.com/photos/7991293/pexels-photo-7991293.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Sriram Raghavan',
    mainActor: 'Varun Dhawan',
    description: 'Raghu begins walking a fine line between good and evil as he exacts violent revenge on two criminals who killed his family 15 years ago.'
  },
  {
    id: 'thriller-20',
    title: 'Ek Hasina Thi',
    year: 2004,
    genre: 'Thriller',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/8111425/pexels-photo-8111425.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Sriram Raghavan',
    mainActor: 'Urmila Matondkar',
    description: 'Sarika is sentenced to two years in prison for possessing cocaine. She believes she was framed by her boyfriend Karan.'
  },
  {
    id: 'thriller-21',
    title: 'The Girl with the Dragon Tattoo',
    year: 2011,
    genre: 'Thriller',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/7991294/pexels-photo-7991294.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Fincher',
    mainActor: 'Daniel Craig',
    description: 'A journalist is aided by a young female hacker in his search for the killer of a woman who has been dead for forty years.'
  },
  {
    id: 'thriller-22',
    title: 'Heat',
    year: 1995,
    genre: 'Thriller',
    rating: 8.2,
    poster: 'https://images.pexels.com/photos/8111426/pexels-photo-8111426.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Michael Mann',
    mainActor: 'Al Pacino',
    description: 'A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.'
  },
  {
    id: 'thriller-23',
    title: 'The Departed',
    year: 2006,
    genre: 'Thriller',
    rating: 8.5,
    poster: 'https://images.pexels.com/photos/7991295/pexels-photo-7991295.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Martin Scorsese',
    mainActor: 'Leonardo DiCaprio',
    description: 'An undercover cop and a police informant play a cat and mouse game with each other as they attempt to find out each other\'s identity.'
  },
  {
    id: 'thriller-24',
    title: 'Collateral',
    year: 2004,
    genre: 'Thriller',
    rating: 7.5,
    poster: 'https://images.pexels.com/photos/8111427/pexels-photo-8111427.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Michael Mann',
    mainActor: 'Tom Cruise',
    description: 'A cab driver finds himself the hostage of an engaging contract killer as he makes his rounds from hit to hit during one night in Los Angeles.'
  },
  {
    id: 'thriller-25',
    title: 'No Country for Old Men',
    year: 2007,
    genre: 'Thriller',
    rating: 8.1,
    poster: 'https://images.pexels.com/photos/8111428/pexels-photo-8111428.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Ethan Coen',
    mainActor: 'Tommy Lee Jones',
    description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.'
  },
  {
    id: 'thriller-26',
    title: 'Nightcrawler',
    year: 2014,
    genre: 'Thriller',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/7991296/pexels-photo-7991296.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Dan Gilroy',
    mainActor: 'Jake Gyllenhaal',
    description: 'When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant.'
  },
  {
    id: 'thriller-27',
    title: 'Drive',
    year: 2011,
    genre: 'Thriller',
    rating: 7.8,
    poster: 'https://images.pexels.com/photos/8111429/pexels-photo-8111429.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Nicolas Winding Refn',
    mainActor: 'Ryan Gosling',
    description: 'A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor.'
  },
  {
    id: 'thriller-28',
    title: 'Sicario',
    year: 2015,
    genre: 'Thriller',
    rating: 7.6,
    poster: 'https://images.pexels.com/photos/7991297/pexels-photo-7991297.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Denis Villeneuve',
    mainActor: 'Emily Blunt',
    description: 'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.'
  },
  {
    id: 'thriller-29',
    title: 'Wind River',
    year: 2017,
    genre: 'Thriller',
    rating: 7.7,
    poster: 'https://images.pexels.com/photos/8111430/pexels-photo-8111430.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'Taylor Sheridan',
    mainActor: 'Jeremy Renner',
    description: 'A wildlife officer, who is haunted by a tragedy that happened because of him, teams up with an FBI agent in solving a murder of a young woman on a Wyoming Native American reservation.'
  },
  {
    id: 'thriller-30',
    title: 'Hell or High Water',
    year: 2016,
    genre: 'Thriller',
    rating: 7.6,
    poster: 'https://images.pexels.com/photos/7991298/pexels-photo-7991298.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    director: 'David Mackenzie',
    mainActor: 'Chris Pine',
    description: 'A divorced father and his ex-con older brother resort to a desperate scheme in order to save their family\'s ranch in West Texas.'
  }
];

// Combine all movies
export const movies: Movie[] = [
  ...actionMovies,
  ...dramaMovies,
  ...comedyMovies,
  ...sciFiMovies,
  ...thrillerMovies
];

// Helper function to get movies by genre
export const getMoviesByGenre = (genre: Genre): Movie[] => {
  if (genre === 'All') {
    return movies;
  }
  return movies.filter(movie => movie.genre === genre);
};

// Helper function to get random relevance score
export const getRandomRelevanceScore = (): number => {
  return Math.floor(Math.random() * 21) + 70; // Random number between 70-90
};