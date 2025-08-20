// components/SocialShare.js
"use client";

import {
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Copy,
} from "lucide-react";

const socialPlatforms = [
  {
    name: "Twitter",
    icon: <Twitter size={20} />,
    url: (title, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
  },
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    url: (title, url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: (title, url) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    url: (title, url) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
        url
      )}`,
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle size={20} />,
    url: (title, url) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },
];

export default function SocialShare({ title }) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("Link copiato negli appunti!");
  };

  return (
    <div className="mt-12 border-t pt-6 flex flex-wrap gap-3 items-center">
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url(title, url)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {platform.icon}
          <span className="text-sm">{platform.name}</span>
        </a>
      ))}

      {/* Copy link */}
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <Copy size={20} />
        <span className="text-sm">Copia link</span>
      </button>
    </div>
  );
}
