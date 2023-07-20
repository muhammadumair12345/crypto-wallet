import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = (prop) => {
  const { color, title, icon, subtitle } = prop;
  return (
    <div className="flex p-6 cursor-pointer shadow-md rounded-2xl border-[0.5px] border-primary">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-lg">{title}</h3>
        <p className="mt-1 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

const Services = () => (
  <div className="flex flex-col py-12 md:flex-row justify-between items-center">
    <div>
      <h1 className="text-4xl md:text-6xl mb-4">
        Services that we
        <br /> continue to improve
      </h1>
      <p className="mb-8 font-normal text-xl md:text-2xl">
        The best choice for buying and selling your crypto assets, with the
        various super friendly services we offer
      </p>
    </div>

    <div className="flex flex-col gap-6">
      <ServiceCard
        color={"bg-[#2952E3]"}
        title={"Security gurantee"}
        icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        subtitle={
          "Security is guranteed. We always maintain privacy and maintain the quality of our products"
        }
      />
      <ServiceCard
        color={"bg-[#8945F8]"}
        title={"Best exchange rates"}
        icon={<BiSearchAlt fontSize={21} className="text-white" />}
        subtitle={
          "Security is guranteed. We always maintain privacy and maintain the quality of our products"
        }
      />
      <ServiceCard
        color={"bg-[#F84550]"}
        title={"Fastest transactions"}
        icon={<RiHeart2Fill fontSize={21} className="text-white" />}
        subtitle={
          "Security is guranteed. We always maintain privacy and maintain the quality of our products"
        }
      />
    </div>
  </div>
);

export default Services;
