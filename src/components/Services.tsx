import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "Monitor",
      title: "Онлайн-обучение",
      description:
        "Современные интерактивные курсы с доступом 24/7 из любой точки мира.",
      features: [
        "Видеолекции в HD качестве",
        "Интерактивные тесты и задания",
        "Персональный куратор",
        "Мобильное приложение",
      ],
    },
    {
      icon: "Users",
      title: "Очные курсы",
      description:
        "Интенсивные программы с практическими занятиями в современных аудиториях.",
      features: [
        "Малые группы до 12 человек",
        "Практические кейсы",
        "Нетворкинг с коллегами",
        "Современное оборудование",
      ],
    },
    {
      icon: "Building2",
      title: "Корпоративное обучение",
      description:
        "Индивидуальные программы для развития команд и повышения эффективности.",
      features: [
        "Программы под ваши задачи",
        "Обучение на территории клиента",
        "Корпоративные скидки",
        "Отчетность для HR",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Форматы обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный формат и начните развивать профессиональные навыки
            уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
