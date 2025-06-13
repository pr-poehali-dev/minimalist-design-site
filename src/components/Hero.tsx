const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Создаем интерьеры,
              <br />
              <span className="text-gray-600">которые вдохновляют</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональный дизайн интерьера для жилых и коммерческих
              помещений. Превращаем ваши идеи в реальность с учетом
              функциональности и эстетики.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                Посмотреть работы
              </a>
              <a
                href="#consultation"
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-800 hover:text-white transition-colors text-center"
              >
                Бесплатная консультация
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
              alt="Современный интерьер гостиной"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
