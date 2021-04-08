const { scrapeDraftPageData } = require('./src/pfr/htmlScraper');
const { scrapeCombineDataMatchPlayers } = require('./src/combine/htmlScraper');

module.exports = {
  scrapeDraftPageData,
  scrapeCombineDataMatchPlayers
}
