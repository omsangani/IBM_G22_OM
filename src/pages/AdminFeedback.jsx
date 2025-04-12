import React, { useState, useEffect } from 'react';
import { Star, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState(null);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5001/api/admin/feedback', {
        headers: {
          'x-auth-token': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch feedback');
      }

      const data = await response.json();
      setFeedback(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredFeedback = feedback.filter((item) => {
    const matchesSearch =
      item.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.movie.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.comment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating ? item.rating === filterRating : true;
    return matchesSearch && matchesRating;
  });

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-full"
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-400 text-center p-8 bg-gray-900/80 rounded-2xl border border-red-600/50"
      >
        <p>{error}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
          User Feedback
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feedback..."
              className="pl-10 pr-4 py-3 bg-gray-800/50 border-gray-700 text-white rounded-full focus:ring-red-600 focus:border-red-600 w-64"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterRating || ''}
              onChange={(e) => setFilterRating(e.target.value ? Number(e.target.value) : null)}
              className="pl-10 pr-4 py-3 bg-gray-800/50 border-gray-700 text-white rounded-full focus:ring-red-600 focus:border-red-600"
            >
              <option value="">All Ratings</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
        <div className="space-y-6">
          {filteredFeedback.length === 0 ? (
            <p className="text-gray-400 text-center">No feedback matches your criteria.</p>
          ) : (
            filteredFeedback.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="border-b border-gray-700/50 pb-4 last:border-b-0 p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{item.user}</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={16} />
                    <span className="ml-1 text-gray-300">{item.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{item.movie}</p>
                <p className="text-gray-300 text-sm mt-1">{item.comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminFeedback;