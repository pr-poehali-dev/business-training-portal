import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-center mb-6">
        <div className="bg-blue-50 p-3 rounded-lg mr-4">
          <Icon name={icon} size={24} className="text-blue-800" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <Icon
              name="Check"
              size={16}
              className="text-blue-600 mr-3 flex-shrink-0 mt-0.5"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="text-blue-800 font-medium hover:text-blue-900 transition-colors">
          Подробнее →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
