import Image from "next/image";
import Link from "next/link";

type Location = {
    "street": string,
    "city": string,
    "state": string,
    "zipcode": string
};

type Rate = {
    nightly?: number,
    weekly?: number,
    monthly?: number
};

type Contact = {
    name: string;
    email: string;
    phone: string;
}

type Property = {
    "_id": string,
    "owner": string,
    "name": string,
    "type": string,
    "description": string,
    "location": Location,
    "beds": number,
    "baths": number,
    "square_feet": number,
    "amenities": string[],
    "rates": Rate,
    "seller_info": Contact,
    "images": string[],
    "isFeatured": boolean,
    "createdAt": string,
    "updatedAt": string
};

type PropertyCardProps = {
    property: Property;
}

const propertyRateDisplay = ({ rates }: Property) => {
    if (rates.monthly) return `$${rates.monthly.toLocaleString()}/mo`;
    if (rates.weekly) return `$${rates.weekly.toLocaleString()}/wk`;
    if (rates.nightly) return `$${rates.nightly.toLocaleString()}/night`;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <div className="rounded-xl shadow-md relative">
            <Image
              src={`/images/properties/${property.images[0]}`}
              alt=""
              width={0}
              height={0}
              sizes="100"
              className='w-full h-auto rounded-t-xl'
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Apartment</div>
                <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                { propertyRateDisplay(property) }
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> { property.beds }
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> { property.baths }
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  { property.square_feet }<span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >
                {property.rates.nightly && <p><i className="fa-solid fa-money-bill"></i> Nightly</p>}
                {property.rates.weekly && <p><i className="fa-solid fa-money-bill"></i> Weekly</p>}
                {property.rates.monthly && <p><i className="fa-solid fa-money-bill"></i> Monthly</p>}
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700">{property.location.city} {property.location.state}</span>
                </div>
                <Link
                  href={`/properties/${property._id}`}
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
    );
};

export default PropertyCard;