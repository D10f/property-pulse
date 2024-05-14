import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBox from "@/components/InfoBox";

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
        </>
    );
};

export default HomePage;
