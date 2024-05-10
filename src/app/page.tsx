import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <h1>Main Page</h1>
            <Link href="/properties">Properties</Link>
        </>
    );
};

export default HomePage;
