import React from 'react';
import GameDetails from '../../components/game-details-component/GameDetails.component';

const stylesMarginFix = {
    marginTop: '2.5rem',
  };

const DetailsPage = () => (
    <section style={stylesMarginFix}>
    <GameDetails /> 
  </section>
);

export default DetailsPage;
