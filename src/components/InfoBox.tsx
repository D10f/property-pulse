type InfoBoxProps = {
    heading: string;
    bgColor?: string;
    textColor?: string;
    buttonCTA: React.ReactNode;
    children: React.ReactNode;
};

const InfoBox = ({
    heading,
    bgColor = "bg-blue-500",
    textColor = "text-gray-900",
    buttonCTA,
    children,
}: InfoBoxProps) => {
    return (
        <article className={`${bgColor} ${textColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold text-current">{heading}</h2>
            <p className="mt-2 mb-4 text-current">{children}</p>
            {buttonCTA}
        </article>
    );
};

export default InfoBox;
