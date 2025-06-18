import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Современная квартира в ЖК Северный",
      location: "Москва, Северное Бутово",
      date: "Февраль 2024",
      client: "Создать стильный интерьер для молодой семьи с детьми",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
      ],
      area: "85 м²",
    },
    {
      title: "Минималистичный офис IT-компании",
      location: "Санкт-Петербург, Московский район",
      date: "Январь 2024",
      client: "Функциональное пространство для команды из 25 человек",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop",
      ],
      area: "150 м²",
    },
    {
      title: "Уютная студия для творческой пары",
      location: "Екатеринбург, центр",
      date: "Декабрь 2023",
      client: "Максимально использовать пространство 45 м² для жизни и работы",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      ],
      area: "45 м²",
    },
    {
      title: "Элегантная гостиная в классическом стиле",
      location: "Москва, Арбат",
      date: "Ноябрь 2023",
      client: "Респектабельный интерьер для приема гостей",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
      ],
      area: "120 м²",
    },
    {
      title: "Современная кухня-студия",
      location: "Казань, Приволжский район",
      date: "Октябрь 2023",
      client: "Кухня мечты для семьи, которая любит готовить",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556909045-f7c3c5bd640b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556909045-f7c3c5bd640b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556909045-4d5c2f4745d6?w=600&h=400&fit=crop",
      ],
      area: "60 м²",
    },
    {
      title: "Детская комната в скандинавском стиле",
      location: "Новосибирск, Академгородок",
      date: "Сентябрь 2023",
      client: "Безопасная и развивающая среда для двух детей",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
      ],
      area: "35 м²",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const nextImage = (projectIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

  const goToImage = (projectIndex: number, imageIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

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
              <div className="relative group">
                <img
                  src={project.images[currentImageIndex[index] || 0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-opacity duration-300"
                />

                {/* Navigation arrows */}
                <button
                  onClick={() => prevImage(index)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() => nextImage(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {project.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => goToImage(index, imageIndex)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        (currentImageIndex[index] || 0) === imageIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50 hover:bg-opacity-70"
                      }`}
                    />
                  ))}
                </div>
              </div>

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
