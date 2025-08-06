// client.ts 側
export const client = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
