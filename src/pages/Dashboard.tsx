import { useEffect, useState } from "react";
import useProfileStore from "../store/profileStore";
import { iconMap } from "../utils/iconMap";
import {
  Eye,
  EyeOff,
  QrCode,
  ExternalLink,
  BarChart3,
  Home,
  Edit,
  Settings,
  Globe,
  Lock,
  Copy,
} from "lucide-react";
import { FiEdit3, FiLink } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";

// Bottom Navigation Component
const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const navItems = [
    { id: "profile", icon: Home, label: "Profile" },
    { id: "edit", icon: Edit, label: "Edit" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-xl border-t border-orange-600/50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-orange-600 bg-orange-600/10 scale-110"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium font-inter">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const { profile, getProfile, updateProfileVisibility, loading } =
    useProfileStore();

  useEffect(() => {
    getProfile();
  }, []);

  const copyProfileUrl = async () => {
    try {
      if (!profile) {
        alert("Profile not available");
        return;
      }
      await navigator.clipboard.writeText(`https://tapp/${profile.slug}`);
      alert("Profile URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy URL");
    }
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-neutral-700 border-t-orange-600 rounded-full animate-spin"></div>
          <p className="text-neutral-400 font-medium font-inter">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  const toggleVisibility = () => {
    updateProfileVisibility({ visible: !profile.isPublic } as any);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Desktop/Tablet Container */}
      <div className="mx-auto max-w-4xl lg:max-w-5xl px-4 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              Welcome, {profile.fullName}
            </h1>
            <p className="text-neutral-400 mt-1 font-inter">
              @{profile.username}
            </p>
          </div>
          <button className="p-3">
            <FiEdit3 className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-800 rounded-3xl shadow-xl border  overflow-hidden">
              {/* Profile Header */}
              <div className="relative h-32 bg-orange-600">
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Avatar */}
              <div className="relative px-6 pb-6">
                <div className="flex flex-col items-center -mt-16">
                  <div className="relative">
                    {profile.avatar && (
                      <img
                        src={profile.avatar}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full border-4 border-neutral-900 shadow-lg object-cover"
                      />
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <h2 className="text-xl font-bold text-neutral-100 font-inter">
                      {profile.fullName}
                    </h2>
                    <p className="text-orange-600 font-medium font-inter">
                      @{profile.username}
                    </p>
                    <p className="text-neutral-400 text-sm mt-2 leading-relaxed font-inter">
                      {profile.bio}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mt-6 pt-4 border-t border-orange-600/50 w-full justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-100 font-inter">
                        {profile.views}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wide font-inter">
                        Views
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-100 font-inter">
                        {profile.links?.length || 0}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wide font-inter">
                        Links
                      </div>
                    </div>
                    <div className="text-center flex items-center flex-col space-y-1 mt-1">
                      <div
                        className={`text-2xl font-bold ${
                          profile.isPublic ? "text-[#CBE896]" : "text-red-500"
                        }`}
                      >
                        {profile.isPublic ? (
                          <Globe className="w-6 h-6" />
                        ) : (
                          <Lock className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wide font-inter">
                        Status
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-neutral-800 rounded-3xl shadow-xl border border-white p-6 md:p-8">
              <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center gap-3 font-inter">
                <div>
                  <FaRegUser className="w-5 h-5 text-orange-600" />
                </div>
                Contact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-sm font-medium text-neutral-400 uppercase tracking-wide font-inter">
                    Phone
                  </label>
                  <div className="mt-2 p-4 bg-neutral-700 rounded-xl group-hover:bg-neutral-600 transition-colors">
                    <p className="font-medium text-neutral-100 font-inter">
                      {profile.phone || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="group">
                  <label className="text-sm font-medium text-neutral-400 uppercase tracking-wide font-inter">
                    WhatsApp
                  </label>
                  <div className="mt-2 p-4 bg-neutral-700 rounded-xl group-hover:bg-neutral-600 transition-colors">
                    <p className="font-medium text-neutral-100 font-inter">
                      {profile.whatsapp || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label className="text-sm font-medium text-neutral-400 uppercase tracking-wide font-inter">
                    Profile URL
                  </label>
                  <div className="mt-2 p-4 bg-neutral-700 rounded-xl group-hover:bg-neutral-600 transition-colors flex items-center justify-between">
                    <p className="font-medium text-[#CBE896] text-base font-inter">
                      https://tapp/{profile?.slug || "N/A"}
                    </p>
                    <button
                      onClick={copyProfileUrl}
                      disabled={!profile}
                      className={`p-2 hover:bg-orange-600/20 rounded-full transition-colors ${
                        !profile ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <Copy className="w-4 h-4 text-[#CBE896]" />
                    </button>
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label className="text-sm font-medium text-neutral-400 uppercase tracking-wide font-inter">
                    Public Profile
                  </label>
                  <div className="mt-2 p-4 bg-neutral-700 rounded-xl group-hover:bg-neutral-600 transition-colors">
                    <p className="font-medium text-neutral-100 font-inter">
                      {profile.isPublic ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-neutral-800 rounded-3xl shadow-xl border border-white p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-100 flex items-center gap-3 font-inter">
                  <div>
                    <FiLink className="w-5 h-5 text-orange-600" />
                  </div>
                  Links
                </h3>
                <span className=" text-[#CBE896]  text-sm font-medium ">
                  {profile.links?.length || 0} Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.links &&
                  profile.links.map((link, i) => {
                    const Icon =
                      iconMap[link.label.toLowerCase()] || iconMap.default;

                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-neutral-700 hover:bg-neutral-600 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                      >
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#CBE896] group-hover:text-neutral-200" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-100 group-hover:text-neutral-200 truncate font-inter">
                            {link.label}
                          </p>
                          <p className="text-sm text-neutral-400 truncate font-inter">
                            {link.url}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#CBE896] group-hover:text-neutral-200 opacity-0 group-hover:opacity-100 transition-all" />
                      </a>
                    );
                  })}
              </div>
            </div>

            {/* QR Code & Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QR Code */}
              {profile.qrCode && (
                <div className="bg-neutral-800 rounded-3xl shadow-xl border border-white p-6">
                  <h4 className="font-bold text-neutral-100 mb-4 flex items-center gap-3 font-inter">
                    <QrCode className="w-5 h-5 text-orange-600" />
                    Your QR Code
                  </h4>
                  <div className="flex flex-col items-center">
                    <div className="p-4 bg-neutral-700 rounded-2xl">
                      <img
                        src={profile.qrCode}
                        alt="QR Code"
                        className="w-32 h-32"
                      />
                    </div>
                    <p className="text-sm text-neutral-400 mt-3 text-center font-inter">
                      Scan to view profile
                    </p>
                  </div>
                </div>
              )}

              {/* Privacy Controls */}
              <div className="bg-neutral-800 rounded-3xl shadow-xl border border-white p-6">
                <h4 className="font-bold text-neutral-100 mb-4 flex items-center gap-3 font-inter">
                  {profile.isPublic ? (
                    <Eye className="w-5 h-5 text-[#CBE896]" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-red-500" />
                  )}
                  Privacy Settings
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-700 rounded-2xl">
                    <div>
                      <p className="font-medium text-neutral-100 font-inter">
                        Public Profile
                      </p>
                      <p className="text-xs text-neutral-400 font-inter">
                        Allow others to find your profile
                      </p>
                    </div>
                    <button
                      onClick={toggleVisibility}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 ${
                        profile.isPublic
                          ? "bg-[#CBE896] focus:ring-[#CBE896]"
                          : "bg-red-600 focus:ring-red-600"
                      }`}
                    >
                      <div
                        className={`absolute w-5 h-5 bg-neutral-900 rounded-full shadow-md transition-transform duration-300 ${
                          profile.isPublic ? "translate-x-6" : "translate-x-0.5"
                        }`}
                        style={{ top: "2px" }}
                      ></div>
                    </button>
                  </div>

                  <div
                    className={`p-4 rounded-2xl ${
                      profile.isPublic
                        ? "bg-[#CBE896]/20 border border-[#CBE896]/50"
                        : "bg-white border border-red-300"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium font-inter ${
                        profile.isPublic ? "text-[#CBE896]" : "text-red-500"
                      }`}
                    >
                      {profile.isPublic
                        ? " Profile is visible to everyone"
                        : " Profile is private"}
                    </p>
                  </div>

                  <button
                    onClick={toggleVisibility}
                    className={`w-full px-4 py-3 rounded-2xl font-medium font-inter transition-all duration-300 ${
                      profile.isPublic
                        ? "bg-[#CBE896] hover:bg-[#CBE896]/80 text-neutral-900"
                        : "bg-red-600 hover:bg-red-700 text-neutral-100"
                    }`}
                  >
                    {profile.isPublic ? "Make Private" : "Make Public"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <BottomNav />

      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default Dashboard;
