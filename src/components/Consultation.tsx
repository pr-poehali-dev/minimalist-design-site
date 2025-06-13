import Icon from "@/components/ui/icon";

const Consultation = () => {
  return (
    <section id="consultation" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Бесплатная консультация
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Запишитесь на бесплатную консультацию и получите персональные
            рекомендации по вашему проекту
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Личная встреча
              </h3>
              <p className="text-gray-300">
                Встречаемся в нашем офисе или у вас дома
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Video" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Онлайн-консультация
              </h3>
              <p className="text-gray-300">
                Видеозвонок в удобное для вас время
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                60 минут
              </h3>
              <p className="text-gray-300">
                Подробно обсуждаем ваши потребности
              </p>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Записаться на консультацию
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 border border-gray-600 focus:border-white focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 border border-gray-600 focus:border-white focus:outline-none"
              />

              <select className="w-full px-4 py-3 rounded-lg bg-gray-600 text-white border border-gray-600 focus:border-white focus:outline-none">
                <option value="">Выберите тип консультации</option>
                <option value="office">В офисе</option>
                <option value="home">На объекте</option>
                <option value="online">Онлайн</option>
              </select>

              <button
                type="submit"
                className="w-full bg-white text-gray-800 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Записаться бесплатно
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
