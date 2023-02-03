import React from 'react';
// import { CodeReview } from '../components/CodeReviewComponent/CodeReview';
import CodeReviewContainer from '../components/CodeReviewComponent/CodeReviewContainer';
import Navbar from '../components/Navbar/Navbar';
import NavbarContainer from '../components/Navbar/NavbarContainer';

function CodeReviewPage() {
  return (
    <div>
      <NavbarContainer />
      {/* <CodeReview /> */}
      <CodeReviewContainer />
    </div>
  );
}
export default CodeReviewPage;
