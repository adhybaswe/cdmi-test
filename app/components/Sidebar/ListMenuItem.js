import styled from 'styled-components';

const ListMenuItem = styled.li`
	margin:0;
	list-style:none;
	
	& a{
		text-decoration:none;
		color:#727272;
		display:block;
		padding:8px 0;
		&:hover{
			color:#4fae51;
			text-decoration:none;

			svg{
				color:#4fae51;
			}
		}

		.svg-inline--fa {
		    width: 20px !important;
		    margin-right: 12px;
		}

		.badge{
			float:right;
			padding:4px;
			border-radius:2px;
			background-color:#e81b5b;
			font-size:0.6em;
			color:#fff;
		}
	}
`;

export default ListMenuItem;