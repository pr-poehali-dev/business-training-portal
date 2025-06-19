const Stats = () => {
  const stats = [
    { number: "5000+", label: "Выпускников" },
    { number: "200+", label: "Программ обучения" },
    { number: "15", label: "Лет опыта" },
    { number: "98%", label: "Довольных клиентов" },
  ];

  return (
    <section className="py-16 bg-purple-600">
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
