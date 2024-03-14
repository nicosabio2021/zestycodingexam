import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const useData = () => {
  const getHomeData = () => {
    try {
      const data = useSWR('https://www.zesty.io/-/gql/platform_section.json', fetcher);

      return data;
    } catch (error: any) {
      throw(error);
    }
  };

  const getAboutData = () => {
    try {
      const data = useSWR('https://www.zesty.io/-/instant/7-e93178-vqvclg.json', fetcher);
      console.log(data);
      if(data.data) {
        return data.data;
      }
      
    } catch (error) {
      throw(error);
    }
  };

  return {
    getHomeData,
    getAboutData
  }
}

export default useData;

