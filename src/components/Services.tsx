const Services = () => {
  const services = [
    {
      title: "Дизайн-проект квартиры",
      price: "от 2 500 ₽/м²",
      description:
        "Полный дизайн-проект с планировкой, 3D-визуализацией и чертежами",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      features: [
        "Планировочное решение",
        "3D-визуализация",
        "Рабочие чертежи",
        "Смета на материалы",
      ],
    },
    {
      title: "Дизайн коммерческих помещений",
      price: "от 3 000 ₽/м²",
      description:
        "Проектирование офисов, кафе, магазинов с учетом бизнес-задач",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: [
        "Концепция бренда",
        "Функциональная планировка",
        "Дизайн-код",
        "Авторский надзор",
      ],
    },
    {
      title: "Консультация и планировка",
      price: "от 5 000 ₽",
      description:
        "Разработка планировочного решения и рекомендации по дизайну",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      features: [
        "Анализ пространства",
        "Планировочные варианты",
        "Рекомендации по отделке",
        "Консультация 2 часа",
      ],
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр услуг по дизайну интерьера — от концепции
            до реализации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  {service.price}
                </p>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Заказать услугу
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
