import React from 'react';
import styled from 'styled-components';
import Chart from "react-google-charts";

const Wrapper = styled.div`
	margin-top:16px;
	background:#4185f4;
	padding:16px;
	color:#fff;
`;

const Count = styled.div`
	font-size:40px;
	margin-top:8px;
	margin-bottom:24px;
`;


const ActiveUsersRightNow = (props) => {

	return(
		<Wrapper>
			<div>
				Active Users Right Now
			</div>
			<Count>
				{props.count}
			</Count>
			<div>
				<div>
					Page Views per minute
				</div>
				<Chart
				  width={'100%'}
				  height={'200px'}
				  // Note here we use Bar instead of BarChart to load the material design version
				  chartType="ColumnChart"
				  loader={<div>Loading Chart</div>}
				  data={[
				    ['Tanggal', 'Data','Data2'],
			          ['8 Mar', 24000 ,2000],
			          ['9 Mar', 22000,3000],
			          ['10 Mar', 17000,1000],
			          ['11 Mar', 12000,4000],
			          ['12 Mar', 19000,2000 ],
			          ['13 Mar', 20000,5000 ],
			          ['14 Mar', 21000,3000 ],
			          ['10 Mar', 17000,1000],
			          ['11 Mar', 12000,4000],
			          ['13 Mar', 20000,5000 ],
			          ['14 Mar', 21000,3000 ],
			          ['10 Mar', 17000,1000],
			          ['11 Mar', 12000,4000],
			          ['13 Mar', 20000,5000 ],
			          ['14 Mar', 21000,3000 ],
			          ['10 Mar', 17000,1000],
			          ['11 Mar', 12000,4000],
				  ]}
				  options={{
		    		colors: ['#8db5fa', '#a6d4fc'],
		    		hAxis:{
		    			format : '#,###K'
		    		},
		    		dataOpacity:0.8,
		    		backgroundColor:{
		    			fill : 'transparent'
		    		},

		    		legend : {
		    			position: 'none'
		    		},
		    		isStacked: true,
				    bar: { width: '85%' },
				    theme : 'maximized',
				    titlePosition: 'out', 
				    axisTitlesPosition: 'out',
					hAxis: {
						textPosition: 'out',

					}, 
					vAxis: {
						textPosition: 'out',
						gridlines : {
							color : 'transparent'
						}
					}
				  }}
				/>
			</div>
		</Wrapper>
	)
}

export default ActiveUsersRightNow;