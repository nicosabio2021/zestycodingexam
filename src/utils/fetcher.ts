
export default async function fetcher(url: string, method: string = 'GET') {
  const options: Object = {
    method,
  }
  return fetch(url, options).then((res) => res.json());
}