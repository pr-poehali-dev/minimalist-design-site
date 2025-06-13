import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами
              в течение дня
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-gray-600 mr-4" />
                  <span className="text-gray-800">+7 (495) 123-45-67</span>
                </div>

                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-gray-600 mr-4" />
                  <span className="text-gray-800">info@interior-studio.ru</span>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-gray-600 mr-4"
                  />
                  <span className="text-gray-800">
                    Москва, ул. Дизайнерская, 15
                  </span>
                </div>

                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-gray-600 mr-4" />
                  <span className="text-gray-800">
                    Пн-Пт: 10:00-19:00, Сб: 11:00-16:00
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
