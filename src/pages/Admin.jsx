// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
// import { Users, Film, TrendingUp, Clock, Star, Settings, List, User } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');
//         console.log('Admin token:', token); // Debug log

//         if (!token) {
//           throw new Error('Admin authentication required');
//         }

//         console.log('Fetching admin stats...'); // Debug log
//         const response = await fetch('http://localhost:5001/api/admin/stats', {
//           headers: {
//             'x-auth-token': token,
//             'Content-Type': 'application/json'
//           }
//         });

//         console.log('Response status:', response.status); // Debug log

//         if (!response.ok) {
//           const errorData = await response.json().catch(() => ({ message: 'Failed to fetch admin statistics' }));
//           console.error('Error response:', errorData); // Debug log
//           throw new Error(errorData.message || 'Failed to fetch admin statistics');
//         }

//         const data = await response.json();
//         console.log('Received data:', data); // Debug log

//         if (!data) {
//           throw new Error('No data received from server');
//         }
        
//         setStats(data);
//       } catch (err) {
//         console.error('Error fetching admin stats:', err);
//         setError(err.message || 'An error occurred while fetching admin statistics');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin/login');
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
//       <div className="flex items-center justify-center h-full">
//         <div className="text-red-500 text-center">
//           <p className="text-xl font-semibold mb-2">Error Loading Dashboard</p>
//           <p>{error}</p>
//           <button 
//             onClick={() => navigate('/admin/login')}
//             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//           >
//             Return to Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B', '#10B981'];

//   const StatCard = ({ icon: Icon, title, value, className }) => (
//     <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-gray-500 text-sm">{title}</p>
//           <h3 className="text-2xl font-bold mt-2">{value}</h3>
//         </div>
//         <Icon className="text-indigo-600" size={24} />
//       </div>
//     </div>
//   );

//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       const data = payload[0].payload;
//       return (
//         <div className="bg-white p-4 shadow-lg rounded-lg border">
//           <p className="font-semibold text-gray-800">{data.name}</p>
//           <p className="text-indigo-600 font-medium mt-1">
//             {data.value.toFixed(1)}% of total movies
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="space-y-6">
//       {/* Navigation Bar */}
//       <div className="bg-white rounded-lg shadow-sm p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div className="flex space-x-4">
//             <button
//               onClick={() => navigate('/admin/movies')}
//               className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               <List size={20} className="mr-2" />
//               Manage Movies
//             </button>
//             <button
//               onClick={() => navigate('/admin/users')}
//               className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               <User size={20} className="mr-2" />
//               Manage Users
//             </button>
//             <button
//               onClick={handleLogout}
//               className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//             >
//               <Settings size={20} className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard icon={Users} title="Total Users" value={stats.totalUsers} />
//         <StatCard icon={Users} title="Active Users Today" value={stats.activeUsers} />
//         <StatCard icon={Film} title="Total Movies" value={stats.totalMovies} />
//         <StatCard icon={Clock} title="Recently Added Movies" value={stats.recentMovies} />
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Genre Distribution */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Movies by Genre</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={stats.genreData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 paddingAngle={5}
//                 dataKey="value"
//                 label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
//                   const RADIAN = Math.PI / 180;
//                   const radius = 25 + innerRadius + (outerRadius - innerRadius);
//                   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//                   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//                   return (
//                     <text
//                       x={x}
//                       y={y}
//                       className="text-xs"
//                       textAnchor={x > cx ? 'start' : 'end'}
//                       dominantBaseline="central"
//                     >
//                       {`${stats.genreData[index].name} (${value.toFixed(1)}%)`}
//                     </text>
//                   );
//                 }}
//               >
//                 {stats.genreData.map((entry, index) => (
//                   <Cell 
//                     key={`cell-${index}`} 
//                     fill={COLORS[index % COLORS.length]}
//                     stroke="white"
//                     strokeWidth={2}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip content={<CustomTooltip />} />
//               <Label value="Genre Distribution" position="center" />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Movie Recommendations */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Movie Recommendations</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={stats.recommendationData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="genre" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="count" fill="#4F46E5" name="Number of Movies" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Popular Movies & Feedback */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Popular Movies */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Most Popular Movies</h3>
//           <div className="space-y-4">
//             {stats.popularMovies.map((movie, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <TrendingUp className="text-indigo-600 mr-3" size={20} />
//                   <span>{movie.title}</span>
//                 </div>
//                 <span className="text-gray-600">{movie.views} views</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Feedback */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
//           <div className="space-y-4">
//             {stats.recentFeedback.map((feedback, index) => (
//               <div key={index} className="border-b pb-4 last:border-b-0">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="font-medium">{feedback.user}</span>
//                   <div className="flex items-center">
//                     <Star className="text-yellow-400" size={16} />
//                     <span className="ml-1">{feedback.rating}/5</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm">{feedback.movie}</p>
//                 <p className="text-gray-500 text-sm mt-1">{feedback.comment}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;



import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; 
import { Users, Film, TrendingUp, Clock, Star, LogOut, List, User as UserIcon, AlertTriangle, Loader, Settings } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
const COLORS = ['#2DD4BF', '#60A5FA', '#A78BFA', '#F472B6', '#FBBF24', '#34D399']; // Teal, Blue, Purple, Pink, Amber, Green
const ACCENT_COLOR_CLASS = 'teal'; // Tailwind color name (used for text, bg, border etc.) - e.g., 'teal', 'blue', 'indigo'
const CHART_TEXT_COLOR = '#9ca3af'; // text-gray-400
const CHART_GRID_COLOR = '#374151'; // gray-700

// --- Animation Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } }
};


// --- Main Component ---
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // --- Data Fetching (Keep As Is) ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading true at the start
      setError(null);   // Clear previous errors
      try {
        const token = localStorage.getItem('adminToken'); // Prefer admin token
        // console.log('Admin token:', token); // Debug log

        if (!token) {
          // No token found, treat as authentication required
          throw new Error('Admin authentication required. Please log in.');
        }

        // console.log('Fetching admin stats...'); // Debug log
        const response = await fetch('http://localhost:5001/api/admin/stats', {
          headers: {
            // Standard: Authorization Bearer token (preferred)
            'Authorization': `Bearer ${token}`,
            // Fallback or specific backend requirement: 'x-auth-token'
             'x-auth-token': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });

        // console.log('Response status:', response.status); // Debug log

        if (!response.ok) {
           // Handle specific auth errors
           if (response.status === 401 || response.status === 403) {
               localStorage.removeItem('adminToken'); // Remove invalid token
               throw new Error('Unauthorized access. Please log in again.');
           }
          // Try to parse error details from response body
          const errorData = await response.json().catch(() => ({ message: `HTTP error ${response.status}: ${response.statusText}` }));
          console.error('Error response:', errorData); // Debug log
          throw new Error(errorData.message || `Failed to fetch statistics (Status: ${response.status})`);
        }

        const data = await response.json();
        // console.log('Received data:', data); // Debug log

        if (!data) {
          // Handle cases where response is OK but data is null/empty
          throw new Error('Received empty data from server');
        }

        // Optional: Add more specific data validation if needed here
        if (typeof data.totalUsers === 'undefined') {
            console.warn("Received data might be incomplete", data);
            // Depending on severity, either set partial stats or throw error
            // throw new Error('Incomplete statistics data received.');
        }

        setStats(data);
      } catch (err) {
        console.error('Error fetching admin stats:', err);
        // Update error state for display
        setError(err.message || 'An unknown error occurred while fetching data');
      } finally {
        // Ensure loading is set to false regardless of success or error
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array: run only once on mount

  // --- Event Handlers ---
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    // Clear any other sensitive session data
    navigate('/login'); // Redirect to main login page
  };

  // --- Reusable Stat Card ---
  const StatCard = ({ icon: Icon, title, value }) => (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-lg shadow-lg p-5 border border-gray-700/80 border-t-2 border-t-teal-500 transition-transform duration-300 hover:-translate-y-1 hover:shadow-teal-500/10" // Added top border accent & hover effect
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{title}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white truncate">{value ?? '---'}</h3>
        </div>
        <div className={`flex-shrink-0 p-3 rounded-lg bg-${ACCENT_COLOR_CLASS}-500/10`}>
          <Icon className={`text-${ACCENT_COLOR_CLASS}-400`} size={22} />
        </div>
      </div>
    </motion.div>
  );

  // --- Custom Chart Tooltip ---
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const name = data.payload?.name || label || 'N/A'; // Use name from Pie data or label from Bar data
      const value = data.value;
      const percentage = data.payload?.percent ? `(${(data.payload.percent * 100).toFixed(1)}%)` : ''; // Show percentage for Pie

      return (
        <div className="bg-gray-900/80 backdrop-blur-sm p-3 shadow-xl rounded-md border border-gray-600 text-xs">
          <p className="font-semibold text-gray-100 mb-1">{name}</p>
          <p className={`text-${ACCENT_COLOR_CLASS}-300`}>
            {data.dataKey === 'count' ? 'Count' : 'Value'}: {value?.toLocaleString() ?? 'N/A'} {percentage}
          </p>
        </div>
      );
    }
    return null;
  };


  // --- Conditional Rendering: Loading ---
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Loader className={`animate-spin h-10 w-10 text-${ACCENT_COLOR_CLASS}-500`} />
      </div>
    );
  }

  // --- Conditional Rendering: Error ---
  if (error) {
    const isAuthError = error.includes('Unauthorized') || error.includes('required');
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl border border-red-500/50 text-center max-w-lg w-full"
        >
          <AlertTriangle className="text-red-400 h-10 w-10 mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2 text-white">Dashboard Error</p>
          <p className="text-red-400/90 mb-6 text-sm">{error}</p>
          <button
            onClick={isAuthError ? () => navigate('/login') : handleLogout}
            className={`px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
          >
            {isAuthError ? 'Go to Login' : 'Logout'}
          </button>
        </motion.div>
      </div>
    );
  }

  // --- Conditional Rendering: No Stats Data ---
  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-500">
        No statistics data available to display.
      </div>
    );
  }

  // --- Main Dashboard Layout ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gray-800/80 backdrop-blur-md border-b border-gray-700/80 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">
              <Settings size={20} className="inline-block mr-2 -mt-1 text-teal-400"/>
            <span className='font-stretch-expanded font-bold'>MRS</span> Admin Dashboard
            </h1>
            <nav className="flex items-center space-x-3">
              <button
                title="Manage Movies"
                onClick={() => navigate('/admin/movies')}
                className={`p-2 rounded-md text-gray-400 hover:text-white hover:bg-${ACCENT_COLOR_CLASS}-500/20 transition-colors duration-200`}
              >
                <List size={20} />
              </button>
              <button
                title="Manage Users"
                onClick={() => navigate('/admin/users')}
                className={`p-2 rounded-md text-gray-400 hover:text-white hover:bg-${ACCENT_COLOR_CLASS}-500/20 transition-colors duration-200`}
              >
                <UserIcon size={20} />
              </button>
              <button
                title="Logout"
                onClick={handleLogout}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-500/20 transition-colors duration-200"
              >
                <LogOut size={20} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Stats Grid */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
        >
          {/* Pass data safely */}
          <StatCard icon={Users} title="Total Users" value={stats?.totalUsers} />
          <StatCard icon={Users} title="Active Today" value={stats?.activeUsers} />
          <StatCard icon={Film} title="Total Movies" value={stats?.totalMovies} />
          <StatCard icon={Clock} title="New This Month" value={stats?.recentMovies} />
        </motion.section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 md:mb-8">
          {/* Genre Distribution (Pie Chart) - Takes 2/5 width */}
          <motion.div variants={cardVariants} className="lg:col-span-2 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-base font-semibold mb-4 text-white">Genre Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
               {stats.genreData && stats.genreData.length > 0 ? (
                 <PieChart>
                    <defs>
                        {/* Optional: Add a subtle gradient fill */}
                        <linearGradient id="pieGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.9}/>
                            <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0.7}/>
                        </linearGradient>
                    </defs>
                    <Pie
                        data={stats.genreData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name" // Ensure nameKey is set for tooltip label
                        stroke={''} // No stroke between cells
                    >
                        {stats.genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.85}/>
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: '12px', color: CHART_TEXT_COLOR, paddingTop: '15px' }} />
                 </PieChart>
                ) : (
                 <div className="flex items-center justify-center h-full text-gray-500 text-sm">No genre data available.</div>
                )}
            </ResponsiveContainer>
          </motion.div>

          {/* Movie Count per Genre (Bar Chart) - Takes 3/5 width */}
          <motion.div variants={cardVariants} className="lg:col-span-3 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-base font-semibold mb-4 text-white">Movies per Genre</h3>
            <ResponsiveContainer width="100%" height={300}>
               {stats.recommendationData && stats.recommendationData.length > 0 ? (
                 <BarChart data={stats.recommendationData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke={CHART_GRID_COLOR} vertical={false}/>
                   <XAxis dataKey="genre" tick={{ fill: CHART_TEXT_COLOR, fontSize: 11 }} stroke={CHART_GRID_COLOR} tickLine={false} axisLine={false}/>
                   <YAxis tick={{ fill: CHART_TEXT_COLOR, fontSize: 11 }} stroke={CHART_GRID_COLOR} tickLine={false} axisLine={false} />
                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(147, 197, 253, 0.1)' }} /> {/* Light blue transparent cursor */}
                   {/* <Legend wrapperStyle={{ fontSize: '12px', color: CHART_TEXT_COLOR }} /> */}
                   <Bar dataKey="count" fill={COLORS[0]} name="Movies" radius={[3, 3, 0, 0]} barSize={20} fillOpacity={0.8}/>
                 </BarChart>
                ) : (
                 <div className="flex items-center justify-center h-full text-gray-500 text-sm">No data available.</div>
                )}
            </ResponsiveContainer>
          </motion.div>
        </section>

        {/* Lists Section (Popular Movies & Feedback) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Popular Movies List */}
          <motion.div variants={cardVariants} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-base font-semibold mb-4 text-white">Most Popular Movies</h3>
            <div className="space-y-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700/50 pr-2">
              {stats.popularMovies && stats.popularMovies.length > 0 ? (
                stats.popularMovies.map((movie, index) => (
                <div key={movie.id || index} className="flex items-center justify-between py-2.5 px-2 rounded hover:bg-gray-700/50 transition-colors duration-150">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <TrendingUp className={`text-${ACCENT_COLOR_CLASS}-400 flex-shrink-0`} size={16} />
                    <span className="text-sm text-gray-200 truncate" title={movie.title}>{movie.title}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium flex-shrink-0 ml-4">{movie.views?.toLocaleString() ?? 'N/A'} views</span>
                </div>
              ))
              ) : (
                <p className="text-gray-500 text-sm py-4 text-center">No popular movie data found.</p>
              )}
            </div>
          </motion.div>

          {/* Recent Feedback List */}
          <motion.div variants={cardVariants} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-base font-semibold mb-4 text-white">Recent Feedback</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700/50 pr-2">
              {stats.recentFeedback && stats.recentFeedback.length > 0 ? (
                stats.recentFeedback.map((feedback, index) => (
                <div key={feedback.id || index} className="py-2.5 px-2 border-b border-gray-700/60 last:border-b-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                        <span className="font-medium text-sm text-gray-100 mr-2">{feedback.user || 'Anonymous'}</span>
                        <span className="text-xs text-gray-400 italic">on {feedback.movie || 'N/A'}</span>
                    </div>
                    <div className="flex items-center space-x-0.5 flex-shrink-0 ml-2">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < (feedback.rating ?? 0) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor"/>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-normal pt-1">{feedback.comment || <span className="text-gray-500 italic">No comment</span>}</p>
                </div>
              ))
              ) : (
                <p className="text-gray-500 text-sm py-4 text-center">No recent feedback available.</p>
              )}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 mb-4 text-xs text-gray-600">
            HoloFlix Admin Panel &copy; {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Admin;