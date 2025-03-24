// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Star, Clock, Heart, PlayCircle, 
//   TrendingUp, Award, ThumbsUp, Menu, X,
//   User, Bell, ChevronDown
// } from 'lucide-react';

// const Home = () => {
//   const [selectedGenre, setSelectedGenre] = useState('all');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const genres = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror'];
  
//   const featuredMovies = [
//     {
//       id: 1,
//       title: "Inception",
//       image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=600",
//       rating: 4.8,
//       genre: "Sci-Fi",
//       duration: "2h 28min",
//       year: 2010
//     },
//     {
//       id: 2,
//       title: "The Dark Knight",
//       image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600",
//       rating: 4.9,
//       genre: "Action",
//       duration: "2h 32min",
//       year: 2008
//     },
//     {
//       id: 3,
//       title: "Pulp Fiction",
//       image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600",
//       rating: 4.7,
//       genre: "Drama",
//       duration: "2h 34min",
//       year: 1994
//     }
//   ];

//   const recommendedMovies = [
//     {
//       id: 4,
//       title: "Interstellar",
//       image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
//       rating: 4.8,
//       genre: "Sci-Fi"
//     },
//     {
//       id: 5,
//       title: "The Godfather",
//       image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
//       rating: 4.9,
//       genre: "Drama"
//     },
//     {
//       id: 6,
//       title: "The Matrix",
//       image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600",
//       rating: 4.7,
//       genre: "Sci-Fi"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo and Main Nav */}
//             <div className="flex items-center">
//               <h1 className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
//                 MovieHub
//               </h1>
//               <div className="hidden md:flex items-center ml-10 space-x-8">
//                 <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>Home</a>
//                 <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>Movies</a>
//                 <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>TV Shows</a>
//                 <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>My List</a>
//               </div>
//             </div>

//             {/* User Menu */}
//             <div className="flex items-center space-x-4">
//               <button className={`hidden md:flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                 <Bell size={20} />
//               </button>
//               <div className="relative">
//                 <button 
//                   onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//                   className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
//                     <User size={16} className="text-white" />
//                   </div>
//                   <span className="hidden md:inline">John Doe</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {/* Profile Dropdown */}
//                 {isProfileMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
//                   </div>
//                 )}
//               </div>

//               {/* Mobile menu button */}
//               <button 
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
//                 ) : (
//                   <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Home</a>
//                 <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Movies</a>
//                 <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">TV Shows</a>
//                 <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">My List</a>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-600">
//         <img 
//           src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200"
//           alt="Hero"
//           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
//         />
//         <div className="absolute inset-0  bg-opacity-50" />
//         <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Discover Amazing Movies
//           </h1>
//           <p className="text-xl text-gray-200 mb-8">
//             Find your next favorite movie from our curated collection
//           </p>
//           <div className="flex items-center max-w-2xl bg-white rounded-lg p-2">
//             <Search className="text-gray-400 ml-2" />
//             <input
//               type="text"
//               placeholder="Search for movies..."
//               className="w-full px-4 py-2 focus:outline-none"
//             />
//             <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Genre Filter */}
//         <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-4">
//           {genres.map((genre) => (
//             <button
//               key={genre}
//               onClick={() => setSelectedGenre(genre.toLowerCase())}
//               className={`px-4 py-2 rounded-full whitespace-nowrap ${
//                 selectedGenre === genre.toLowerCase()
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               }`}
//             >
//               {genre}
//             </button>
//           ))}
//         </div>

//         {/* Featured Movies */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-6 flex items-center">
//             <Award className="mr-2" /> Featured Movies
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredMovies.map((movie) => (
//               <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
//                 <div className="relative">
//                   <img
//                     src={movie.image}
//                     alt={movie.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
//                     <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={48} />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-lg font-semibold">{movie.title}</h3>
//                     <div className="flex items-center">
//                       <Star className="text-yellow-400 w-4 h-4" />
//                       <span className="ml-1 text-sm">{movie.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600 mb-4">
//                     <span>{movie.year}</span>
//                     <span className="mx-2">•</span>
//                     <span>{movie.genre}</span>
//                     <span className="mx-2">•</span>
//                     <span>{movie.duration}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <button className="flex items-center text-indigo-600 hover:text-indigo-700">
//                       <Heart className="w-4 h-4 mr-1" /> Watchlist
//                     </button>
//                     <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//                       Watch Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Recommended Movies */}
//         <section>
//           <h2 className="text-2xl font-bold mb-6 flex items-center">
//             <ThumbsUp className="mr-2" /> Recommended for You
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {recommendedMovies.map((movie) => (
//               <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
//                 <div className="relative">
//                   <img
//                     src={movie.image}
//                     alt={movie.title}
//                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
//                     <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={48} />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="text-lg font-semibold">{movie.title}</h3>
//                     <div className="flex items-center">
//                       <Star className="text-yellow-400 w-4 h-4" />
//                       <span className="ml-1 text-sm">{movie.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between mt-4">
//                     <span className="text-sm text-gray-600">{movie.genre}</span>
//                     <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//                       Watch Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import { Play, Star, Clock, TrendingUp as Trending, ThumbsUp, Award, Search } from 'lucide-react';
import MovieDetails from './MovieDetails';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const allMovies = [
    // Hollywood Movies
    { id: 1, title: "Inception", description: "A thief who steals corporate secrets...", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1", rating: "8.8", duration: "2h 28min", genre: ["Action", "Sci-Fi"], director: "Christopher Nolan", year: "2010" },
    { id: 2, title: "Interstellar", description: "A team of explorers travel through a wormhole...", image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0", rating: "8.6", duration: "2h 49min", genre: ["Sci-Fi", "Adventure"], director: "Christopher Nolan", year: "2014" },
    { id: 3, title: "The Dark Knight", description: "Batman faces the Joker...", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", rating: "9.0", duration: "2h 32min", genre: ["Action", "Crime"], director: "Christopher Nolan", year: "2008" },
    { id: 4, title: "Dune", description: "A noble family controls the desert planet...", image: "https://images.unsplash.com/photo-1547235001-d703406d3f17", rating: "8.0", duration: "2h 35min", genre: ["Sci-Fi", "Adventure"], director: "Denis Villeneuve", year: "2021" },
    { id: 5, title: "The Shawshank Redemption", description: "Two imprisoned men bond...", image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3", rating: "9.3", duration: "2h 22min", genre: ["Drama"], director: "Frank Darabont", year: "1994" },
    { id: 6, title: "Pulp Fiction", description: "Various interconnected stories...", image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b", rating: "8.9", duration: "2h 34min", genre: ["Crime", "Drama"], director: "Quentin Tarantino", year: "1994" },
    { id: 7, title: "Avatar", description: "A paraplegic Marine dispatched to Pandora...", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1", rating: "7.8", duration: "2h 42min", genre: ["Action", "Sci-Fi"], director: "James Cameron", year: "2009" },
    { id: 8, title: "The Godfather", description: "The aging patriarch of a crime dynasty...", image: "https://images.unsplash.com/photo-1559583109-3e7968136c99", rating: "9.2", duration: "2h 55min", genre: ["Crime", "Drama"], director: "Francis Ford Coppola", year: "1972" },
    
    // Bollywood Movies
    { id: 9, title: "3 Idiots", description: "Three friends in engineering college...", image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b", rating: "8.4", duration: "2h 50min", genre: ["Comedy", "Drama"], director: "Rajkumar Hirani", year: "2009" },
    { id: 10, title: "Dangal", description: "A wrestler trains his daughters...", image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95a79", rating: "8.4", duration: "2h 41min", genre: ["Biography", "Drama"], director: "Nitesh Tiwari", year: "2016" },
    { id: 11, title: "Sholay", description: "Two criminals hired to catch a bandit...", image: "https://images.unsplash.com/photo-1579373905675-2e57fb2e142d", rating: "8.2", duration: "3h 24min", genre: ["Action", "Adventure"], director: "Ramesh Sippy", year: "1975" },
    { id: 12, title: "PK", description: "An alien stranded on Earth...", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", rating: "8.1", duration: "2h 33min", genre: ["Comedy", "Drama"], director: "Rajkumar Hirani", year: "2014" },
    { id: 13, title: "Lagaan", description: "Villagers stake their future on cricket...", image: "https://images.unsplash.com/photo-1620207419186-13b2e9624930", rating: "8.1", duration: "3h 44min", genre: ["Drama", "Sport"], director: "Ashutosh Gowariker", year: "2001" },
    { id: 14, title: "Bajrangi Bhaijaan", description: "A man helps a lost Pakistani girl...", image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d", rating: "8.0", duration: "2h 43min", genre: ["Comedy", "Drama"], director: "Kabir Khan", year: "2015" },
    { id: 15, title: "Dilwale Dulhania Le Jayenge", description: "Two young lovers face family opposition...", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", rating: "8.0", duration: "3h 9min", genre: ["Romance", "Drama"], director: "Aditya Chopra", year: "1995" }
  ];

  const featuredMovie = allMovies[0];
  const recommendations = allMovies.slice(1, 6);
  const popularMovies = allMovies.slice(6, 11);
  const criticsChoice = allMovies.slice(11, 15);

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MovieCard = ({ movie }) => (
    <div 
      onClick={() => setSelectedMovie(movie)}
      className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl cursor-pointer group"
    >
      <div className="relative">
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <Play className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" />
            <span className="text-gray-300">{movie.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">{movie.year}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 bg-gray-900 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative">
          <div className="flex items-center bg-gray-800 rounded-lg p-2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="bg-transparent text-white w-full focus:outline-none"
            />
          </div>
          {searchQuery && (
            <div className="absolute top-full left-0 right-0 bg-gray-800 rounded-lg mt-2 max-h-96 overflow-y-auto z-10">
              {filteredMovies.map(movie => (
                <div
                  key={movie.id}
                  onClick={() => {
                    setSelectedMovie(movie);
                    setSearchQuery('');
                  }}
                  className="p-3 hover:bg-gray-700 cursor-pointer text-white flex items-center gap-4"
                >
                  <img src={movie.image} alt={movie.title} className="w-16 h-24 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{movie.title}</h3>
                    <p className="text-sm text-gray-400">{movie.year} • {movie.rating}</p>
                  </div>
                </div>
              ))}
              {filteredMovies.length === 0 && (
                <div className="p-3 text-gray-400">No movies found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full bg-gray-900">
        <img 
          src={featuredMovie.image} 
          alt={featuredMovie.title} 
          className="w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {featuredMovie.title}
              </h1>
              <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
                {featuredMovie.description}
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{featuredMovie.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-300 mr-1" />
                  <span>{featuredMovie.duration}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMovie(featuredMovie)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition duration-300 shadow-lg"
              >
                <Play className="h-5 w-5" /> Watch Now
              </button>
            </div>
          </div>
        </div>
        </div>

      {/* Movies Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <ThumbsUp className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-3xl font-bold text-white">Recommended</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {recommendations.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Trending className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-3xl font-bold text-white">Popular Now</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {popularMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-3xl font-bold text-white">Classics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {criticsChoice.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>

      {selectedMovie && (
        <MovieDetails 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;