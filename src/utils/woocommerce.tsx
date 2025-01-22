import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bullet-mart.net.pk/wp-json/wp/v2', // WooCommerce API base URL
  auth: {
    username: 'ck_82a3de7351fc9355d7f6a70ac2c5e337d8acfb9f',  // WooCommerce Consumer Key
    password: 'cs_578807aadb39200036af7c5549667080eab18940',  // WooCommerce Consumer Secret
  },
});

export default api;
