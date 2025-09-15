// utils/iconMap.ts
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedins: FaLinkedin,
  github: FaGithub,
  default: FaGlobe,
};
