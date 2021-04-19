const COMBINE_SELECTORS = {
  table: '#datatable',
};

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

module.exports = {
  COMBINE_SELECTORS,
  playerMatch,
}
