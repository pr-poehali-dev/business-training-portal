const Stats = () => {
  const stats = [
    { number: "12000+", label: "Обученных специалистов" },
    { number: "450+", label: "Сертифицированных предприятий" },
    { number: "18", label: "Лет в промбезопасности" },
    { number: "100%", label: "Успешной аттестации" },
  ];

  return (
    <section className="py-20 bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Результаты работы
          </h2>
          <p className="text-blue-100 text-lg">
            Более 18 лет обеспечиваем промышленную безопасность предприятий
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-blue-100">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-blue-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
