const Stats = () => {
  const stats = [
    { number: "12000+", label: "Обученных специалистов" },
    { number: "450+", label: "Сертифицированных предприятий" },
    { number: "18", label: "Лет в промбезопасности" },
    { number: "100%", label: "Успешной аттестации" },
  ];

  return (
    <section className="py-16 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base opacity-90">
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
