import { Table } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';

export const CodeReview = props => {
  return (
    <div>
      <Table />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CodeReview);
