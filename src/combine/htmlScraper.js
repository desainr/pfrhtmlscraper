const cheerio = require('cheerio');
const {COMBINE_SELECTORS} = require('./combineUtils');

const scrapeCombineDataMatchPlayers = (html, players) => {
  console.log('Matching html data to players...')
  const $ = cheerio.load(html);

  const combineRows = $(`${COMBINE_SELECTORS.table} tbody tr`);

  const matchingPlayers = [];

  for (const combineRow of combineRows) {
    const row = $(combineRow);

    const player = row.children().eq(1).text();

    const match = players.filter(p => playerMatch(p.trim(), player.trim()));

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
    }
  }

  return matchingPlayers;
}

const playerMatch = (p1, p2) => {
  const suffixes = ['Jr', 'Sr', 'II', 'III', 'IV', 'V']

  if (p1 === p2) {
    return true;
  }

  const p1Stripped = p1.replace(/[.]/g, '');
  const p2Stripped = p2.replace(/[.]/g, '');

  if (p1Stripped === p2Stripped) {
    return true;
  }

  let p1NoSuffix = p1;
  let p2NoSuffix = p2;

  suffixes.forEach(s => {
    if (p1.includes(s)) {
      const index = p1.lastIndexOf(s);
      p1NoSuffix = p1.substring(0, index);
    }

    if (p2.includes(s)) {
      const index = p2.lastIndexOf(s);
      p2NoSuffix = p2.substring(0, index);
    }
  });

  return p1NoSuffix === p2NoSuffix;
}

const defaultNumber = (stringValue) => {
  if (stringValue) {
    return Number(stringValue);
  } else {
    return null;
  }
}

module.exports = {
  playerMatch,
  scrapeCombineDataMatchPlayers,
}
