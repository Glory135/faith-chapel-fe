export const allEventsQuery = `
  *[_type == "event"] | order(StartDate desc) {
    _id,
    Title,
    Description,
    StartDate,
    EndDate,
    StartTime,
    EndTime,
    Location,
    Link,
    "ImageURL": Image.asset->url,
    Image
  }
`;
