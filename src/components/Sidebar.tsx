import React, { useState } from 'react';
import { Download, Mail, Phone, Calendar, MapPin, Github, Linkedin } from 'lucide-react';
import profileImage from '../../assets/images/photo.png';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: <Download />,
      title: 'CV',
      content: 'killianrms.com/cv.pdf',
      link: 'cv.pdf',
      isExternal: true
    },
    {
      icon: <Mail />,
      title: 'Email',
      content: 'contact@killianrms.com',
      link: 'mailto:contact@killianrms.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+33 6 98 00 63 29',
      link: 'tel:+33698006329'
    },
    {
      icon: <Calendar />,
      title: 'Date de naissance',
      content: '28 Juin 2004'
    },
    {
      icon: <MapPin />,
      title: 'Localisation',
      content: 'Montpellier, France'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/killianrms'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/killianrms/'
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen bg-white shadow-lg w-[300px] overflow-y-auto">
      <div className="p-6">
        <div className="text-center mb-6">
          <img
            src={profileImage}
            alt="Killian Ramus"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h1 className="text-xl font-semibold">Killian RAMUS</h1>
          <p className="text-gray-600">Recherche Alternance/Stage</p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-2 px-4 bg-gray-100 rounded-lg flex items-center justify-between mb-6"
        >
          <span>Contact</span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contact.title}</p>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target={contact.isExternal ? "_blank" : undefined}
                        rel={contact.isExternal ? "noopener noreferrer" : undefined}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{contact.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
