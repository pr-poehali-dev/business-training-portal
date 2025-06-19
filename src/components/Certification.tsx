import Icon from "@/components/ui/icon";

const Certification = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Лицензии и сертификация
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Учебный центр аккредитован Минтрудом РФ и имеет все необходимые
              лицензии для проведения обучения по охране труда и промышленной
              безопасности.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 mt-1">
                  <Icon name="Award" size={20} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    Лицензия на образовательную деятельность
                  </h4>
                  <p className="text-gray-600">
                    № 12345 от 15.03.2018 г. Департамент образования и науки
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 mt-1">
                  <Icon name="FileText" size={20} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    Аккредитация Минтруда РФ
                  </h4>
                  <p className="text-gray-600">
                    Включение в реестр организаций, оказывающих услуги в области
                    охраны труда
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 mt-1">
                  <Icon name="Shield" size={20} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    Согласование с Ростехнадзором
                  </h4>
                  <p className="text-gray-600">
                    Право проведения подготовки и аттестации в области
                    промышленной безопасности
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="bg-gray-50 p-8 rounded-lg mb-6">
                <Icon
                  name="Award"
                  size={48}
                  className="text-blue-800 mx-auto mb-4"
                />
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                  Удостоверение о проверке знаний
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Центр профессиональной подготовки "ПромБезопасность"
                </p>
                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">
                  Серия ПБ № 000000
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Документы об образовании защищены от подделки и регистрируются в
                федеральных реестрах
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
