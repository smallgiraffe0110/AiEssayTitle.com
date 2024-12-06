"use client";

type FeatureBoxProps = {
  title: string;
  description: string;
  icon?: string;
};

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description, icon}) => {
  return (
    <div className={`relative p-[2px] rounded-xl max-w-sm shadow-md bg-gradient-to-r from-indigo-500 to-pink-500 box-border h-[200px]`}>
      {/* Inner Content */}
      <div className="relative bg-gray-100 p-6 rounded-xl flex flex-col items-center text-center h-[196px]">
        {icon && <i className={`${icon} text-4xl mb-4 text-indigo-500`} />}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
