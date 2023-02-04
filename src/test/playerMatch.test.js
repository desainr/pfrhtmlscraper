const {playerMatch} = require('../combine/combineUtils');

describe('playerMatch', function () {
  const positiveCases = [
    {
      p1: 'Anton Lundell',
      p2: 'Anton Lundell'
    },
    {
      p1: 'Anton Lundell Jr.',
      p2: 'Anton Lundell'
    },
    {
      p1: 'Anton Lundell III',
      p2: 'Anton Lundell',
    },
    {
      p1: 'Anton Lundell',
      p2: 'Anton Lundell Jr'
    },
    {
      p1: 'Anton Lundell Jr',
      p2: 'Anton Lundell Jr.'
    },
    {
      p1: 'Anton Lundell',
      p2: 'Anton Lundell III'
    },
    {
      p1: 'TJ Houshmanzadeh',
      p2: 'T.J. Houshmanzadeh',
    },
    {
      p1: 'Henry Ruggs',
      p2: 'Henry Ruggs III',
    },
    {
      p1: 'Wan\'Dale Robinson',
      p2: 'WanDale Robinson',
    },
  ]

  const negativeCases = [
    {
      p1: 'Anton Lundell',
      p2: 'Atnon Lundell',
    },
    {
      p1: 'Anton Lundell Sr.',
      p2: 'TJ Houshmanzadeh'
    }
  ]

  it('positive cases are true', () => {
    positiveCases.forEach(testCase => {
      expect(playerMatch(testCase.p1, testCase.p2)).toBeTruthy();
    })
  })

  it('negative cases are false', () => {
    negativeCases.forEach(testCase => {
      expect(playerMatch(testCase.p1, testCase.p2)).toBeFalsy();
    })
  })
});

