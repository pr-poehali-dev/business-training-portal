import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Центр профессиональной подготовки
            <span className="text-blue-800 block mt-2">
              по промышленной безопасности
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Обучение специалистов предприятий по охране труда, промышленной
            безопасности и рабочим профессиям. Лицензированные программы.
            Удостоверения государственного образца. Корпоративные решения для
            промышленных предприятий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-800 text-white px-10 py-4 rounded-md font-semibold hover:bg-blue-900 transition-colors text-lg">
              Заказать корпоративное обучение
            </button>
            <button className="border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-md font-semibold hover:bg-gray-50 transition-colors text-lg">
              Каталог программ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
