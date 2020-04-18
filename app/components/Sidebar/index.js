/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faCodeBranch,faUser,faCog, faChartArea, faChartLine, faBullhorn, faStarHalfAlt, faEnvelope,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GroupMenu from './GroupMenu';
import ListMenu from './ListMenu';
import ListMenuItem from './ListMenuItem';
import GroupMenuTitle from './GroupMenuTitle';

const SidebarWrapper = styled.div`
	width:250px;
	position:fixed;
	top:66px;
	left:0;
	padding-top:24px;
	padding-bottom:24px;
	overflow: auto;
	height:calc(100vh - 66px);
	background-color:#fafafa;
	-webkit-box-shadow: 2px 0px 5px 0px rgba(181,181,181,0.5);
	-moz-box-shadow: 2px 0px 5px 0px rgba(181,181,181,0.5);
	box-shadow: 2px 0px 5px 0px rgba(181,181,181,0.5);

	/* width */
	::-webkit-scrollbar {
	  width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	  background: #fafafa; 
	}
	 
	/* Handle */
	::-webkit-scrollbar-thumb {
	  background: #fafafa; 
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	  background: #eee; 
	}

`;

function Sidebar() {
  return (
    <SidebarWrapper>
    	<GroupMenu>
    		<GroupMenuTitle className="active">
    			<FormattedMessage {...messages.home} />
    		</GroupMenuTitle>
    	</GroupMenu>
    	<GroupMenu>
    		<GroupMenuTitle>
    			<FormattedMessage {...messages.learning} />
    		</GroupMenuTitle>
    		<ListMenu>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faGem} />
						Courses
						<span className="badge">20</span>
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faCodeBranch} />
						Learning Plans
					</a>
				</ListMenuItem>
			</ListMenu>
    	</GroupMenu>
    	<GroupMenu>
    		<GroupMenuTitle>
    			<FormattedMessage {...messages.manage} />
    		</GroupMenuTitle>
    		<ListMenu>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faUser} />
						Users
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faCog} />
						Skills
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faChartArea} />
						Reports
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faChartLine} />
						Analitycs
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faBullhorn} />
						Announcements
					</a>
				</ListMenuItem>
			</ListMenu>
    	</GroupMenu>
		<GroupMenu>
    		<GroupMenuTitle>
    			<FormattedMessage {...messages.configure} />
    		</GroupMenuTitle>
    		<ListMenu>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faStarHalfAlt} />
						Points
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faCog} />
						Reward
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faEnvelope} />
						Email Templates
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faInfoCircle} />
						Company Info
					</a>
				</ListMenuItem>
				<ListMenuItem>
					<a href="#">
						<FontAwesomeIcon icon={faUser} />
						Billing
					</a>
				</ListMenuItem>
			</ListMenu>
    	</GroupMenu>
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
