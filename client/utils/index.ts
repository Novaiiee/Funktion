export function shortenString(str: string, length: number = 10) {
  if (str.length < length) return str;
  
  const partial = str.substring(0, length);
  return partial + "..."
}