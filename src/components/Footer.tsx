import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" size={28} className="text-white" />
              <h3 className="text-xl font-bold">ИНТЕРЬЕР СТУДИЯ</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Создаем интерьеры, которые вдохновляют и функционально служат
              вашим потребностям.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Facebook"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Youtube"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Дизайн квартир
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Коммерческие проекты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Консультации
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  3D-визуализация
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-3" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-3" />
                <span>info@interior-studio.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-3" />
                <span>Москва, ул. Дизайнерская, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Интерьер Студия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
