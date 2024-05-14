import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";
import PropertyCard from "@/components/PropertyCard";
import properties from '@/assets/properties.json';

const getRandomItems = <T extends Array<any>>(list: T, amount: number) => {
    if (amount <= 0) throw new Error('Must be a positive integer greater than 0');
    if (list.length < amount) return list;
    return list.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, amount);
};

const HomePage = () => {
    return (
        <>
            <Hero />

            <div className="flex flex-col gap-5 md:flex-row justify-center items-center max-w-screen-lg mx-5 md:mx-10 lg:mx-auto">
                <InfoBox
                    heading="For Renters"
                    bgColor="bg-gray-100"
                    buttonCTA={
                        <Link
                            className="bg-black text-gray-100 p-2 rounded"
                            href="/properties"
                        >
                            Browse Properties
                        </Link>
                    }
                >
                    Find your dream rental property. Bookmark properties and contact
                    owners.
                </InfoBox>

                <InfoBox
                    heading="For Property Owners"
                    bgColor="bg-blue-100"
                    buttonCTA={
                        <Link
                            className="bg-blue-500 text-gray-100 p-2 rounded"
                            href="/properties/add"
                        >
                            Add Properties
                        </Link>
                    }
                >
                    List your properties and reach potential tenants. Rent as an Airbnb or
                    long-term.
                </InfoBox>
            </div>

            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto px-4">

                    <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">Recent Properties</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {getRandomItems(properties, 3).map(property => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-lg my-10 px-6">
                    <Link href="/properties" className="block bg-blue-500 text-white text-center py-4 px-6 rounded-xl hover:bg-blue-700">See All Properties</Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
