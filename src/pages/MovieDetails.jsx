// // MovieDetails.jsx
// import React from 'react';
// import { X, Star, Clock, Calendar, User, PlayCircle } from 'lucide-react';

// const MovieDetails = ({ movie, onClose }) => {
//   // Sample cast data - in a real app, this could come from props or an API
//   const cast = [
//     { name: "Lead Actor", role: "Main Character" },
//     { name: "Supporting Actor", role: "Side Character" },
//     { name: "Director", role: "Director" }
//   ];

//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto">
//       <div className="min-h-screen px-4 py-8">
//         {/* Close Button */}
//         <div className="fixed top-4 right-4 z-50">
//           <button
//             onClick={onClose}
//             className="text-white hover:text-red-500 transition-colors duration-200 bg-gray-800/50 rounded-full p-2"
//           >
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
//           {/* Header Image */}
//           <div className="relative">
//             <img
//               src={movie.image}
//               alt={movie.title}
//               className="w-full h-[50vh] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
//             {/* Title Overlay */}
//             <div className="absolute bottom-0 left-0 p-6">
//               <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
//                 {movie.title}
//               </h1>
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className="p-8">
//             {/* Movie Info */}
//             <div className="flex flex-wrap gap-6 mb-6 text-white">
//               {movie.rating && (
//                 <div className="flex items-center">
//                   <Star className="h-5 w-5 text-yellow-400 mr-2" />
//                   <span>{movie.rating}/10</span>
//                 </div>
//               )}
//               {movie.duration && (
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-400 mr-2" />
//                   <span>{movie.duration}</span>
//                 </div>
//               )}
//               {movie.year && (
//                 <div className="flex items-center">
//                   <Calendar className="h-5 w-5 text-gray-400 mr-2" />
//                   <span>{movie.year}</span>
//                 </div>
//               )}
//               {movie.director && (
//                 <div className="flex items-center">
//                   <User className="h-5 w-5 text-gray-400 mr-2" />
//                   <span>{movie.director}</span>
//                 </div>
//               )}
//             </div>

//             {/* Genres */}
//             {movie.genre && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {movie.genre.map((g, index) => (
//                   <span
//                     key={index}
//                     className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/30"
//                   >
//                     {g}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Description */}
//             {movie.description && (
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
//                 <p className="text-gray-300 leading-relaxed">
//                   {movie.description}
//                 </p>
//               </div>
//             )}

//             {/* Cast Section */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold text-white mb-4">Cast</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {cast.map((person, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gray-700 rounded-full flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium">{person.name}</p>
//                       <p className="text-gray-400 text-sm">{person.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition duration-300">
//                 <PlayCircle className="h-5 w-5" />
//                 Watch Now
//               </button>
//               <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition duration-300">
//                 <PlayCircle className="h-5 w-5" />
//                 Watch Trailer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;






import React from 'react';
import { X, Star, Clock, Calendar, User, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MovieDetails = ({ movie, onClose }) => {
  const cast = [
    { name: 'Lead Actor', role: 'Main Character', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Supporting Actor', role: 'Side Character', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Director', role: 'Director', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          className="relative w-full max-w-5xl h-[90vh] bg-gray-900/90 rounded-3xl shadow-2xl border border-gray-700/50 overflow-y-auto"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 90, boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full p-3 z-10"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Header Image */}
          <div className="relative w-full h-[50vh]">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-t-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 left-6 right-6"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
                {movie.title}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6 mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)' }}
                  className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-3 rounded-full flex items-center gap-3 font-semibold"
                >
                  <PlayCircle className="h-6 w-6" /> Watch Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
                  className="bg-gray-800/70 text-white px-8 py-3 rounded-full flex items-center gap-3 font-semibold"
                >
                  <PlayCircle className="h-6 w-6" /> Watch Trailer
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Movie Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8 text-white"
            >
              {movie.rating && (
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  <span>{movie.rating}/10</span>
                </div>
              )}
              {movie.duration && (
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-gray-400 mr-2" />
                  <span>{movie.duration}</span>
                </div>
              )}
              {movie.year && (
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-gray-400 mr-2" />
                  <span>{movie.year}</span>
                </div>
              )}
              {movie.director && (
                <div className="flex items-center">
                  <User className="h-6 w-6 text-gray-400 mr-2" />
                  <span>{movie.director}</span>
                </div>
              )}
            </motion.div>

            {/* Genres */}
            {movie.genre && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {movie.genre.map((g, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/50 text-white px-4 py-2 rounded-full text-sm border border-gray-600/50"
                  >
                    {g}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Description */}
            {movie.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{movie.description}</p>
              </motion.div>
            )}

            {/* Trailer */}
            {movie.trailer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">Trailer</h2>
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    src={movie.trailer.replace('watch?v=', 'embed/')}
                    title={`${movie.title} Trailer`}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

            {/* Cast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Cast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cast.map((person, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 bg-gray-800/30 p-4 rounded-xl border border-gray-700/50"
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-semibold">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MovieDetails;