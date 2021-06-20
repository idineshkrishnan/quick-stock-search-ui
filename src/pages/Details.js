import React from 'react';
import { useHistory } from "react-router-dom";
import {Image, Spin, notification} from "antd";
import styled from "styled-components";
import Search from '../components/Search';
import Chart from '../components/Chart';
import TableComponent from '../components/TableComponent';
import Layout from "../components/Layout";

const ResponsiveContainer = styled.div`
  padding: 40px;

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .logo {
      margin: 0 0 30px 0;
      cursor: pointer;
      @media only screen and (min-width: 1024px) {
        margin: 0 30px 0 0;
      }
    }
  }
  .content{
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
    }

    .table {
      width: 100%; 
      height: 600px; 

      @media only screen and (min-width: 1024px) {
        width: 50%
      }
    }

    .chart {
      width: 100%;
      /* min-width: 400px; */
      height: 600px; 
      @media only screen and (min-width: 1024px) {
        width: 50%
      }
    }
  }
`;

const Details = (props) => {

  const history = useHistory();
  
  const [loading, setLoading] = React.useState(false);
  const [companyData, setCompanyData] = React.useState({});
  const [stockData, setStockData] = React.useState({});
  
  React.useEffect(() => {
    let api = async () => {
      setLoading(true);
      let response = await fetch(`${process.env.REACT_APP_API}/api/stock?symbol=${props.match.params.companyCode}`, {
        method: "GET",
        headers: {},
      });
      let result = await response.json();
      if (result.companyData.Note) {
        notification.error({
          message: 'Something went wrong',
          description: result.companyData.Note || "Please try again after sometime."
        });
      } else {
        setCompanyData(result.companyData);
      }
      if (result.stockData.Note) {
        notification.error({
          message: 'Something went wrong',
          description: result.stockData.Note || "Please try again after sometime."
        });
      } else {
        setStockData(result.stockData);
      }
      setLoading(false)
    };
    api();
  }, [props]);
  
  return (
    <Layout>
      <ResponsiveContainer style={{ padding: 40 }}>
        <div className="search">
          <div className="logo" onClick={() => history.push(`/`)}>
            <Image
              preview={false}
              height={100}
              width={200}
              src="error"
              fallback="brand_sm_logo.png"
            />
          </div>
          <Search size="small" />
        </div>
        <Spin spinning={loading}>
          <div className="content">
            <div className="table">
              <TableComponent
                dataSource={companyData}
                visibleData={["Name", "Country", "Symbol", "Currency", "Sector", "Industry", "Address", "MarketCapitalization"]}
              />
            </div>
            <div className="chart">
              <Chart
                data={stockData}
              />
            </div>
          </div>
        </Spin>
      </ResponsiveContainer>
    </Layout>
  )
}

export default Details
