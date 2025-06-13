const Portfolio = () => {
  const projects = [
    {
      title: "Современная квартира в ЖК Северный",
      location: "Москва, Северное Бутово",
      date: "Февраль 2024",
      client: "Создать стильный интерьер для молодой семьи с детьми",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      area: "85 м²",
    },
    {
      title: "Минималистичный офис IT-компании",
      location: "Санкт-Петербург, Московский район",
      date: "Январь 2024",
      client: "Функциональное пространство для команды из 25 человек",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      area: "150 м²",
    },
    {
      title: "Уютная студия для творческой пары",
      location: "Екатеринбург, центр",
      date: "Декабрь 2023",
      client: "Максимально использовать пространство 45 м² для жизни и работы",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      area: "45 м²",
    },
    {
      title: "Элегантная гостиная в классическом стиле",
      location: "Москва, Арбат",
      date: "Ноябрь 2023",
      client: "Респектабельный интерьер для приема гостей",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      area: "120 м²",
    },
    {
      title: "Современная кухня-студия",
      location: "Казань, Приволжский район",
      date: "Октябрь 2023",
      client: "Кухня мечты для семьи, которая любит готовить",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      area: "60 м²",
    },
    {
      title: "Детская комната в скандинавском стиле",
      location: "Новосибирск, Академгородок",
      date: "Сентябрь 2023",
      client: "Безопасная и развивающая среда для двух детей",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      area: "35 м²",
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Наши работы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый проект — это уникальная история, воплощенная в интерьере
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Местоположение:</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Дата проекта:</span>
                    <span className="font-medium">{project.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Площадь:</span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">Запрос клиента:</p>
                  <p className="text-sm text-gray-800">{project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors">
            Посмотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
