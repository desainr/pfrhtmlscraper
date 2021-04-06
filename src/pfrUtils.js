const PFR_PLAYER_INFO_SELECTORS = {
  team: 'data-stat="team"',
  player: 'data-stat="player"',
  position: 'data-stat="pos"',
  age: 'data-stat="age"'
};

const PFR_PLAYER_STATS_SELECTORS = {
  games: 'data-stat="g"',
  pass_cmp: 'data-stat="pass_cmp"',
  pass_att: 'data-stat="pass_att"',
  pass_yds: 'data-stat="pass_yds"',
  pass_tds: 'data-stat="pass_td"',
  pass_ints: 'data-stat="pass_int"',
  rush_att: 'data-stat="rush_att"',
  rush_yds: 'data-stat="rush_yds"',
  rush_tds: 'data-stat="rush_td"',
  recs: 'data-stat="rec"',
  rec_yds: 'data-stat="rec_yds"',
  rec_tds: 'data-stat="rec_td"',
  tackles: 'data-stat="tackles_solo"',
  def_ints: 'data-stat="def_int"',
  sacks: 'data-stat="sacks"',
};

const PFR_DRAFT_DATA_SELECTORS = {
  round: 'data-stat="draft_round"',
  pick: 'data-stat="draft_pick"',
}

const PFR_DATA_VALUES = {
  playerId: 'appendCsv',
  teamId: 'csk',
}

const PFR_MAIN_SELECTORS = {
  draftTableId: '#drafts',
}

const PFR_TEAM_TO_ID = (teamAbbrev) => {
  return {
    ARI: 1,
    ATL: 2,
    BAL: 3,
    BUF: 4,
    CAR: 5,
    CHI: 6,
    CIN: 7,
    CLE: 8,
    DAL: 9,
    DEN: 10,
    DET: 11,
    GNB: 12,
    HOU: 13,
    IND: 14,
    JAX: 15,
    KAN: 16,
    LAC: 17,
    LAR: 18,
    LVR: 19,
    MIA: 20,
    MIN: 21,
    NOR: 22,
    NWE: 23,
    NYG: 24,
    NYJ: 25,
    PHI: 26,
    PIT: 27,
    SEA: 28,
    SFO: 29,
    TEN: 30,
    TAM: 31,
    WAS: 32,
    OAK: 19,
    SDG: 17,
    STL: 18,
  }[teamAbbrev];
}

module.exports = {
  PFR_DRAFT_DATA_SELECTORS,
  PFR_PLAYER_INFO_SELECTORS,
  PFR_PLAYER_STATS_SELECTORS,
  PFR_DATA_VALUES,
  PFR_MAIN_SELECTORS,
  PFR_TEAM_TO_ID,
}
