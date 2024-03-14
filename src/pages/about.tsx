import React from "react";
import useData from "../hooks/useData";
import MainContainer from "../componenets/MainContainer";
import '../styles/index.css';

const Content: React.FC<{ data: any }> = ({ data }) => (
  <div>
    {data.length > 0 && (
      data.map((d: any, index: number) => (
        <div key={index} className="flex flex-col text-black">
          <div dangerouslySetInnerHTML={{ __html: d.content.page_content }}></div>
        </div>
      ))
    )}
  </div>
);

const AboutUs: React.FC = () => {
  const { getAboutData } = useData();
  const data: any = getAboutData();
  
  return(
    <MainContainer>
      <div>
        { typeof data !== 'undefined' ? (
          <Content data={data.data} />
        ) : (
          <div>
            No Data
          </div>
        )}
      </div>
    </MainContainer>
  )
}
export default AboutUs;


