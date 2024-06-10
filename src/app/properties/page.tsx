// import properties from '@/assets/properties.json';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types';

const fetchProperties = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/properties');
        if (!res.ok)
            throw new Error('Failed to fetch properties data. Err: ' + res.statusText);
        return await res.json();
    } catch (error) {
        console.error((error as Error).message);
    }
};

const PropertiesPage = async () => {

    const properties = await fetchProperties();

    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { properties.map((property: Property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertiesPage;
