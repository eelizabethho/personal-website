import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/eelizabethho",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/eelizabethho/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:eelizabethhowork@gmail.com",
    }
  ];

  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-black/70 text-sm">
            © {currentYear} Elizabeth Ho. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : "_blank"}
                  rel={link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className="text-black/60 hover:text-black/80 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

