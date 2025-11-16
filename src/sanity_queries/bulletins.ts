export const BULLETINS_QUERY = `
  *[_type == "bulletin"] 
  | order(date desc) 
  [ $start ... $end ]{
    _id,
    title,
    date,
    time,
    excerpt,
    category,
    categoryColor,
    "imageUrl": imageUrl.asset->url,
    content
  }
`;
