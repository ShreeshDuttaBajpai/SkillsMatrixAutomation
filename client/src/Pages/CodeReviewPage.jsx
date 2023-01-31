import React from 'react';
// import { CodeReview } from '../components/CodeReviewComponent/CodeReview';
import CodeReviewContainer from '../components/CodeReviewComponent/CodeReviewContainer';
import Navbar from '../components/Navbar/Navbar';

function CodeReviewPage() {
  return (
    <div>
      <Navbar />
      {/* <CodeReview /> */}
      <CodeReviewContainer />
    </div>
  );
}
export default CodeReviewPage;
