function extract(obj, arr, key) {
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      // if obj is an array, iterate over its items
      for (const item of obj) {
        extract(item, arr, key);
      }
    } else {
      // If obj is an object, iterate over its key-value pairs
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "object" && v !== null && (typeof v === "object" || (Array.isArray(v) && v.length > 0 && (typeof v[0] === "object" || Array.isArray(v[0]))))) {
          extract(v, arr, key);
        } else if (k === key) {
          arr.push(v);
        }
      }
    }
  }
  return arr;
}

export default function json_parsing(obj, key) {
  const arr = [];
  const results = extract(obj, arr, key);

  return results.length > 0 ? results[0] : results;
}
