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
                        <a
                            className="bg-black text-gray-100 p-2 rounded"
                            href="/properties"
                        >
                            Browse Properties
                        </a>
                    }
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                    perferendis, blanditiis minima consectetur ullam quam quae laborum
                    ratione nesciunt nemo ducimus ipsa, quibusdam modi adipisci!
                </InfoBox>

                <InfoBox
                    heading="For Renters"
                    bgColor="bg-gray-100"
                    buttonCTA={
                        <a
                            className="bg-black text-gray-100 p-2 rounded"
                            href="/properties"
                        >
                            Browse Properties
                        </a>
                    }
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                    perferendis, blanditiis minima consectetur ullam quam quae laborum
                    ratione nesciunt nemo ducimus ipsa, quibusdam modi adipisci!
                </InfoBox>
            </div>
        </>
    );
};

export default HomePage;
