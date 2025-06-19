import Icon from "@/components/ui/icon";

const Certification = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Лицензии и аккредитация
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Наш учебный центр имеет все необходимые лицензии и аккредитации
              для проведения обучения по охране труда и промышленной
              безопасности.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="Award" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Лицензия на образовательную деятельность
                  </h4>
                  <p className="text-gray-600">
                    Лицензия Рособрнадзора на право ведения образовательной
                    деятельности
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="FileText" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Аккредитация Минтруда РФ
                  </h4>
                  <p className="text-gray-600">
                    Право проведения обучения по охране труда и выдачи
                    удостоверений
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="Shield" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Согласование с Ростехнадзором
                  </h4>
                  <p className="text-gray-600">
                    Обучение по промышленной безопасности опасных производств
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <Icon
                  name="Award"
                  size={48}
                  className="text-orange-600 mx-auto mb-4"
                />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Удостоверение о проверке знаний
                </h4>
                <p className="text-sm text-gray-600">
                  Центр профессиональной подготовки "ПромБезопасность"
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Все удостоверения регистрируются в реестре Минтруда РФ и имеют
                защитные элементы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
