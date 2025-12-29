import { client } from "../lib/sanityClient";
import { GALLERY_QUERY } from "../sanity_queries/gallery";


export async function getPaginatedGallery(page = 1, limit = 24) {
    const start = (page - 1) * limit;
    const end = start + limit;

    return client.fetch(GALLERY_QUERY, {
        start,
        end
    });
}
