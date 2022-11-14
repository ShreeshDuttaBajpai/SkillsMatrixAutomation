import React from 'react';

const Home = ({ onButtonClick, apiResponse, resContent }) => {
  return (
    <div className="container">
      <input onClick={onButtonClick} content="Fetch API" secondary />
      <div className="container">
        {apiResponse === 0 ? (
          <div className="row">
            <div className="col-md-6">State Id</div>
            <div className="col-md-6">State Name</div>
          </div>
        ) : (
          resContent.states.map(state => (
            <div className="row">
              <div className="col-md-6">{state.state_id} </div>
              <div className="col-md-6">{state.state_name} </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
