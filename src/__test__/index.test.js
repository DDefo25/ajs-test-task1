import getLifeStatus from '../index';

test.each([
  ['100HP', { name: 'Маг', health: 100 }, 'healthy'],
  ['30HP', { name: 'Маг', health: 30 }, 'wounded'],
  ['5HP', { name: 'Маг', health: 5 }, 'critical'],
])(
  ('should return life status with %s for %s'),
  (_, npc, lifeStatus) => {
    const result = getLifeStatus(npc);
    expect(result).toBe(lifeStatus);
  },
);
