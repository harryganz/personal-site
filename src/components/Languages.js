import React from 'react';
import { connect } from 'react-redux';

import VerticalResumeList from 'components/VerticalResumeList';

function Languages({ title, languages }) {
  return (
      <VerticalResumeList
        title={ title }
        verticalResumeList={ languages }
      />
    );
}

function mapStateToProps({ resume }) {
  return {
    languages: resume.resume.languages,
  };
}

export default connect(mapStateToProps)(Languages);

