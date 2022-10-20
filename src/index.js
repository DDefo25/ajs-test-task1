export default function getLifeStatus(npc) {
  let status;
  if (npc.health > 50) {
    status = 'healthy';
  } else if (npc.health > 15) {
    status = 'wounded';
  } else {
    status = 'critical';
  }
  return status;
}
