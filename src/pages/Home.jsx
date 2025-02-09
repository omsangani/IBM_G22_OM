import React, { useState, useEffect } from 'react';
import { 
  Search, Star, Clock, Heart, PlayCircle, 
  TrendingUp, Award, ThumbsUp, Menu, X,
  User, Bell, ChevronDown
} from 'lucide-react';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror'];
  
  const featuredMovies = [
    {
      id: 1,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      genre: "Sci-Fi",
      duration: "2h 28min",
      year: 2010
    },
    {
      id: 2,
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      genre: "Action",
      duration: "2h 32min",
      year: 2008
    },
    {
      id: 3,
      title: "Pulp Fiction",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      genre: "Drama",
      duration: "2h 34min",
      year: 1994
    }
  ];

  const recommendedMovies = [
    {
      id: 4,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      genre: "Sci-Fi"
    },
    {
      id: 5,
      title: "The Godfather",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      genre: "Drama"
    },
    {
      id: 6,
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      genre: "Sci-Fi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Main Nav */}
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
                MovieHub
              </h1>
              <div className="hidden md:flex items-center ml-10 space-x-8">
                <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>Home</a>
                <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>Movies</a>
                <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>TV Shows</a>
                <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-500 transition-colors`}>My List</a>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className={`hidden md:flex items-center ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                <Bell size={20} />
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="hidden md:inline">John Doe</span>
                  <ChevronDown size={16} />
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
                ) : (
                  <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Home</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">Movies</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">TV Shows</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">My List</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-600">
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0  bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Amazing Movies
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Find your next favorite movie from our curated collection
          </p>
          <div className="flex items-center max-w-2xl bg-white rounded-lg p-2">
            <Search className="text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search for movies..."
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Genre Filter */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre.toLowerCase())}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedGenre === genre.toLowerCase()
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Featured Movies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2" /> Featured Movies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={48} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-4 h-4" />
                      <span className="ml-1 text-sm">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.genre}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                      <Heart className="w-4 h-4 mr-1" /> Watchlist
                    </button>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Movies */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ThumbsUp className="mr-2" /> Recommended for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedMovies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={48} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-4 h-4" />
                      <span className="ml-1 text-sm">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-600">{movie.genre}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;