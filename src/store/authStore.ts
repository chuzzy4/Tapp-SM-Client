import { create } from "zustand";
import api from "../utils/axios";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  token: string | null;
  loading: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;

  sendCode: (email: string) => Promise<void>;
  register: (name: string, email: string) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  loading: false,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),

  sendCode: async (email: string) => {
    set({ loading: true });
    try {
      await api.post("/auth/login", { email });
    } catch (err: any) {
      const errorMsg = err.response?.data?.msg || "Login failed";
      throw new Error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },

  register: async (name, email) => {
    set({ loading: true });
    try {
      await api.post("/auth/register", { name, email });
    } catch (err: any) {
      const errorMsg = err.response?.data?.msg || "Registration failed";
      throw new Error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },

  verifyOtp: async (email, otp) => {
    set({ loading: true });
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      const { user, accessToken } = res.data;
      set({ user, token: accessToken });
      localStorage.setItem("token", accessToken);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAuthStore;
