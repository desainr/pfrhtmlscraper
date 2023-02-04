const cheerio = require('cheerio');
const {playerMatch} = require("./combineUtils");
const {COMBINE_SELECTORS} = require('./combineUtils');

const scrapeCombineDataMatchPlayers = (html, players) => {
  console.log('Matching html data to players...')
  const $ = cheerio.load(html);

  const combineRows = $(`${COMBINE_SELECTORS.table} tbody tr`);

  const matchingPlayers = [];
  const unmatchedPlayers = [];

  for (const combineRow of combineRows) {
    const row = $(combineRow);

    const player = row.children().eq(1).text();

    const match = players.filter(p => playerMatch(p.player.trim(), player.trim()));

    if (match && match.length === 1) {
      const combinePlayerEntry = {
        player_id: match[0].id,
        height: defaultNumber(row.children().eq(4).text()),
        weight: defaultNumber(row.children().eq(5).text()),
        wonderlic: defaultNumber(row.children().eq(6).text()),
        forty_time: defaultNumber(row.children().eq(7).text()),
        bench_press: defaultNumber(row.children().eq(8).text()),
        vert_leap: defaultNumber(row.children().eq(9).text()),
        broad_jump: defaultNumber(row.children().eq(10).text()),
        shuttle: defaultNumber(row.children().eq(11).text()),
        three_cone: defaultNumber(row.children().eq(12).text()),
      }

      matchingPlayers.push(combinePlayerEntry);
    } else {
      unmatchedPlayers.push(player);
    }
  }

  return {
    matchingPlayers,
    unmatchedPlayers,
  };
}

const defaultNumber = (stringValue) => {
  if (stringValue) {
    return Number(stringValue);
  } else {
    return null;
  }
}

module.exports = {
  scrapeCombineDataMatchPlayers,
}
