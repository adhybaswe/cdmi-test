import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabItem = styled.li`
	display: inline-block;
	list-style: none;
	margin-bottom: -1px;
    padding: 16px 24px;
	cursor:pointer;
	border-top:5px solid transparent;
	
	&.active{
		font-weight:600;
		background-color: white;
		border-top:5px solid #4fae51;
	}
`;

const Tab = (props) => {

	const onClick = () => {
	    const { label, onClick } = props;
	    onClick(label);
  	}

	return(
		<TabItem className={ props.activeTab === props.label ? 'active' : '' } onClick={onClick} >
			{props.label}
		</TabItem>
	)
}

Tab.propTypes = {
	activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Tab;