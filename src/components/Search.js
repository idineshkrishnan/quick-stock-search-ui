import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';
import { useHistory } from 'react-router';
import {Select, notification} from "antd";

const SearchContainer = styled.div`
  position: relative;
  
  .ant-select-selector {
    height: 64px !important;
    padding: 0 !important;
    input {
      width: 80vw !important;
      padding: 16px !important;
      height: 64px !important;
      font-size: 24px;
    
      &:focus {
        outline: none;
      }
    }
  }
`;

const Search = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  const history = useHistory();

  const handleChange = (code) => {
    setSearchText(code);
    history.push(`/${code}`);
  };
  
  const handleSearch = (value) => {
    if (value.length >= 3) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}/api/search?query=${value}`, {
        method: "GET",
        headers: {},
      }).then(res => res.json())
        .then(res => {
          if(res.data.bestMatches) {
            setSuggestions(res.data.bestMatches);
          } else {
            notification.error({
              message: 'Something went wrong',
              description: res.data.Note || "Please try again after sometime."
            });
          }
          setLoading(false);
        }).catch(err => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
  };

  return (
    <SearchContainer size={props.size}>
      <Select
        showSearch
        value={searchText}
        placeholder="Search Companies"
        style={{ width: "80vw", height: "64px", fontSize: "24px" }}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        loading={loading}
      >
        {suggestions ? suggestions.map((suggestion, i) => (
          <Select.Option value={suggestion["1. symbol"]}>
            <ListItem
              key={i}
              company={suggestion["2. name"]}
              code={suggestion["1. symbol"]}
              amount={suggestion["9. matchScore"]}
            />
          </Select.Option>
        )) : null}
      </Select>
    </SearchContainer>
  )
};

Search.defaultProps = {
  size: "large",
};

Search.propTypes = {
  size: PropTypes.string,
}

export default Search
