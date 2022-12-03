import React from 'react';
import { useSelector } from 'react-redux';
import GameDetails from '../../components/game-details-component/GameDetails.component';

const stylesMarginFix = {
  marginTop: '2.5rem',
};

const DetailsPage = () => {
  const game = useSelector((state) => state.games.gameDetails);

  return (
    <section style={stylesMarginFix}>
      <GameDetails
        gameName={game.name}
        gameImage={game.background_image}
        gameRating={game.rating}
        gameMeta={game.metacritic}
        gameReleased={game.released}
        gameDes={game.description_raw}
        gameTime={game.playtime}
      />
    </section>
  );
};

export default DetailsPage;
