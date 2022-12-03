const filterData = (allGames, minRate) => {
    let filteredGames = allGames;
  
    const minRateNum = Number(minRate);
    const maxRate = minRateNum + 1;
  
    if (minRate !== 'All Games') {
      filteredGames = allGames.filter(
        (game) => (game.rating > minRate && game.rating < maxRate),
      );
    }
  
    return filteredGames;
  };
  
  export default filterData;
  