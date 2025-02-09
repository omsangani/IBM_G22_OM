import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, Label  } from 'recharts';
import { Users, Film, TrendingUp, Clock, Star } from 'lucide-react';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  // Simulated data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStats({
        totalUsers: 1250,
        activeUsers: 456,
        totalMovies: 890,
        recentMovies: 23,
        popularMovies: [
          { title: 'Inception', views: 1200 },
          { title: 'The Dark Knight', views: 980 },
          { title: 'Interstellar', views: 850 },
          { title: 'Pulp Fiction', views: 750 },
          { title: 'The Matrix', views: 700 }
        ],
        genreData: [
          { name: 'Action', value: 35, description: '35% - Popular among 18-34 age group' },
          { name: 'Drama', value: 25, description: '25% - High critic ratings' },
          { name: 'Comedy', value: 20, description: '20% - Most watched on weekends' },
          { name: 'Sci-Fi', value: 15, description: '15% - Growing trend' },
          { name: 'Horror', value: 5, description: '5% - Seasonal popularity' }
        ],
        recommendationData: [
          { genre: 'Action', count: 450 },
          { genre: 'Drama', count: 380 },
          { genre: 'Comedy', count: 300 },
          { genre: 'Sci-Fi', count: 280 },
          { genre: 'Horror', count: 150 }
        ],
        recentFeedback: [
          { user: 'John Doe', movie: 'Inception', rating: 5, comment: 'Masterpiece!' },
          { user: 'Jane Smith', movie: 'The Matrix', rating: 4, comment: 'Great movie!' },
          { user: 'Mike Johnson', movie: 'Interstellar', rating: 5, comment: 'Mind-blowing!' }
        ]
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const COLORS = ['#4F46E5', '#7C3AED', '#EC4899', '#F59E0B', '#10B981'];

  const StatCard = ({ icon: Icon, title, value, className }) => (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <Icon className="text-indigo-600" size={24} />
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-semibold text-gray-800">{data.name}</p>
          <p className="text-gray-600">{data.description}</p>
          <p className="text-indigo-600 font-medium mt-1">
            {data.value}% of total movies
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} title="Total Users" value={stats.totalUsers} />
        <StatCard icon={Users} title="Active Users Today" value={stats.activeUsers} />
        <StatCard icon={Film} title="Total Movies" value={stats.totalMovies} />
        <StatCard icon={Clock} title="Recently Added Movies" value={stats.recentMovies} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Genre Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Movies by Genre</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.genreData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      className="text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {`${stats.genreData[index].name} (${value}%)`}
                    </text>
                  );
                }}
              >
                {stats.genreData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Label value="Genre Distribution" position="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Movie Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Movie Recommendations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.recommendationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="genre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#4F46E5" name="Number of Recommendations" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Movies & Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Movies */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Most Popular Movies</h3>
          <div className="space-y-4">
            {stats.popularMovies.map((movie, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="text-indigo-600 mr-3" size={20} />
                  <span>{movie.title}</span>
                </div>
                <span className="text-gray-600">{movie.views} views</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Feedback */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
          <div className="space-y-4">
            {stats.recentFeedback.map((feedback, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{feedback.user}</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={16} />
                    <span className="ml-1">{feedback.rating}/5</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{feedback.movie}</p>
                <p className="text-gray-500 text-sm mt-1">{feedback.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;