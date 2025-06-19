import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "HardHat",
      title: "Охрана труда",
      description:
        "Обучение руководителей и специалистов по охране труда согласно требованиям Минтруда РФ.",
      features: [
        "Программа 40 часов для руководителей",
        "Обучение членов комиссии по ОТ",
        "Проверка знаний требований ОТ",
        "Удостоверения установленного образца",
      ],
    },
    {
      icon: "Factory",
      title: "Промышленная безопасность",
      description:
        "Подготовка специалистов по промышленной безопасности опасных производственных объектов.",
      features: [
        "Обучение по группам А, Б, В, Г, Д",
        "Аттестация в Ростехнадзоре",
        "Повышение квалификации",
        "Консультации по ПБ",
      ],
    },
    {
      icon: "Wrench",
      title: "Рабочие профессии",
      description:
        "Первичное обучение и повышение разряда по рабочим профессиям для промышленных предприятий.",
      features: [
        "Сварщики всех категорий",
        "Стропальщики и крановщики",
        "Слесари-ремонтники",
        "Практические занятия на базе",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Направления обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные программы обучения для обеспечения безопасности и
            эффективности производственных процессов
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
