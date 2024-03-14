import React, { useEffect, useState } from "react";
import useData from "../hooks/useData";
import MainContainer from "../componenets/MainContainer";
import '../styles/index.css';


const Page: React.FC = () => {
  const { getHomeData } = useData();
  const { data } : any = getHomeData();

  return (
    <MainContainer>
      <div>
        { typeof data !== 'undefined' && data.length > 0 ? (
          data.map((d) => {
            return(
              <div className="flex flex-col text-black">
                <h1>{d.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: d.text_content }}></div>
              </div>
            )
          })
        ): (
          <div>
            <h1>No datas</h1>
          </div>
        )}
      </div>
    </MainContainer>
    
  )
}

export default Page;