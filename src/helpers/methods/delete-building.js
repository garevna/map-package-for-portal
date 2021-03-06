import { eventsTable, buildingEvents } from './config'

export const deleteBuilding = function (buildingId, callback) {
  window[Symbol.for('map.worker')].postMessage({
    action: 'remove',
    key: buildingId
  })

  eventsTable[buildingEvents.remove] = callback
}
