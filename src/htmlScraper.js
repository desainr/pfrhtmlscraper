const cheerio = require('cheerio');
const {
  PFR_PLAYER_INFO_SELECTORS,
  PFR_PLAYER_STATS_SELECTORS,
  PFR_MAIN_SELECTORS,
  PFR_DRAFT_DATA_SELECTORS,
  PFR_DATA_VALUES,
  PFR_TEAM_TO_ID
} = require('./pfrUtils');

const scrapeDraftPageData = (html, year) => {
  console.log(`Parsing draft data for ${year}...`);

  const $ = cheerio.load(html);

  const draftTable = $(PFR_MAIN_SELECTORS.draftTableId);
  const allPicks = draftTable.children('tbody').children('tr:not(.thead)');

  const allDraftData = [];
  const allPlayerData = [];

  for (const draftPickRow of allPicks) {
    const row = $(draftPickRow);
    const playerData = {};
    const draftData = {};

    for (const [key, value] of Object.entries(PFR_PLAYER_INFO_SELECTORS)) {
      playerData[key] = row.children(`[${value}]`).text();
    }

    for (const [key, value] of Object.entries(PFR_PLAYER_STATS_SELECTORS)) {
      playerData[key] = Number(row.children(`[${value}]`).text());
    }

    for (const [key, value] of Object.entries(PFR_DRAFT_DATA_SELECTORS)) {
      draftData[key] = Number(row.children(`[${value}]`).text());
    }

    const playerId = row.children(`[${PFR_PLAYER_INFO_SELECTORS.player}]`).data(PFR_DATA_VALUES.playerId);
    const teamId = PFR_TEAM_TO_ID(playerData.team)
    draftData.player_id = playerId;
    draftData.team_id = teamId;
    draftData.year = year;
    playerData.id = playerId;
    playerData.team_id = teamId;

    allPlayerData.push(playerData);
    allDraftData.push(draftData);
  }

  return { draftData: allDraftData, playerData: allPlayerData };
};

module.exports = {
  scrapeDraftPageData,
}
