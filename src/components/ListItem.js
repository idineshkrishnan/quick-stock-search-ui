import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  .name {
    font-size: 24px;
    font-weight: bold;
  }
  .code {
    font-size: 20px;
    font-weight: normal;
    margin-left: 8px;
  }
  .amount {
    font-size: 24px;
    font-weight: bold;
  }
`;

const ListItem = (props) => {
  return (
    <ListItemContainer>
      <div>
        <span className="name">{props.company}</span>
        <span className="code">({props.code})</span>
      </div>
      <span className="amount">{props.amount}</span>
    </ListItemContainer>
  )
}

export default ListItem
