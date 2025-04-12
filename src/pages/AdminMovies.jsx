// import React, { useState, useEffect, useCallback, memo } from 'react';
// import { Plus, Edit2, Trash2, X } from 'lucide-react';

// // Memoized MovieModal component
// const MovieModal = memo(({ 
//   showModal, 
//   onClose, 
//   onSubmit, 
//   formData, 
//   onInputChange, 
//   editingMovie 
// }) => {
//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg max-w-2xl w-full p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">
//             {editingMovie ? 'Edit Movie' : 'Add New Movie'}
//           </h2>
//           <button onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>

//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               rows="3"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Image URL</label>
//             <input
//               type="url"
//               name="image"
//               value={formData.image}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Rating</label>
//               <input
//                 type="text"
//                 name="rating"
//                 value={formData.rating}
//                 onChange={onInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Duration</label>
//               <input
//                 type="text"
//                 name="duration"
//                 value={formData.duration}
//                 onChange={onInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Genres (comma-separated)</label>
//             <input
//               type="text"
//               name="genre"
//               value={formData.genre}
//               onChange={onInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="Action, Drama, Sci-Fi"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Director</label>
//               <input
//                 type="text"
//                 name="director"
//                 value={formData.director}
//                 onChange={onInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Year</label>
//               <input
//                 type="text"
//                 name="year"
//                 value={formData.year}
//                 onChange={onInputChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               {editingMovie ? 'Update Movie' : 'Add Movie'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// });

// const AdminMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [editingMovie, setEditingMovie] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: '',
//     rating: '',
//     duration: '',
//     genre: '',
//     director: '',
//     year: ''
//   });

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch('http://localhost:5001/api/movies', {
//         headers: {
//           'x-auth-token': token
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//       }

//       const data = await response.json();
//       setMovies(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('adminToken');
//       const url = editingMovie 
//         ? `http://localhost:5001/api/movies/${editingMovie._id}`
//         : 'http://localhost:5001/api/movies';
      
//       const method = editingMovie ? 'PUT' : 'POST';

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': token
//         },
//         body: JSON.stringify({
//           ...formData,
//           genre: formData.genre.split(',').map(g => g.trim())
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save movie');
//       }

//       setShowModal(false);
//       setEditingMovie(null);
//       setFormData({
//         title: '',
//         description: '',
//         image: '',
//         rating: '',
//         duration: '',
//         genre: '',
//         director: '',
//         year: ''
//       });
//       fetchMovies();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (movie) => {
//     setEditingMovie(movie);
//     setFormData({
//       title: movie.title,
//       description: movie.description,
//       image: movie.image,
//       rating: movie.rating,
//       duration: movie.duration,
//       genre: movie.genre.join(', '),
//       director: movie.director,
//       year: movie.year
//     });
//     setShowModal(true);
//   };

//   const handleDelete = async (movieId) => {
//     if (!window.confirm('Are you sure you want to delete this movie?')) {
//       return;
//     }

//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5001/api/movies/${movieId}`, {
//         method: 'DELETE',
//         headers: {
//           'x-auth-token': token
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete movie');
//       }

//       fetchMovies();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 text-center p-4">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Manage Movies</h2>
//         <button
//           onClick={() => {
//             setEditingMovie(null);
//             setFormData({
//               title: '',
//               description: '',
//               image: '',
//               rating: '',
//               duration: '',
//               genre: '',
//               director: '',
//               year: ''
//             });
//             setShowModal(true);
//           }}
//           className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//         >
//           <Plus size={20} className="mr-2" />
//           Add New Movie
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {movies.map((movie) => (
//           <div key={movie._id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{movie.description}</p>
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <span className="text-yellow-400 mr-1">★</span>
//                   <span>{movie.rating}</span>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(movie)}
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                   >
//                     <Edit2 size={20} />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(movie._id)}
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-full"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <MovieModal
//         showModal={showModal}
//         onClose={() => setShowModal(false)}
//         onSubmit={handleSubmit}
//         formData={formData}
//         onInputChange={handleInputChange}
//         editingMovie={editingMovie}
//       />
//     </div>
//   );
// };

// export default AdminMovies; 




import React, { useState, useEffect, useCallback, memo } from 'react';
import { Plus, Edit2, Trash2, X, Star, Loader, AlertTriangle, Film } from 'lucide-react'; // Added needed icons
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion

// --- Configuration (Match Admin Dashboard) ---
const ACCENT_COLOR_CLASS = 'teal'; // Use the same accent color name as Admin dashboard

// --- Animation Variants (Match Admin Dashboard) ---
const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 200 } },
  exit: { opacity: 0, scale: 0.9, y: 30 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } }
};

const sectionVariants = { // Added for staggering cards if needed
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } } // Subtle stagger
};


// --- Movie Modal Component (Styled for Dark Theme) ---
const MovieModal = memo(({
  showModal,
  onClose,
  onSubmit,
  formData,
  onInputChange,
  editingMovie,
  apiError // Receive potential API error from parent
}) => {
  if (!showModal) return null;

  // Helper to render input fields consistently
  const InputField = ({ name, label, type = 'text', required = true, ...props }) => (
      <div>
          <label htmlFor={name} className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{label}</label>
          {type === 'textarea' ? (
               <textarea
                  id={name}
                  name={name}
                  value={formData[name] || ''}
                  onChange={onInputChange}
                  className={`mt-1 block w-full p-4 rounded-md bg-gray-700/60 border-gray-600 text-gray-200 text-sm focus:ring-1 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:border-${ACCENT_COLOR_CLASS}-500 shadow-sm transition`}
                  rows="3"
                  required={required}
                  {...props}
               />
           ) : (
               <input
                  id={name}
                  type={type}
                  name={name}
                  value={formData[name] || ''}
                  onChange={onInputChange}
                  className={`mt-1 block p-4 w-full rounded-md bg-gray-700/60 border-gray-600 text-gray-200 text-sm focus:ring-1 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:border-${ACCENT_COLOR_CLASS}-500 shadow-sm transition`}
                  required={required}
                  {...props}
               />
           )}
      </div>
  );

  return (
    <AnimatePresence>
      {showModal && ( // Ensure key is present for AnimatePresence exit animation
        <motion.div
          key="modal-backdrop"
          variants={modalOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            key="modal-content"
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-800 rounded-lg shadow-xl max-w-xl w-full border border-gray-700"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">
                {editingMovie ? 'Edit Movie Details' : 'Add New Movie'}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90, color: '#f87171' }} // Rotate and red hover
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="p-4 md:p-6 space-y-4 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700/50">
               {apiError && (
                   <div className="mb-4 p-3 bg-red-900/30 border border-red-600/50 rounded-md flex items-center gap-2 text-red-300 text-sm">
                      <AlertTriangle size={16} /> {apiError}
                   </div>
                )}

              {/* Render form fields using the helper */}
              <InputField name="title" label="Title" />
              <InputField name="description" label="Description" type="textarea" />
              <InputField name="image" label="Image URL" type="url" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField name="rating" label="Rating (0.0-10.0)" type="text" pattern="^\d(\.\d)?$|^10(\.?0)?$" title="Enter rating 0.0-10.0" />
                <InputField name="duration" label="Duration (e.g., 2h 28min)" type="text" />
              </div>

              <InputField name="genre" label="Genres (comma-separated)" type="text" placeholder="Action, Sci-Fi" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField name="director" label="Director" />
                <InputField name="year" label="Year" type="number" min="1888" max={new Date().getFullYear() + 2} />
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end space-x-3 pt-4">
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 bg-gray-600 text-gray-200 text-sm font-medium rounded-md hover:bg-gray-500 transition-colors"
                  >
                      Cancel
                  </motion.button>
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className={`px-4 py-2 bg-${ACCENT_COLOR_CLASS}-600 text-white text-sm font-medium rounded-md hover:bg-${ACCENT_COLOR_CLASS}-700 transition-colors shadow`}
                  >
                      {editingMovie ? 'Update Movie' : 'Add Movie'}
                  </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

// --- Main Admin Movies Component (Styled for Dark Theme) ---
const AdminMovies = () => {
  // State Hooks (Keep As Is)
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Page level error
  const [modalApiError, setModalApiError] = useState(null); // Error specific to modal actions
  const [showModal, setShowModal] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: '', description: '', image: '', rating: '',
    duration: '', genre: '', director: '', year: ''
  });

  // Fetch Movies on Mount (Keep As Is, Added Standard Auth Header)
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');

      const response = await fetch('http://localhost:5001/api/movies', {
        headers: {
          'Authorization': `Bearer ${token}`, // Standard
          'x-auth-token': token, // Keep if backend requires
          'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch movies (Status: ${response.status})`);
      }
      const data = await response.json();
      setMovies(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Input Change Handler (Keep As Is)
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setModalApiError(null); // Clear modal error on change
  }, []);

  // Form Reset Utility
  const resetFormData = useCallback(() => {
     setFormData({
        title: '', description: '', image: '', rating: '',
        duration: '', genre: '', director: '', year: '',
     });
  }, []);


  // Form Submit Handler (Keep As Is, Added Standard Auth Header)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalApiError(null);
    // Add basic validation if desired before API call
    if (formData.rating && (parseFloat(formData.rating) > 10 || parseFloat(formData.rating) < 0)) {
        setModalApiError("Rating must be between 0.0 and 10.0");
        return;
    }
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');
      const url = editingMovie
        ? `http://localhost:5001/api/movies/${editingMovie._id}`
        : 'http://localhost:5001/api/movies';
      const method = editingMovie ? 'PUT' : 'POST';

      const payload = {
        ...formData,
        genre: formData.genre ? formData.genre.split(',').map(g => g.trim()).filter(g => g) : [],
        year: Number(formData.year) || undefined,
        rating: Number(formData.rating) || undefined,
      };

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Standard
          'x-auth-token': token, // Keep if needed
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
         const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to save movie (Status: ${response.status})`);
      }

      // Success: Close modal, reset form, refresh list
      setShowModal(false);
      setEditingMovie(null);
      resetFormData();
      fetchMovies();
    } catch (err) {
      setModalApiError(err.message); // Show error in modal
    }
  };

  // Edit Handler (Keep As Is)
  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setFormData({
      title: movie.title || '',
      description: movie.description || '',
      image: movie.image || '',
      rating: movie.rating || '',
      duration: movie.duration || '',
      genre: Array.isArray(movie.genre) ? movie.genre.join(', ') : '',
      director: movie.director || '',
      year: movie.year || ''
    });
    setModalApiError(null);
    setShowModal(true);
  };

  // Delete Handler (Keep As Is, Added Standard Auth Header)
  const handleDelete = async (movieId) => {
    if (!window.confirm('Are you sure you want to delete this movie?')) return;
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found.');
      const response = await fetch(`http://localhost:5001/api/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Standard
          'x-auth-token': token // Keep if needed
        }
      });
      if (!response.ok) {
         const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to delete movie (Status: ${response.status})`);
      }
      fetchMovies(); // Refresh list
    } catch (err) {
      setError(err.message); // Show page level error on delete failure
    }
  };

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex items-center justify-center pt-20"> {/* Adjusted padding */}
        <Loader className={`animate-spin h-8 w-8 text-${ACCENT_COLOR_CLASS}-500`} />
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 mx-auto max-w-md mt-6 text-center bg-gray-800 border border-red-500/50 rounded-lg shadow-lg"
      >
        <AlertTriangle className="text-red-400 h-6 w-6 mx-auto mb-2" />
        <p className="text-sm text-red-400">{error}</p>
        <button onClick={fetchMovies} className="mt-3 text-xs text-gray-400 hover:underline">Retry Fetch</button>
      </motion.div>
    );
  }

  // --- Main Render ---
  return (
    // Assumes this component is rendered within the Admin layout which provides the main background
    <motion.div variants={pageVariants} initial="initial" animate="animate" className="space-y-6 p-4 bg-gray-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-900">
        <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center">
            <Film size={22} className={`mr-2.5 text-${ACCENT_COLOR_CLASS}-400`} /> {/* Slightly larger icon */}
            Manage Movies
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingMovie(null);
            resetFormData();
            setModalApiError(null);
            setShowModal(true);
          }}
          className={`flex items-center px-4 py-2 bg-${ACCENT_COLOR_CLASS}-600 text-white text-sm font-medium rounded-md hover:bg-${ACCENT_COLOR_CLASS}-700 transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-${ACCENT_COLOR_CLASS}-500 focus:ring-offset-2 focus:ring-offset-gray-900`} // Added focus ring
        >
          <Plus size={18} className="mr-1.5" />
          Add New Movie
        </motion.button>
      </div>

      {/* Movie Grid */}
      {movies.length === 0 && !loading && (
            <div className="text-center py-16 text-gray-500 border border-dashed border-gray-700 rounded-lg">
                <Film size={40} className="mx-auto mb-3 text-gray-600"/>
                No movies found. Add one to get started!
            </div>
       )}

       {movies.length > 0 && (
          <motion.div
             variants={sectionVariants}
             initial="hidden"
             animate="visible"
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
           >
            {movies.map((movie) => (
              <motion.div
                key={movie._id}
                variants={cardVariants}
                layout
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 flex flex-col transition-all duration-300 hover:border-gray-600 hover:shadow-xl"
              >
                <img
                    src={movie.image} // Placeholder path
                    alt={movie.title || 'Movie Poster'}
                    className="w-full h-56 object-cover" // Consistent height
                    loading="lazy" // Lazy load images
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400"; }} // Placeholder path
                />
                <div className="p-4 flex flex-col flex-grow">
                   <h3 className="text-base font-semibold text-white mb-1 truncate" title={movie.title}>{movie.title || 'Untitled'}</h3>
                   <p className="text-xs text-gray-400 mb-3 line-clamp-3 flex-grow">{movie.description || <span className="italic text-gray-500">No description provided.</span>}</p>

                   <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-700/50">
                     <div className="flex items-center space-x-1 text-xs">
                       <Star className="text-yellow-400 flex-shrink-0" size={14} fill="currentColor"/>
                       <span className="text-gray-200 font-medium">{movie.rating ?? 'N/A'}</span>
                     </div>
                     <div className="flex space-x-1">
                       <motion.button
                         whileHover={{ scale: 1.1, backgroundColor: `rgba(var(--color-${ACCENT_COLOR_CLASS}-rgb), 0.15)`}} // Use RGB for alpha if Tailwind JIT allows, else use fixed rgba
                         whileTap={{ scale: 0.9 }}
                         onClick={() => handleEdit(movie)}
                         className={`p-1.5 rounded-full text-${ACCENT_COLOR_CLASS}-400 hover:text-${ACCENT_COLOR_CLASS}-300 transition-colors`}
                         aria-label="Edit movie"
                         title="Edit"
                       >
                         <Edit2 size={16} />
                       </motion.button>
                       <motion.button
                         whileHover={{ scale: 1.1, backgroundColor: 'rgba(248, 113, 113, 0.15)' }} // Red transparent bg
                         whileTap={{ scale: 0.9 }}
                         onClick={() => handleDelete(movie._id)}
                         className="p-1.5 rounded-full text-red-400 hover:text-red-300 transition-colors"
                         aria-label="Delete movie"
                         title="Delete"
                       >
                         <Trash2 size={16} />
                       </motion.button>
                     </div>
                   </div>
                 </div>
              </motion.div>
            ))}
           </motion.div>
        )}

      {/* Render Modal */}
      <MovieModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
        editingMovie={editingMovie}
        apiError={modalApiError} // Pass modal error state
      />
    </motion.div>
  );
};

export default AdminMovies;