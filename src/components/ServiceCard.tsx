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
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-lg mr-4">
          <Icon name={icon} size={24} className="text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <Icon
              name="Check"
              size={16}
              className="text-green-500 mr-3 flex-shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
