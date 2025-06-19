import Icon from "@/components/ui/icon";

const Certification = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Сертификация и документы
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Получите официальные документы о повышении квалификации,
              признанные работодателями и государственными органами.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="Award" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Государственная лицензия
                  </h4>
                  <p className="text-gray-600">
                    Образовательная деятельность по лицензии № 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="FileText" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Удостоверения о повышении квалификации
                  </h4>
                  <p className="text-gray-600">
                    Официальные документы установленного образца
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                  <Icon name="Shield" size={20} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Сертификаты компетенций
                  </h4>
                  <p className="text-gray-600">
                    Подтверждение профессиональных навыков
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <Icon
                  name="Certificate"
                  size={48}
                  className="text-purple-600 mx-auto mb-4"
                />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Образец сертификата
                </h4>
                <p className="text-sm text-gray-600">
                  Учебный центр профессионального развития
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Все документы заносятся в федеральный реестр и имеют QR-код для
                проверки подлинности
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
