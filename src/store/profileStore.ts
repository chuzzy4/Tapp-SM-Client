// store/profileStore.ts
import { create } from "zustand";
import api from "../utils/axios";
import { toast } from "react-toastify";

type Link = {
  label: string;
  url: string;
};

type Profile = {
  _id: string;
  fullName: string;
  username: string;
  bio?: string;
  avatar?: string;
  phone?: string;
  whatsapp?: string;
  isPublic: boolean;
  slug: string;
  views: number;
  qrCode?: string;
  links: Link[];
  createdAt: string;
  updatedAt: string;
};

type ProfileStore = {
  profile: Profile | null;
  loading: boolean; // for fetching
  updating: boolean; // for saving
  getProfile: () => Promise<void>;
  updateProfileVisibility: (data: Partial<Profile>) => Promise<void>;
  updateProfile: (formData: FormData) => Promise<void>;
};

const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: false,
  updating: false,

  getProfile: async () => {
    set({ loading: true });
    try {
      const res = await api.get("/profile/me");
      set({ profile: res.data });
    } catch (err) {
      console.error("Failed to fetch profile", err);
      toast.error("Failed to load profile");
    } finally {
      set({ loading: false });
    }
  },

  updateProfileVisibility: async (data) => {
    set({ updating: true });
    try {
      const res = await api.patch("/profile/visibility", data);
      set({ profile: res.data });
      toast.success("Visibility updated successfully");
    } catch (err) {
      console.error("Failed to update profile visibility", err);
      toast.error("Failed to update visibility");
    } finally {
      set({ updating: false });
    }
  },

  updateProfile: async (formData: FormData) => {
    set({ updating: true });
    try {
      const res = await api.put("/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set({ profile: res.data });
      toast.success("Profile updated successfully ✅");
    } catch (err) {
      console.error("Failed to update profile", err);
      toast.error("Failed to update profile ❌");
    } finally {
      set({ updating: false });
    }
  },
}));

export default useProfileStore;
