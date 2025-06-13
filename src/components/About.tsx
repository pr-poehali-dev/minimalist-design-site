import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            О нашей студии
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы — команда профессиональных дизайнеров с опытом работы более 8
            лет. Создаем уникальные интерьеры, которые отражают индивидуальность
            каждого клиента.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Icon
                name="Award"
                size={48}
                className="text-gray-800 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                150+ проектов
              </h3>
              <p className="text-gray-600">
                Успешно реализованных интерьеров различной сложности
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Icon
                name="Users"
                size={48}
                className="text-gray-800 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                98% довольных клиентов
              </h3>
              <p className="text-gray-600">
                Высокая оценка качества работы и сервиса
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Icon
                name="Clock"
                size={48}
                className="text-gray-800 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Соблюдение сроков
              </h3>
              <p className="text-gray-600">
                Всегда укладываемся в оговоренные временные рамки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
