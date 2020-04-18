/**
 *
 * Tabs
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Tab from './Tab';

const TabList = styled.ol`
  	padding-left: 0;
  	margin-bottom:0;
  	background:#fff;
`

const TabContent = styled.div`
	background:#fff;
	padding:16px 24px;
`


function Tabs(props) {
	const [active,setActive] = useState(props.children[0].props.label)

	const onClickTabItem = (tab) => {
		setActive(tab)
  	}

  	return (
	    <div>
	    	<TabList>
	      		{props.children.map((child) => {
		            const { label } = child.props;

		            return (
		              <Tab
		                activeTab={active}
		                key={label}
		                label={label}
		                onClick={onClickTabItem}
		              />
		            );
		          })}
	      	</TabList>
	      	<TabContent>
	          {props.children.map((child) => {
	            if (child.props.label !== active) return undefined;
	            return child.props.children;
	          })}
	        </TabContent>
	    </div>
  	);
}

Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
