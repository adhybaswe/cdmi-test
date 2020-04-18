/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React,{useEffect,memo} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Section from './Section';
import Column83 from './Column83';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';
import ChartActiveUser from './ChartActiveUser';
import ActiveUsersRightNow from './ActiveUsersRightNow';
import Tabs from 'components/Tabs';
import Chart from "react-google-charts";

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import { loadRepos } from './actions';
// import { loadRepos } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  loading,
  error,
  repos,
  getData,
}) {
	useInjectReducer({ key, reducer });
	useInjectSaga({ key, saga });

	useEffect(() => {
		getData()
	}, []);

	 const reposListProps = {
	    loading,
	    error,
	    repos,
	  };

	  if(loading){
	  	return(
	  		<div>LOADING</div>
  		)
	  }

	const onClick = () => {
		console.log('repos',repos)
	}  

  return (
  	<div>
  		<Section className="section-top">
			<SectionTitle>
			Codemi Home
			</SectionTitle>
			<Column83>
				<div>
					<Tabs>
						<div label="Users">
							User
						</div>
						<div label="Course Completed">
							Course Completed
						</div>
						<div label="Learning Plan Complated">
							Learning Plan Completed
						</div>
						<div label="Learning Hour">
							Learning Hour
						</div>
					</Tabs>
				</div>
				<div>
					<ActiveUsersRightNow count={repos.count} />
				</div>
			</Column83>
  		</Section>

  		<Section >
  			<SectionTitle>
  				How's your social learning activity?
  			</SectionTitle>
  			<Tabs>
		      <div label="Discusstion">
		        <Chart
				  width={'100%'}
				  height={'400px'}
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
			          ['14 Mar', 21000,3000 ]
				  ]}
				  options={{
				    chartArea: { 
			    		left: '6%',
			    		top: '2%',
			    		bottom: '10%'
		    		},
		    		colors: ['#3367d7', '#4185f4'],
		    		hAxis:{
		    			format : '#,###K'
		    		},
		    		legend : {
		    			position: 'none'
		    		},
		    		isStacked: true,
				    bar: { width: '100%' },
				    theme : 'maximized',
				    titlePosition: 'out', 
				    axisTitlesPosition: 'out',
					hAxis: {
						textPosition: 'out'
					}, 
					vAxis: {
						textPosition: 'out'
					}
				  }}
				/>
		      </div>
		      <div label="Blog Post">
		        After 'while, <em>Crocodile</em>!
		      </div>
		      <div label="Question and Answers">
		        Nothing to see here, this tab is <em>extinct</em>!
		      </div>
		    </Tabs>
  		</Section>

  		
  		<h1>
	      <FormattedMessage {...messages.header} />
	    </h1>
  	</div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.object]),
  getData: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername('test')),
    getData: evt => {
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);