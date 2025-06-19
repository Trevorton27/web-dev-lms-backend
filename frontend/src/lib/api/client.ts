// lib/api/client.ts
import axios from 'axios';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const apiClient = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Inject token at runtime
export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};
