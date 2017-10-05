import React from 'react';
import { connect } from 'react-redux';

import LinearResumeList from 'components/LinearResumeList';
import TwoColumnGrid from 'components/TwoColumnGrid';

function Skills({ skills, title }) {
  let listItems = skills.map((skill, index) => <LinearResumeList title={ skill.title } items={ skill.items } key={ index } />);

  return (
      <div className='skills'>
        <h3>{ title }</h3>
        <TwoColumnGrid>{ listItems }</TwoColumnGrid>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    skills: state.resume.resume.skills,
  };
}

export default connect(mapStateToProps)(Skills);

