'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    setOpen(false);
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      const newPath = segments.join('/') || '/';
      router.replace(newPath);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-3 py-1.5
          min-w-[60px] md:min-w-[80px]  /* Garante espaço para o texto */
          text-sm bg-white border border-gray-300 
          rounded-full shadow-sm 
          hover:bg-gray-50 transition-colors
        "
      >
        <Globe className="w-4 h-4 text-gray-500" />
        <span className="uppercase block text-gray-500">{locale}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
          absolute 
          left-0 md:right-0 
          mt-2 
          w-44 
          bg-white 
          border border-gray-200 
          rounded-md 
          shadow-lg 
          overflow-auto 
          max-h-48 
          z-[999]
        "
          >
            <ul className="py-1 text-sm text-gray-700">
              {languages.map(({ code, label }) => (
                <li key={code}>
                  <button
                    onClick={() => handleLanguageChange(code)}
                    disabled={isPending}
                    className={`w-full cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors ${locale === code ? 'font-semibold text-primary' : ''
                      }`}
                  >
                    {label}
                    {locale === code && <Check className="w-4 h-4 text-green-600" />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}
