import axios from 'axios';

// Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
};

// Farmer APIs
export const farmerAPI = {
  getDashboard: () => api.get('/farmer/dashboard'),
  getAnimals: () => api.get('/farmer/my-animals'),
  getAnimalDetails: (id) => api.get(`/farmer/animal/${id}`),
  getComplaints: () => api.get('/farmer/complaints'),
  getReports: () => api.get('/farmer/reports'),
};

// Veterinarian APIs
export const veterinarianAPI = {
  getDashboard: () => api.get('/veterinarian/dashboard'),
  getPatients: () => api.get('/veterinarian/my-patients'),
  getAppointments: () => api.get('/veterinarian/appointments'),
  getTodayAppointments: () => api.get('/veterinarian/today-appointments'),
  getMedicalRecords: () => api.get('/veterinarian/medical-records'),
  addPrescription: (data) => api.post('/veterinarian/add-prescription', data),
};

// Admin APIs
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  getAllUsers: () => api.get('/admin/users'),
  getUsersByRole: (role) => api.get(`/admin/users/${role}`),
  updateUserStatus: (id, status) => api.post(`/admin/users/${id}/status`, { status }),
  getSystemOverview: () => api.get('/admin/stats/overview'),
  getSystemReports: () => api.get('/admin/reports/system'),
};

// Common APIs
export const animalsAPI = {
  createAnimal: (data) => api.post('/animals', data),
  getAnimals: () => api.get('/animals'),
  getAnimalById: (id) => api.get(`/animals/${id}`),
  updateAnimal: (id, data) => api.put(`/animals/${id}`, data),
  deleteAnimal: (id) => api.delete(`/animals/${id}`),
};

export const complaintsAPI = {
  createComplaint: (data) => api.post('/complaints', data),
  getComplaints: () => api.get('/complaints'),
  getComplaintById: (id) => api.get(`/complaints/${id}`),
  updateComplaint: (id, data) => api.put(`/complaints/${id}`, data),
  deleteComplaint: (id) => api.delete(`/complaints/${id}`),
};

export const appointmentsAPI = {
  createAppointment: (data) => api.post('/appointments', data),
  getAppointments: () => api.get('/appointments'),
  getAppointmentById: (id) => api.get(`/appointments/${id}`),
  updateAppointmentStatus: (id, status) => api.put(`/appointments/${id}/status`, { status }),
  deleteAppointment: (id) => api.delete(`/appointments/${id}`),
};

export const prescriptionsAPI = {
  createPrescription: (data) => api.post('/prescriptions', data),
  getPrescriptions: () => api.get('/prescriptions'),
  getAnimalPrescriptions: (animalId) => api.get(`/prescriptions/animal/${animalId}`),
  getPrescriptionById: (id) => api.get(`/prescriptions/${id}`),
};

export const treatmentsAPI = {
  createTreatment: (data) => api.post('/treatments', data),
  getTreatments: () => api.get('/treatments'),
  getAnimalTreatments: (animalId) => api.get(`/treatments/animal/${animalId}`),
  updateTreatment: (id, data) => api.put(`/treatments/${id}`, data),
};

export const medicalRecordsAPI = {
  createMedicalRecord: (data) => api.post('/medical-records', data),
  getMedicalRecords: () => api.get('/medical-records'),
  getAnimalMedicalRecord: (animalId) => api.get(`/medical-records/animal/${animalId}`),
  addVisit: (id, data) => api.put(`/medical-records/${id}/visit`, data),
  getMedicalRecordById: (id) => api.get(`/medical-records/${id}`),
};

export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getHealthTrends: () => api.get('/dashboard/health-trends'),
  getRevenueData: () => api.get('/dashboard/revenue-data'),
};

export default api;