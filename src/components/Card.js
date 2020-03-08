import React from 'react';

const Card = props => {
  const { name, email, id } = props;
  return (
    <div className="card">
      <div className="bg-light-green br3 pa3 ma3 grow bw2 shadow-5 " style={{ height: '240px' }}>
        <img
          alt="stylish cartoon cat"
          src={`https://robohash.org/${id}?set=set4`}
          height="140px"
          width="auto"
          border-radius="10"
        />
        <div style={{ height: '40px' }}>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
