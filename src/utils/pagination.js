export function pagination(page, limit, dbObject) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < dbObject.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.total = dbObject.length;
  results.result = dbObject.slice(startIndex, endIndex);
  return results;
}
