

import axios from 'axios';

const apiUrl = 'https://georima.pptik.id/api/v1';

// Fungsi untuk mendapatkan data kegiatan
export const getActivities = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${apiUrl}/activities/public/get`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error.message);
    throw error;
  }
};

// Fungsi untuk mendapatkan detail kegiatan berdasarkan GUID
export const getActivityByGuid = async (guid) => {
  try {
    const response = await axios.get(`${apiUrl}/activities/public/detail/${guid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activity by GUID:', error.message);
    throw error;
  }
};

// Fungsi untuk mendapatkan semua berita
export const getNews = async (page = 1, limit = 10, token) => {
  try {
    const response = await axios.get(`${apiUrl}/news/public/get`, {
      params: { page, limit },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw error;
  }
};

// Fungsi untuk mendapatkan detail berita berdasarkan GUID
export const getNewsByGuid = async (guid, token) => {
  try {
    const response = await axios.get(`${apiUrl}/news/public/detail/${guid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news by GUID:', error.message);
    throw error;
  }
};

// Fungsi untuk mendapatkan profil perusahaan
export const getCompanyProfile = async () => {
  try {
    const response = await axios.get(`${apiUrl}/company/public`);
    return response.data;
  } catch (error) {
    console.error('Error fetching company profile:', error.message);
    throw error;
  }
};
