import { type NextRequest } from "next/server";
import connect from "@/config/db";
import Property from "@/models/Property";

// TODO: FIX AGGREGATION!

// GET /api/properties
export const GET = async (req: NextRequest) => {
    let properties;
    const params = req.nextUrl.searchParams;
    const limit = parseInt(params.get('limit') || '0');

    if (params.has('random') && params.get('random') === '1') {
        const aggregate = Property.aggregate([
            { $match: {} },
            { $sample: { size: limit } }
        ]);

        properties = aggregate.find();
    } 
    
    try {
        await connect();

        properties = await Property
            .find({})
            .limit(limit);

        return new Response(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        console.error((error as Error).message);
        return new Response('Internal Server Error.', { status: 500 });
    }
}