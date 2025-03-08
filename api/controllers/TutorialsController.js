const axios = require('axios');

module.exports = {
  async getYouTubeVideos(req, res) {
    try {
      const { query } = req.query; // Get search keyword from request
      const YOUTUBE_API_KEY = 'AIzaSyDd6yaL5a_HAEks39Ic7pLlj7mIaSl_jkk'; // Replace with your YouTube API key

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            q: query,
            part: 'snippet',
            type: 'video',
            maxResults: 6,
            key: YOUTUBE_API_KEY
          }
        }
      );

      return res.json(response.data.items);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching YouTube videos' });
    }
  }
};