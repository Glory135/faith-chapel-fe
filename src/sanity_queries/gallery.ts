export const GALLERY_QUERY = `
  *[_type == "gallery"] 
  | order(date desc) 
  [ $start ... $end ]{
    _id,
    "imageUrl": imageUrl.asset->url,
  }
`;
