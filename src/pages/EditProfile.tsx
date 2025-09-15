// // pages/EditProfile.tsx

// import { useEffect, useState } from "react";
// import useProfileStore from "../store/profileStore";
// import { CameraIcon, PencilIcon } from "lucide-react";

// const EditProfile = () => {
//   const { profile, getProfile, updateProfile, loading, updating } =
//     useProfileStore();

//   const [form, setForm] = useState({
//     fullName: "",
//     username: "",
//     slug: "",
//     bio: "",
//     phone: "",
//     whatsapp: "",
//     links: [{ label: "", url: "" }],
//   });

//   const [avatar, setAvatar] = useState<File | null>(null);
//   const [avatarPreview, setAvatarPreview] = useState<string>("");
//   const [editField, setEditField] = useState<string | null>(null);

//   useEffect(() => {
//     getProfile();
//   }, []);

//   useEffect(() => {
//     if (profile) {
//       setForm({
//         fullName: profile.fullName || "",
//         username: profile.username || "",
//         slug: profile.slug || "",
//         bio: profile.bio || "",
//         phone: profile.phone || "",
//         whatsapp: profile.whatsapp || "",
//         links: profile.links.length ? profile.links : [{ label: "", url: "" }],
//       });
//       setAvatarPreview(profile.avatar || "");
//     }
//   }, [profile]);

//   const handleChange = (name: string, value: string) => {
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAvatarChange = (file: File | null) => {
//     if (file) {
//       setAvatar(file);
//       setAvatarPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (const key in form) {
//       if (key === "links") {
//         formData.append("links", JSON.stringify(form.links));
//       } else {
//         formData.append(key, (form as any)[key]);
//       }
//     }
//     if (avatar) formData.append("avatar", avatar);
//     updateProfile(formData);
//   };

//   if (loading && !profile) return <p className="text-white">Loading...</p>;

//   return (
//     <div className="p-4 text-white max-w-lg mx-auto">
//       {/* Profile Picture */}
//       <div className="relative w-28 h-28 mx-auto mb-6">
//         <img
//           src={avatarPreview || "/default-avatar.png"}
//           alt="Avatar"
//           className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
//         />
//         <label className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer">
//           <CameraIcon className="w-5 h-5 text-white" />
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleAvatarChange(e.target.files?.[0] || null)}
//           />
//         </label>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Editable Fields */}
//         {[
//           { key: "fullName", label: "Full Name" },
//           { key: "username", label: "Username" },
//           { key: "slug", label: "Slug" },
//           { key: "bio", label: "Bio", textarea: true },
//           { key: "phone", label: "Phone" },
//           { key: "whatsapp", label: "WhatsApp" },
//         ].map((field) => (
//           <div
//             key={field.key}
//             className="bg-gray-800 p-3 rounded flex justify-between items-center"
//           >
//             {editField === field.key ? (
//               field.textarea ? (
//                 <textarea
//                   value={(form as any)[field.key]}
//                   onChange={(e) => handleChange(field.key, e.target.value)}
//                   className="w-full bg-gray-700 p-2 rounded"
//                 />
//               ) : (
//                 <input
//                   type="text"
//                   value={(form as any)[field.key]}
//                   onChange={(e) => handleChange(field.key, e.target.value)}
//                   className="w-full bg-gray-700 p-2 rounded"
//                 />
//               )
//             ) : (
//               <p>
//                 {(form as any)[field.key] || (
//                   <span className="text-gray-400">Not set</span>
//                 )}
//               </p>
//             )}
//             <button
//               type="button"
//               onClick={() =>
//                 setEditField(editField === field.key ? null : field.key)
//               }
//             >
//               <PencilIcon className="w-5 h-5 text-gray-400" />
//             </button>
//           </div>
//         ))}

//         {/* Save Button */}
//         <button
//           type="submit"
//           disabled={updating}
//           className={`bg-blue-500 px-4 py-2 rounded w-full ${
//             updating ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {updating ? "Saving..." : "Save Changes"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

// pages/EditProfile.tsx

import { useEffect, useState } from "react";
import useProfileStore from "../store/profileStore";
import { CameraIcon, PencilIcon, TrashIcon } from "lucide-react";

// Predefined platforms with icon & placeholder
const availablePlatforms = [
  {
    label: "Instagram",
    icon: "📸",
    placeholder: "https://instagram.com/username",
  },
  { label: "Twitter", icon: "🐦", placeholder: "https://twitter.com/username" },
  {
    label: "LinkedIn",
    icon: "💼",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    label: "Facebook",
    icon: "📘",
    placeholder: "https://facebook.com/username",
  },
  { label: "Website", icon: "🌐", placeholder: "https://yourwebsite.com" },
];

const EditProfile = () => {
  const { profile, getProfile, updateProfile, loading, updating } =
    useProfileStore();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    slug: "",
    bio: "",
    phone: "",
    whatsapp: "",
    links: [{ label: "", url: "" }],
  });

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [editField, setEditField] = useState<string | null>(null);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setForm({
        fullName: profile.fullName || "",
        username: profile.username || "",
        slug: profile.slug || "",
        bio: profile.bio || "",
        phone: profile.phone || "",
        whatsapp: profile.whatsapp || "",
        links: profile.links.length ? profile.links : [{ label: "", url: "" }],
      });
      setAvatarPreview(profile.avatar || "");
    }
  }, [profile]);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (file: File | null) => {
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      if (key === "links") {
        formData.append("links", JSON.stringify(form.links));
      } else {
        formData.append(key, (form as any)[key]);
      }
    }
    if (avatar) formData.append("avatar", avatar);
    updateProfile(formData);
  };

  const handleAddLink = (platformLabel: string) => {
    setForm({
      ...form,
      links: [...form.links, { label: platformLabel, url: "" }],
    });
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = form.links.filter((_, i) => i !== index);
    setForm({ ...form, links: updatedLinks });
  };

  if (loading && !profile) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4 text-white max-w-lg mx-auto">
      {/* Profile Picture */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        <img
          src={avatarPreview || "/default-avatar.png"}
          alt="Avatar"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
        />
        <label className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer">
          <CameraIcon className="w-5 h-5 text-white" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleAvatarChange(e.target.files?.[0] || null)}
          />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Editable Profile Fields */}
        {[
          { key: "fullName", label: "Full Name" },
          { key: "username", label: "Username" },
          { key: "slug", label: "Slug" },
          { key: "bio", label: "Bio", textarea: true },
          { key: "phone", label: "Phone" },
          { key: "whatsapp", label: "WhatsApp" },
        ].map((field) => (
          <div
            key={field.key}
            className="bg-gray-800 p-3 rounded flex justify-between items-center"
          >
            {editField === field.key ? (
              field.textarea ? (
                <textarea
                  value={(form as any)[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="w-full bg-gray-700 p-2 rounded"
                />
              ) : (
                <input
                  type="text"
                  value={(form as any)[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="w-full bg-gray-700 p-2 rounded"
                />
              )
            ) : (
              <p>
                {(form as any)[field.key] || (
                  <span className="text-gray-400">Not set</span>
                )}
              </p>
            )}
            <button
              type="button"
              onClick={() =>
                setEditField(editField === field.key ? null : field.key)
              }
            >
              <PencilIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}

        {/* Links Section */}
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>

          {form.links.map((link, index) => {
            const platform = availablePlatforms.find(
              (p) => p.label === link.label
            );
            return (
              <div
                key={index}
                className="flex items-center gap-2 mb-3 bg-gray-800 p-2 rounded"
              >
                <span className="text-2xl">{platform?.icon || "🔗"}</span>
                <span className="w-28">{link.label || "Custom"}</span>
                <input
                  type="url"
                  placeholder={platform?.placeholder || "Enter link"}
                  value={link.url}
                  onChange={(e) => {
                    const updatedLinks = [...form.links];
                    updatedLinks[index].url = e.target.value;
                    setForm({ ...form, links: updatedLinks });
                  }}
                  className="flex-1 p-2 bg-gray-700 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveLink(index)}
                  className="text-red-400"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            );
          })}

          {/* Add Link Dropdown */}
          <div className="mt-3">
            <select
              onChange={(e) => {
                if (!e.target.value) return;
                handleAddLink(e.target.value);
                e.target.value = "";
              }}
              className="bg-gray-700 p-2 rounded w-full"
            >
              <option value="">Add New Link</option>
              {availablePlatforms
                .filter((p) => !form.links.some((l) => l.label === p.label))
                .map((platform) => (
                  <option key={platform.label} value={platform.label}>
                    {platform.label}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={updating}
          className={`bg-blue-500 px-4 py-2 rounded w-full ${
            updating ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {updating ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
