// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Play, Star, Clock, TrendingUp as Trending, ThumbsUp, Award, Search, User } from 'lucide-react';

// const Home = () => {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [currentUser, setCurrentUser] = useState(() => {
//     const userId = localStorage.getItem('userId');
//     const adminToken = localStorage.getItem('adminToken');
//     return userId ? {
//       name: "John Doe", // This should be fetched from the backend
//       email: "john@example.com",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//       isAdmin: !!adminToken
//     } : null;
//   });
//   const navigate = useNavigate();

//   const allMovies = [
//     // Hollywood Movies
//     { id: 1, title: "Inception", description: "A thief who steals corporate secrets...", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1", rating: "8.8", duration: "2h 28min", genre: ["Action", "Sci-Fi"], director: "Christopher Nolan", year: "2010" },
//     { id: 2, title: "Interstellar", description: "A team of explorers travel through a wormhole...", image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0", rating: "8.6", duration: "2h 49min", genre: ["Sci-Fi", "Adventure"], director: "Christopher Nolan", year: "2014" },
//     { id: 3, title: "The Dark Knight", description: "Batman faces the Joker...", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", rating: "9.0", duration: "2h 32min", genre: ["Action", "Crime"], director: "Christopher Nolan", year: "2008" },
//     { id: 4, title: "Dune", description: "A noble family controls the desert planet...", image: "https://images.unsplash.com/photo-1547235001-d703406d3f17", rating: "8.0", duration: "2h 35min", genre: ["Sci-Fi", "Adventure"], director: "Denis Villeneuve", year: "2021" },
//     { id: 5, title: "The Shawshank Redemption", description: "Two imprisoned men bond...", image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3", rating: "9.3", duration: "2h 22min", genre: ["Drama"], director: "Frank Darabont", year: "1994" },
    
//     // Bollywood Movies
//     { id: 6, title: "3 Idiots", description: "Three friends in engineering college...", image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b", rating: "8.4", duration: "2h 50min", genre: ["Comedy", "Drama"], director: "Rajkumar Hirani", year: "2009" },
//     { id: 7, title: "Dangal", description: "A wrestler trains his daughters...", image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95a79", rating: "8.4", duration: "2h 41min", genre: ["Biography", "Drama"], director: "Nitesh Tiwari", year: "2016" },
//     { id: 8, title: "Sholay", description: "Two criminals hired to catch a bandit...", image: "https://images.unsplash.com/photo-1579373905675-2e57fb2e142d", rating: "8.2", duration: "3h 24min", genre: ["Action", "Adventure"], director: "Ramesh Sippy", year: "1975" },
//     { id: 9, title: "PK", description: "An alien stranded on Earth...", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", rating: "8.1", duration: "2h 33min", genre: ["Comedy", "Drama"], director: "Rajkumar Hirani", year: "2014" },
//     { id: 10, title: "Lagaan", description: "Villagers stake their future on cricket...", image: "https://images.unsplash.com/photo-1620207419186-13b2e9624930", rating: "8.1", duration: "3h 44min", genre: ["Drama", "Sport"], director: "Ashutosh Gowariker", year: "2001" }
//   ];

//   const featuredMovie = allMovies[0];
//   const recommendations = allMovies.slice(1, 6);
//   const popularMovies = allMovies.slice(6, 10);

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     setIsLoggedIn(false);
//     setCurrentUser(null);
//     setShowUserDropdown(false);
//     navigate('/');
//   };

//   const handleMovieClick = (movie) => {
//     if (isLoggedIn) {
//       setSelectedMovie(movie);
//     } else {
//       navigate('/login');
//     }
//   };

//   const filteredMovies = allMovies.filter(movie =>
//     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const MovieCard = ({ movie }) => (
//     <div 
//       onClick={() => handleMovieClick(movie)}
//       className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl cursor-pointer group ${
//         !isLoggedIn ? 'opacity-80 hover:opacity-100' : ''
//       }`}
//     >
//       <div className="relative">
//         <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
//         <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
//           <Play className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
//         </div>
//         {!isLoggedIn && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//             <div className="bg-gray-900/90 text-white px-3 py-1 rounded-full text-sm">
//               Login to view
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <Star className="h-5 w-5 text-yellow-400 mr-1" />
//             <span className="text-gray-300">{movie.rating}</span>
//           </div>
//           <span className="text-gray-400 text-sm">{movie.year}</span>
//         </div>
//       </div>
//     </div>
//   );

//   const MovieDetails = ({ movie, onClose }) => (
//     <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//       <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="relative">
//           <button 
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 z-10 hover:bg-gray-700"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <div className="relative h-64 w-full">
//             <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
//           </div>
//         </div>
//         <div className="p-6">
//           <h1 className="text-3xl font-bold text-white mb-2">{movie.title}</h1>
//           <div className="flex flex-wrap items-center gap-4 mb-4">
//             <div className="flex items-center">
//               <Star className="h-5 w-5 text-yellow-400 mr-1" />
//               <span className="text-gray-300">{movie.rating}</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-5 w-5 text-gray-300 mr-1" />
//               <span>{movie.duration}</span>
//             </div>
//             <div className="text-gray-400">{movie.year}</div>
//           </div>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {movie.genre.map((genre, index) => (
//               <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
//                 {genre}
//               </span>
//             ))}
//           </div>
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold text-white mb-2">Description</h2>
//             <p className="text-gray-300">{movie.description}</p>
//           </div>
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold text-white mb-2">Director</h2>
//             <p className="text-gray-300">{movie.director}</p>
//           </div>
//           <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
//             <Play className="h-5 w-5" /> Watch Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="pt-16 bg-gray-900 min-h-screen">
//       {/* Search Bar with User Dropdown */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-center gap-4">
//           <div className="relative flex-1">
//             <div className="flex items-center bg-gray-800 rounded-lg p-2">
//               <Search className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search movies..."
//                 className="bg-transparent text-white w-full focus:outline-none"
//               />
//             </div>
//             {searchQuery && (
//               <div className="absolute top-full left-0 right-0 bg-gray-800 rounded-lg mt-2 max-h-96 overflow-y-auto z-10 shadow-xl">
//                 {filteredMovies.map(movie => (
//                   <div
//                     key={movie.id}
//                     onClick={() => {
//                       handleMovieClick(movie);
//                       setSearchQuery('');
//                     }}
//                     className="p-3 hover:bg-gray-700 cursor-pointer text-white flex items-center gap-4"
//                   >
//                     <img src={movie.image} alt={movie.title} className="w-16 h-24 object-cover rounded" />
//                     <div>
//                       <h3 className="font-semibold">{movie.title}</h3>
//                       <p className="text-sm text-gray-400">{movie.year} • {movie.rating}</p>
//                     </div>
//                   </div>
//                 ))}
//                 {filteredMovies.length === 0 && (
//                   <div className="p-3 text-gray-400">No movies found</div>
//                 )}
//               </div>
//             )}
//           </div>
          
//           {/* User Dropdown with Profile Button */}
//           <div className="relative">
//             <button 
//               onClick={() => setShowUserDropdown(!showUserDropdown)}
//               className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-full p-1 pr-3 transition-colors duration-200"
//             >
//               {isLoggedIn ? (
//                 <>
//                   <img 
//                     src={currentUser.avatar} 
//                     alt={currentUser.name} 
//                     className="h-8 w-8 rounded-full object-cover"
//                   />
//                   <span className="text-gray-200 text-sm hidden md:inline">{currentUser.name}</span>
//                 </>
//               ) : (
//                 <div className="p-1">
//                   <User className="h-6 w-6 text-gray-300" />
//                 </div>
//               )}
//             </button>
            
//             {showUserDropdown && (
//               <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-700">
//                 {isLoggedIn ? (
//                   <>
//                     <div className="px-4 py-3 border-b border-gray-700">
//                       <p className="text-sm font-medium text-white">{currentUser.name}</p>
//                       <p className="text-xs text-gray-400 truncate">{currentUser.email}</p>
//                     </div>
//                     {currentUser.isAdmin && (
//                       <button
//                         onClick={() => {
//                           navigate('/admin');
//                           setShowUserDropdown(false);
//                         }}
//                         className="w-full text-left px-4 py-2 text-sm text-indigo-400 hover:bg-gray-700 flex items-center"
//                       >
//                         <span className="mr-2">⚙️</span> Admin Dashboard
//                       </button>
//                     )}
//                     <button
//                       onClick={() => {
//                         navigate('/profile');
//                         setShowUserDropdown(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       My Profile
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigate('/watchlist');
//                         setShowUserDropdown(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       My Watchlist
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigate('/favorites');
//                         setShowUserDropdown(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       My Favorites
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigate('/history');
//                         setShowUserDropdown(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       Watch History
//                     </button>
//                     <div className="border-t border-gray-700"></div>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       Sign Out
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => {
//                         navigate('/login');
//                         setShowUserDropdown(false);
//                         handleLogin();
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => {
//                         navigate('/register');
//                         setShowUserDropdown(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
//                     >
//                       Create Account
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative h-[70vh] w-full bg-gray-900">
//         <img 
//           src={featuredMovie.image} 
//           alt={featuredMovie.title} 
//           className="w-full h-full object-cover opacity-70" 
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
//             <div className="max-w-2xl">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//                 {featuredMovie.title}
//               </h1>
//               <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
//                 {featuredMovie.description}
//               </p>
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="flex items-center">
//                   <Star className="h-5 w-5 text-yellow-400 mr-1" />
//                   <span>{featuredMovie.rating}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-300 mr-1" />
//                   <span>{featuredMovie.duration}</span>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => handleMovieClick(featuredMovie)}
//                 className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition duration-300 shadow-lg"
//               >
//                 <Play className="h-5 w-5" /> Watch Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Movies Sections */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="mb-16">
//           <div className="flex items-center mb-8">
//             <ThumbsUp className="h-6 w-6 text-red-500 mr-2" />
//             <h2 className="text-3xl font-bold text-white">Recommended</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//             {recommendations.map(movie => <MovieCard key={movie.id} movie={movie} />)}
//           </div>
//         </div>

//         <div className="mb-16">
//           <div className="flex items-center mb-8">
//             <Trending className="h-6 w-6 text-red-500 mr-2" />
//             <h2 className="text-3xl font-bold text-white">Popular Now</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//             {popularMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
//           </div>
//         </div>
//       </div>

//       {selectedMovie && (
//         <MovieDetails 
//           movie={selectedMovie}
//           onClose={() => setSelectedMovie(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;





// SECOND CODE WORKING
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Play, Star, Clock, TrendingUp, ThumbsUp, Search, User, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import MovieDetails from './MovieDetails';

// const Home = () => {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const [currentUser, setCurrentUser] = useState(() => {
//     const userId = localStorage.getItem('userId');
//     const adminToken = localStorage.getItem('adminToken');
//     return userId
//       ? {
//           name: 'John Doe',
//           email: 'john@example.com',
//           avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
//           isAdmin: !!adminToken,
//         }
//       : null;
//   });
//   const [heroIndex, setHeroIndex] = useState(0);
//   const navigate = useNavigate();
//   const heroRef = useRef(null);

//   const allMovies = [
//     { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets...', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1', rating: '8.8', duration: '2h 28min', genre: ['Action', 'Sci-Fi'], director: 'Christopher Nolan', year: '2010', trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0' },
//     { id: 2, title: 'Interstellar', description: 'A team of explorers travel through a wormhole...', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0', rating: '8.6', duration: '2h 49min', genre: ['Sci-Fi', 'Adventure'], director: 'Christopher Nolan', year: '2014', trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E' },
//     { id: 3, title: 'The Dark Knight', description: 'Batman faces the Joker...', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26', rating: '9.0', duration: '2h 32min', genre: ['Action', 'Crime'], director: 'Christopher Nolan', year: '2008', trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY' },
//     { id: 4, title: 'Dune', description: 'A noble family controls the desert planet...', image: 'https://images.unsplash.com/photo-1547235001-d703406d3f17', rating: '8.0', duration: '2h 35min', genre: ['Sci-Fi', 'Adventure'], director: 'Denis Villeneuve', year: '2021', trailer: 'https://www.youtube.com/watch?v=n9xhJrPZrk4' },
//     { id: 5, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond...', image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3', rating: '9.3', duration: '2h 22min', genre: ['Drama'], director: 'Frank Darabont', year: '1994', trailer: 'https://www.youtube.com/watch?v=6hB3S9bIaco' },
//     { id: 6, title: '3 Idiots', description: 'Three friends in engineering college...', image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b', rating: '8.4', duration: '2h 50min', genre: ['Comedy', 'Drama'], director: 'Rajkumar Hirani', year: '2009', trailer: 'https://www.youtube.com/watch?v=xvszmNXdM4w' },
//     { id: 7, title: 'Dangal', description: 'A wrestler trains his daughters...', image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95a79', rating: '8.4', duration: '2h 41min', genre: ['Biography', 'Drama'], director: 'Nitesh Tiwari', year: '2016', trailer: 'https://www.youtube.com/watch?v=x_7YlGv9u1g' },
//     { id: 8, title: 'Sholay', description: 'Two criminals hired to catch a bandit...', image: 'https://images.unsplash.com/photo-1579373905675-2e57fb2e142d', rating: '8.2', duration: '3h 24min', genre: ['Action', 'Adventure'], director: 'Ramesh Sippy', year: '1975', trailer: 'https://www.youtube.com/watch?v=0Z1h1m1rZNY' },
//     { id: 9, title: 'PK', description: 'An alien stranded on Earth...', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', rating: '8.1', duration: '2h 33min', genre: ['Comedy', 'Drama'], director: 'Rajkumar Hirani', year: '2014', trailer: 'https://www.youtube.com/watch?v=SOXWc32k4zA' },
//     { id: 10, title: 'Lagaan', description: 'Villagers stake their future on cricket...', image: 'https://images.unsplash.com/photo-1620207419186-13b2e9624930', rating: '8.1', duration: '3h 44min', genre: ['Drama', 'Sport'], director: 'Ashutosh Gowariker', year: '2001', trailer: 'https://www.youtube.com/watch?v=0Z1h1m1rZNY' },
//   ];

//   const featuredMovies = allMovies.slice(0, 3);
//   const recommendations = allMovies.slice(3, 8);
//   const popularMovies = allMovies.slice(8, 10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroIndex((prev) => (prev + 1) % featuredMovies.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [featuredMovies.length]);

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     setIsLoggedIn(false);
//     setCurrentUser(null);
//     setShowUserDropdown(false);
//     navigate('/');
//   };

//   const handleMovieClick = (movie) => {
//     if (isLoggedIn) {
//       setSelectedMovie(movie);
//     } else {
//       navigate('/login');
//     }
//   };

//   const filteredMovies = allMovies.filter((movie) =>
//     movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const MovieCard = ({ movie }) => (
//     <motion.div
//       whileHover={{ scale: 1.15, zIndex: 10, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
//       className="relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-900/30 border border-gray-700/50"
//       onClick={() => handleMovieClick(movie)}
//     >
//       <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent group-hover:bg-black/60 transition-all duration-500"
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           whileHover={{ scale: 1 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <Play className="h-16 w-16 text-white/90 drop-shadow-lg" />
//         </motion.div>
//       </motion.div>
//       <div className="absolute bottom-0 left-0 right-0 p-4">
//         <h3 className="text-xl font-bold text-white drop-shadow-md">{movie.title}</h3>
//         <div className="flex items-center gap-3 text-sm text-gray-300">
//           <Star className="h-5 w-5 text-yellow-400" />
//           {movie.rating} • {movie.year}
//         </div>
//       </div>
//       {!isLoggedIn && (
//         <motion.div
//           className="absolute inset-0 bg-black/80 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <span className="text-white bg-gradient-to-r from-red-600 to-purple-600 px-6 py-3 rounded-full text-sm font-semibold">
//             Login to Watch
//           </span>
//         </motion.div>
//       )}
//     </motion.div>
//   );

//   return (
//     <div className="relative bg-black min-h-screen text-white overflow-hidden">
//       {/* Starry Background */}
//       <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1447433613544-6da2c6e6c868')] bg-cover opacity-20 animate-pulse" />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/50 to-black/80" />

//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-xl z-50 border-b border-gray-700/30"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <motion.h1
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
//           >
//             CosmoFlix
//           </motion.h1>
//           <div className="flex items-center gap-8">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="relative"
//             >
//               <div className="flex items-center bg-gray-800/40 rounded-full px-4 py-2 border border-gray-600/30 shadow-inner">
//                 <Search className="h-5 w-5 text-gray-300 mr-3" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search for movies..."
//                   className="bg-transparent text-white w-56 focus:outline-none placeholder-gray-400"
//                 />
//               </div>
//               <AnimatePresence>
//                 {searchQuery && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute top-full left-0 right-0 bg-gray-900/95 rounded-2xl mt-3 max-h-96 overflow-y-auto z-50 shadow-2xl border border-gray-700/50"
//                   >
//                     {filteredMovies.map((movie) => (
//                       <motion.div
//                         key={movie.id}
//                         whileHover={{ backgroundColor: '#1a1a1a' }}
//                         onClick={() => {
//                           handleMovieClick(movie);
//                           setSearchQuery('');
//                         }}
//                         className="p-4 cursor-pointer flex items-center gap-4"
//                       >
//                         <img src={movie.image} alt={movie.title} className="w-16 h-24 object-cover rounded-lg" />
//                         <div>
//                           <h3 className="font-semibold text-white">{movie.title}</h3>
//                           <p className="text-sm text-gray-400">{movie.year} • {movie.rating}</p>
//                         </div>
//                       </motion.div>
//                     ))}
//                     {filteredMovies.length === 0 && (
//                       <div className="p-4 text-gray-400 text-center">No movies found</div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowUserDropdown(!showUserDropdown)}
//                 className="flex items-center gap-2 bg-gray-800/40 rounded-full p-2 border border-gray-600/30 shadow-inner"
//               >
//                 {isLoggedIn ? (
//                   <img
//                     src={currentUser.avatar}
//                     alt={currentUser.name}
//                     className="h-10 w-10 rounded-full object-cover border-2 border-gradient-to-r from-red-500 to-purple-500"
//                   />
//                 ) : (
//                   <User className="h-6 w-6 text-gray-300" />
//                 )}
//               </motion.button>
//               <AnimatePresence>
//                 {showUserDropdown && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9, y: -10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.9, y: -10 }}
//                     className="absolute right-0 mt-4 w-72 bg-gray-900/95 rounded-2xl shadow-2xl z-50 border border-gray-700/50 p-4"
//                   >
//                     {isLoggedIn ? (
//                       <>
//                         <div className="flex items-center gap-4 mb-4 border-b border-gray-700/50 pb-3">
//                           <img
//                             src={currentUser.avatar}
//                             alt={currentUser.name}
//                             className="h-14 w-14 rounded-full border border-gray-600"
//                           />
//                           <div>
//                             <p className="text-white font-semibold text-lg">{currentUser.name}</p>
//                             <p className="text-xs text-gray-400">{currentUser.email}</p>
//                           </div>
//                         </div>
//                         {currentUser.isAdmin && (
//                           <button
//                             onClick={() => {
//                               navigate('/admin');
//                               setShowUserDropdown(false);
//                             }}
//                             className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                           >
//                             <span className="text-red-500">⚙️</span> Admin Dashboard
//                           </button>
//                         )}
//                         <button
//                           onClick={() => {
//                             navigate('/profile');
//                             setShowUserDropdown(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-blue-500">👤</span> Profile
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate('/watchlist');
//                             setShowUserDropdown(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-green-500">📋</span> Watchlist
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate('/favorites');
//                             setShowUserDropdown(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-pink-500">❤️</span> Favorites
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate('/history');
//                             setShowUserDropdown(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-yellow-500">🕒</span> Watch History
//                         </button>
//                         <button
//                           onClick={handleLogout}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-red-500">🚪</span> Sign Out
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={() => {
//                             navigate('/login');
//                             setShowUserDropdown(false);
//                             handleLogin();
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-blue-500">🔑</span> Sign In
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigate('/signup');
//                             setShowUserDropdown(false);
//                           }}
//                           className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-3"
//                         >
//                           <span className="text-green-500">✨</span> Sign Up
//                         </button>
//                       </>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <div className="relative h-[90vh] w-full" ref={heroRef}>
//         {featuredMovies.map((movie, index) => (
//           <motion.div
//             key={movie.id}
//             initial={{ opacity: 0, scale: 1.2 }}
//             animate={{
//               opacity: index === heroIndex ? 1 : 0,
//               scale: index === heroIndex ? 1 : 1.2,
//             }}
//             transition={{ duration: 1, ease: 'easeInOut' }}
//             className="absolute inset-0"
//           >
//             <img
//               src={movie.image}
//               alt={movie.title}
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
//             <motion.div
//               className="absolute bottom-20 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               <motion.h1
//                 className="text-5xl md:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl"
//                 animate={{ textShadow: ['0 0 10px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.8)', '0 0 10px rgba(255,255,255,0.5)'] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 {movie.title}
//               </motion.h1>
//               <motion.p
//                 className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {movie.description}
//               </motion.p>
//               <motion.div
//                 className="flex items-center gap-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)' }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleMovieClick(movie)}
//                   className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold text-lg shadow-lg"
//                 >
//                   <Play className="h-6 w-6" /> Play Now
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleMovieClick(movie)}
//                   className="bg-gray-800/70 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold text-lg shadow-lg"
//                 >
//                   <ThumbsUp className="h-6 w-6" /> More Info
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         ))}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
//           {featuredMovies.map((_, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.3 }}
//               onClick={() => setHeroIndex(index)}
//               className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                 index === heroIndex ? 'bg-red-600 scale-125' : 'bg-gray-500/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Movie Sections */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-bold text-white mb-10 flex items-center">
//             <ThumbsUp className="h-8 w-8 text-red-600 mr-4" /> Recommended
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//             {recommendations.map((movie) => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </div>
//         </motion.section>
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-bold text-white mb-10 flex items-center">
//             <TrendingUp className="h-8 w-8 text-red-600 mr-4" /> Trending Now
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//             {popularMovies.map((movie) => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </div>
//         </motion.section>
//       </div>

//       <AnimatePresence>
//         {selectedMovie && (
//           <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Home;




import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Star, Clock, TrendingUp, ThumbsUp, Search, User, X, Settings, UserCircle, List, Heart, History, LogOut, LogIn, UserPlus } from 'lucide-react'; // Added more icons
import { motion, AnimatePresence } from 'framer-motion';
import MovieDetails from './MovieDetails'; // Assuming this component exists

// --- Animation Variants (Optional but cleaner) ---
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1, // Stagger animation for children (cards)
    },
  },
};

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token')); // Check on mount
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    // Fetch user details more robustly if needed, this is placeholder
    const userId = localStorage.getItem('userId');
    const adminToken = localStorage.getItem('adminToken');
    if (!userId) return null;
    return {
      name: localStorage.getItem('userName') || 'User', // Example: Get name from storage
      email: localStorage.getItem('userEmail') || 'user@example.com', // Example: Get email
      avatar: localStorage.getItem('userAvatar') || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`, // Default avatar
      isAdmin: !!adminToken,
    };
  });
  const [heroIndex, setHeroIndex] = useState(0);
  const navigate = useNavigate();
  const heroRef = useRef(null); // Keep ref if needed for specific interactions
  const userDropdownRef = useRef(null); // Ref for dropdown closing logic

  // --- Movie Data (Ensure images are high quality) ---
  const allMovies = [
    { id: 1, title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology...', image: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', rating: '8.8', duration: '2h 28min', genre: ['Action', 'Sci-Fi'], director: 'Christopher Nolan', year: '2010', trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0' },
    { id: 2, title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival...', image: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', rating: '8.6', duration: '2h 49min', genre: ['Sci-Fi', 'Adventure'], director: 'Christopher Nolan', year: '2014', trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E' },
    { id: 3, title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...', image: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: '9.0', duration: '2h 32min', genre: ['Action', 'Crime'], director: 'Christopher Nolan', year: '2008', trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY' },
    { id: 4, title: 'Dune', description: 'Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet...', image: 'https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', rating: '7.9', duration: '2h 35min', genre: ['Sci-Fi', 'Adventure'], director: 'Denis Villeneuve', year: '2021', trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4' },
    { id: 5, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', image: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', rating: '9.3', duration: '2h 22min', genre: ['Drama'], director: 'Frank Darabont', year: '1994', trailer: 'https://www.youtube.com/watch?v=NmzuHjWmXOc' },
    { id: 6, title: '3 Idiots', description: 'Two friends are searching for their long lost companion. They revisit their college days...', image: 'https://image.tmdb.org/t/p/original/66A9454EP1dROp77f7zJ78fPELi.jpg', rating: '8.0', duration: '2h 50min', genre: ['Comedy', 'Drama'], director: 'Rajkumar Hirani', year: '2009', trailer: 'https://www.youtube.com/watch?v=K0e-dQkLhdE' },
    { id: 7, title: 'Dangal', description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory...', image: 'https://image.tmdb.org/t/p/original/p2GyADhHnRVOEfhVx7N2s4BqVD4.jpg', rating: '7.9', duration: '2h 41min', genre: ['Action', 'Biography', 'Drama'], director: 'Nitesh Tiwari', year: '2016', trailer: 'https://www.youtube.com/watch?v=x_7YlGv9u1g' },
    { id: 8, title: 'Sholay', description: 'After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws...', image: 'https://image.tmdb.org/t/p/original/ofR6gFIRAQRQHBCyziOrfXb7ZAl.jpg', rating: '8.0', duration: '3h 24min', genre: ['Action', 'Adventure', 'Comedy'], director: 'Ramesh Sippy', year: '1975', trailer: 'https://www.youtube.com/watch?v=hQxQVI06uec' },
    { id: 9, title: 'PK', description: 'An alien on Earth loses the remote device he uses to communicate with his spaceship...', image: 'https://image.tmdb.org/t/p/original/psMqAPyw7FqnM5hDe04ZGRMxL9h.jpg', rating: '7.8', duration: '2h 33min', genre: ['Comedy', 'Drama', 'Sci-Fi'], director: 'Rajkumar Hirani', year: '2014', trailer: 'https://www.youtube.com/watch?v=SOXWc32k4zA' },
    { id: 10, title: 'Lagaan', description: 'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.', image: 'https://image.tmdb.org/t/p/original/qcjB7gNM2EMOOz4QWzkjGvO7fmJ.jpg', rating: '7.9', duration: '3h 44min', genre: ['Adventure', 'Drama', 'Musical'], director: 'Ashutosh Gowariker', year: '2001', trailer: 'https://www.youtube.com/watch?v=oSIGQ0Mkx2k' },
  ];

  const featuredMovies = allMovies.slice(0, 3);
  const recommendations = allMovies.slice(3, 9); // Increased count slightly
  const popularMovies = allMovies.slice(9, 15); // Increased count slightly

  // --- Hero Carousel Effect ---
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 8000); // Slightly longer interval
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  // --- Close Dropdown on Outside Click ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Navigation Handlers ---
  const handleLoginRedirect = () => navigate('/login');
  const handleSignupRedirect = () => navigate('/signup');

  const handleLogout = () => {
    // Clear all relevant local storage items
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAvatar');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setShowUserDropdown(false);
    navigate('/'); // Refresh or redirect as needed
  };

  const handleMovieClick = (movie) => {
    if (isLoggedIn) {
      setSelectedMovie(movie);
    } else {
      // Optionally show a small notification before redirecting
      console.log('Login required to view details');
      navigate('/login');
    }
  };

  const filteredMovies = searchQuery
    ? allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // --- Reusable Movie Card Component ---
  const MovieCard = ({ movie, delay = 0 }) => (
    <motion.div
      variants={cardVariants} // Use defined variants
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05, // Slightly less aggressive scale
        rotateY: 8, // Subtle 3D tilt
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', // Enhanced shadow on hover
        zIndex: 10,
      }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay }} // Add delay prop
      style={{ perspective: '1000px' }} // Needed for 3D rotation
      className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-900 border border-gray-800/60 aspect-[2/3]" // Aspect ratio for consistency
      onClick={() => handleMovieClick(movie)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Zoom effect on hover
      />
      {/* Enhanced Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      {/* Play Button Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0.5 }}
        whileHover={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
          <Play className="h-10 w-10 text-white drop-shadow-lg" fill="currentColor" />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <h3 className="text-lg font-semibold text-white drop-shadow-md truncate">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
          <span>{movie.rating}</span>
          <span className="opacity-50">•</span>
          <span>{movie.year}</span>
        </div>
      </div>

      {/* Login Prompt Overlay - More Subtle */}
      {!isLoggedIn && (
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
             whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 38, 38, 0.8)' }} // Use red-600 color
             whileTap={{ scale: 0.95 }}
             onClick={(e) => { e.stopPropagation(); handleLoginRedirect(); }} // Prevent card click, redirect
             className="bg-red-600/80 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
          >
            Login to Watch
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );

  // --- Main Component Render ---
  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 min-h-screen text-white overflow-x-hidden">
      {/* Subtle Starry Background */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-[pulse_20s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" /> */}


      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-lg z-50 border-b border-gray-800/50 shadow-lg"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white font-stretch-expanded hover:animate-pulse cursor-pointer"
             onClick={() => navigate('/')}
          >
            MRS
          </motion.h1>
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <motion.div
              layout // Animate layout changes
              className="relative hidden md:block" // Hide on smaller screens maybe?
            >
              <motion.div
                 className="flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700/60 shadow-inner focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500/50 transition-all duration-300"
                 whileHover={{ scale: 1.02}}
              >
                <Search className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies..."
                  className="bg-transparent text-white text-sm w-64 focus:outline-none placeholder-gray-500"
                />
                 {searchQuery && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-gray-500 hover:text-white"
                        aria-label="Clear search"
                    >
                        <X size={18} />
                    </motion.button>
                 )}
              </motion.div>
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.div
                    layout // Animate layout changes
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md rounded-xl mt-2 max-h-80 overflow-y-auto z-50 shadow-2xl border border-gray-700/50 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
                  >
                    {filteredMovies.length > 0 ? (
                      filteredMovies.map((movie) => (
                        <motion.div
                          key={movie.id}
                          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                          onClick={() => {
                            handleMovieClick(movie);
                            setSearchQuery(''); // Clear search on selection
                          }}
                          className="p-3 cursor-pointer flex items-center gap-3 transition-colors duration-150"
                        >
                          <img src={movie.image} alt={movie.title} className="w-10 h-14 object-cover rounded-md flex-shrink-0" />
                          <div className="overflow-hidden">
                            <h3 className="font-medium text-sm text-white truncate">{movie.title}</h3>
                            <p className="text-xs text-gray-400">{movie.year} • <Star size={10} className="inline text-yellow-400 -mt-1" fill="currentColor"/> {movie.rating}</p>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-4 text-gray-400 text-sm text-center">No movies found.</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* User Profile / Login Button */}
            <div className="relative" ref={userDropdownRef}>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center justify-center h-10 w-10 bg-gray-800/50 rounded-full border border-gray-700/60 shadow-inner overflow-hidden"
                aria-label={isLoggedIn ? "User menu" : "Login/Signup"}
              >
                {isLoggedIn && currentUser ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="h-full w-full object-cover"
                    onError={(e) => e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=placeholder'} // Fallback avatar
                  />
                ) : (
                  <User className="h-5 w-5 text-gray-300" />
                )}
              </motion.button>
              {/* User Dropdown Menu */}
              <AnimatePresence>
                {showUserDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10, originY: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-0 mt-3 w-64 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl z-50 border border-gray-700/50 overflow-hidden"
                  >
                    {isLoggedIn && currentUser ? (
                      <>
                        <div className="flex items-center gap-3 p-4 border-b border-gray-700/50">
                          <img
                            src={currentUser.avatar}
                            alt={currentUser.name}
                            className="h-12 w-12 rounded-full border-2 border-gray-700"
                            onError={(e) => e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=placeholder'} // Fallback avatar
                          />
                          <div className="overflow-hidden">
                            <p className="text-white font-semibold text-sm truncate">{currentUser.name}</p>
                            <p className="text-xs text-gray-400 truncate">{currentUser.email}</p>
                          </div>
                        </div>
                        <div className="py-2">
                          {currentUser.isAdmin && (
                            <DropdownItem icon={Settings} color="text-red-500" onClick={() => navigate('/admin')}>Admin Dashboard</DropdownItem>
                          )}
                          <DropdownItem icon={UserCircle} color="text-blue-400" onClick={() => navigate('/profile')}>Profile</DropdownItem>
                          <DropdownItem icon={List} color="text-green-400" onClick={() => navigate('/watchlist')}>Watchlist</DropdownItem>
                          <DropdownItem icon={Heart} color="text-pink-400" onClick={() => navigate('/favorites')}>Favorites</DropdownItem>
                          <DropdownItem icon={History} color="text-yellow-400" onClick={() => navigate('/history')}>History</DropdownItem>
                          <DropdownItem icon={LogOut} color="text-red-400" onClick={handleLogout}>Sign Out</DropdownItem>
                        </div>
                      </>
                    ) : (
                      <div className="py-2">
                         <DropdownItem icon={LogIn} color="text-blue-400" onClick={handleLoginRedirect}>Sign In</DropdownItem>
                         <DropdownItem icon={UserPlus} color="text-green-400" onClick={handleSignupRedirect}>Sign Up</DropdownItem>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden" ref={heroRef}>
        <AnimatePresence initial={false}>
          {featuredMovies.map((movie, index) => (
            index === heroIndex && ( // Render only the active slide for performance
              <motion.div
                key={movie.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }} // Slower, smoother fade
                className="absolute inset-0"
              >
                {/* Ken Burns Effect Container */}
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.08 }} // Slow zoom
                    transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'mirror' }} // Long duration, smooth loop
                >
                    <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                {/* Text Content Container */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8" // Adjusted padding
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: [0.25, 1, 0.5, 1] }} // Smoother ease
                >
                  <div className="max-w-screen-xl mx-auto w-full">
                     <motion.h1
                        key={`title-${movie.id}`} // Ensure re-animation on change
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} // Refined text shadow
                     >
                        {movie.title}
                     </motion.h1>
                      <motion.p
                        key={`desc-${movie.id}`} // Ensure re-animation on change
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl leading-relaxed line-clamp-3" // Limit description lines
                      >
                        {movie.description}
                      </motion.p>
                      <motion.div
                        key={`buttons-${movie.id}`} // Ensure re-animation on change
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleMovieClick(movie)}
                          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base shadow-lg transition-all duration-300"
                        >
                          <Play className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor"/> Play Now
                        </motion.button>
                        <motion.button
                           whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                           whileTap={{ scale: 0.98 }}
                           onClick={() => handleMovieClick(movie)} // Should likely open MovieDetails
                           className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full flex items-center gap-2 font-semibold text-sm sm:text-base shadow-lg border border-white/20 transition-all duration-300"
                        >
                           <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6" /> More Info
                        </motion.button>
                      </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {featuredMovies.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              animate={{ scale: index === heroIndex ? 1.2 : 1, opacity: index === heroIndex ? 1 : 0.5 }}
              onClick={() => setHeroIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === heroIndex ? 'bg-red-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Movie Sections */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
         {/* Recommended Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" // Animate when section comes into view
          viewport={{ once: true, amount: 0.1 }} // Trigger animation early
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
            <ThumbsUp className="h-6 w-6 md:h-7 md:w-7 text-red-500" /> Recommended For You
          </h2>
          <motion.div
             variants={sectionVariants} // Use variants for stagger effect container
             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {recommendations.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} delay={i * 0.05} /> // Apply stagger delay
            ))}
          </motion.div>
        </motion.section>

         {/* Popular Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 md:h-7 md:w-7 text-red-500" /> Trending Now
          </h2>
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
            >
            {popularMovies.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} delay={i * 0.05} />
            ))}
          </motion.div>
        </motion.section>

        {/* Add more sections as needed (e.g., Genres, New Releases) */}

      </div>

      {/* Movie Details Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
            isLoggedIn={isLoggedIn} // Pass login status if needed by MovieDetails
          />
        )}
      </AnimatePresence>

      {/* Footer (Optional) */}
      <footer className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 border-t border-gray-800/50 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CosmoFlix. All Rights Reserved.
      </footer>
    </div>
  );
};

// Helper component for Dropdown Items for cleaner code
const DropdownItem = ({ icon: Icon, color = "text-gray-300", onClick, children }) => (
  <button
    onClick={() => {
      onClick();
      // Consider closing the dropdown here if not handled by parent state/ref
    }}
    className="w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5 rounded-md flex items-center gap-3 transition-colors duration-150"
  >
    <Icon className={`h-5 w-5 ${color} flex-shrink-0`} />
    <span className="flex-grow">{children}</span>
  </button>
);


export default Home;