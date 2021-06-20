import React from 'react';
import Search from '../components/Search';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Image} from "antd";

const HomeContainer = styled.div`
  min-height: calc(100vh - 50px);
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ant-image, .ant-image-error {
    width: 80vw !important;

    @media only screen and (min-width: 1024px) {
      width: 600px !important;
    }
  }
`;

const Home = () => {
  
  return (
    <Layout>
      <HomeContainer>
        <div style={{ marginBottom: 24 }}>
          <Image
            preview={false}
            height={250}
            width={600}
            src="error"
            fallback="brand_logo.png"
          />
        </div>
        <Search/>
      </HomeContainer>
    </Layout>
    
  )
}

export default Home;
