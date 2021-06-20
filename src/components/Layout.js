import React from 'react';
import styled from "styled-components";

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
  .content {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
    height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: gray;
		font-size: 16px;
	}
`;

const Layout = props => {
	return (
		<LayoutContainer>
			<div className="content">
				{props.children}
			</div>
			<footer className="footer">
				Copyright © {new Date().getFullYear()}, powered by  Solactive
			</footer>
		</LayoutContainer>
	);
};

export default Layout;
