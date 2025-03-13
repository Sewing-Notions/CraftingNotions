require('dotenv').config();
const axios = require('axios');

module.exports = {
  async getTutorials(req, res) {
    try {
      const { query, category } = req.query;

      // Fetch YouTube Videos
      const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
      const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: query,
          part: 'snippet',
          type: 'video',
          maxResults: 6,
          key: YOUTUBE_API_KEY
        }
      });

      // Fetch WordPress Tutorials based on category (Crochet or Tapestry)
      let wordpressSites = [];
      if (category === 'crochet') {
        wordpressSites = [
          "https://handylittleme.com",
          "https://crochetkim.com",
          "https://daisyfarmcrafts.com",
          "https://marlybird.com"
        ];
      } else if (category === 'tapestry') {
        wordpressSites = [
          "https://www.textileartist.org",
    "https://mirrixlooms.com",
    "https://warpandweave.com",
    "https://www.theweavingloom.com",
    "https://weavingwithjanetdawson.com"
        ];
      }
      else if (category === 'embroidery'){
        wordpressSites = [
          "https://www.needlenthread.com",
        ];
      }
      else if (category === 'knitting'){
        wordpressSites= [
 "https://www.knitpicks.com",
    "https://www.ravelry.com",
    "https://www.thesprucecrafts.com/knitting-4162925",
    "https://www.lovecrafts.com",
    "https://www.purlsoho.com",
    "https://www.marlybird.com",
    "https://www.verypink.com",
    "https://www.tincanknits.com",
    "https://www.knittinghelp.com",
    "https://www.simplyknitting.com"
        ];
      } else if (category === 'art') {
        wordpressSites = [
          "https://www.proko.com",
    "https://www.drawabox.com",
    "https://www.artstation.com",
    "https://www.deviantart.com",
    "https://www.thedrawingwebsite.com",
    "https://www.digitalarttutorials.com",
    "https://www.drawingtutorials101.com",
    "https://www.drawspace.com",
    "https://www.electronicarts.com/drawing-tutorials"
        ];
      }
      console.log(`📝 Using WordPress sites: ${wordpressSites.join(', ')}`);
      const wordpressPromises = wordpressSites.map(site =>
        axios.get(`${site}/wp-json/wp/v2/posts`, {
          params: { search: query, per_page: 5 } // Fetch max 5 results per site
        }).then(response => ({
          site,
          tutorials: response.data.map(post => ({
            title: post.title.rendered,
            link: post.link,
            thumbnail: post.jetpack_featured_media_url || null // Some sites have images
          }))
        })).catch(() => null) // Ignore failed requests
      );

      const wordpressResults = (await Promise.all(wordpressPromises)).filter(result => result);

      // Craftsy tutorial link (no API available)
      const craftsySearchUrl = `https://www.craftsy.com/search?q=${encodeURIComponent(query)}&category=all`;

      return res.json({
        youtube: youtubeResponse.data.items,
        wordpress: wordpressResults,
        craftsy: craftsySearchUrl
      });

    } catch (error) {
      console.error('Error fetching tutorials:', error);
      return res.status(500).json({ error: 'Error fetching tutorials' });
    }
  }
};