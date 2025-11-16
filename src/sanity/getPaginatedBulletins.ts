import { client } from "../lib/sanityClient";
import { BULLETINS_QUERY } from "../sanity_queries/bulletins";


export async function getPaginatedBulletins(page = 1, limit = 10) {
    const start = (page - 1) * limit;
    const end = start + limit;

    return client.fetch(BULLETINS_QUERY, {
        start,
        end
    });
}
