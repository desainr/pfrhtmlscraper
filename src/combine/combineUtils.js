const COMBINE_SELECTORS = {
  table: '#datatable',
};

// PLEASE NO ONE LOOK AT THIS
const playerMatch = (p1, p2) => {
  const suffixes = ['Jr', 'Sr', 'III', 'II', 'IV', 'V']

  if (p1 === p2) {
    return true;
  }

  const p1Stripped = p1.replace(/[.']/g, '');
  const p2Stripped = p2.replace(/[.']/g, '');

  if (p1Stripped === p2Stripped) {
    return true;
  }

  let p1NoSuffix = p1;
  let p2NoSuffix = p2;

  for (const s of suffixes) {
    let changed = false;

    if (p1.includes(s)) {
      const index = p1.lastIndexOf(s);
      p1NoSuffix = p1.substring(0, index).trim();
      changed = true;
    }

    if (p2.includes(s)) {
      const index = p2.lastIndexOf(s);
      p2NoSuffix = p2.substring(0, index).trim();
      changed = true;
    }

    if (changed) {
      break;
    }
  }

  return p1NoSuffix === p2NoSuffix;
}

module.exports = {
  COMBINE_SELECTORS,
  playerMatch,
}
