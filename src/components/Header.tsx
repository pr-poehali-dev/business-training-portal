import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", path: "/" },
    { label: "Курсы ОТ", path: "/safety-courses" },
    { label: "Производственное обучение", path: "/industrial-training" },
    { label: "Сертификация", path: "/certification" },
    { label: "Консультации", path: "/consulting" },
    { label: "Контакты", path: "/contacts" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              ПромБезопасность
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block px-3 py-2 text-gray-600 hover:text-blue-800 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
