import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={32} className="text-gray-800" />
            <h1 className="text-2xl font-bold text-gray-800">
              ИНТЕРЬЕР СТУДИЯ
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Контакты
            </a>
            <a
              href="#consultation"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Консультация
            </a>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
