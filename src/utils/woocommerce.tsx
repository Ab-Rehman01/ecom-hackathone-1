import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bullet-mart.net.pk/wp-json/wc/v3/', // WooCommerce API base URL
  auth: {
    username: process.env.NEXT_PUBLIC_WC_CONSUMER_KEY || '', // Consumer Key
    password: process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET || '', // Consumer Secret
  },
});

export default api;


