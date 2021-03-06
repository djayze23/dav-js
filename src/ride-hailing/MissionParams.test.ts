import MissionParams from './MissionParams';

describe('MissionParams class', () => {

  const missionParams = new MissionParams({});

  const serializedMissionParams: any = {
    ttl: undefined,
    protocol: 'ride_hailing',
    type: 'mission',
    price: undefined,
    vehicleId: undefined,
  };

  describe('serialize method', () => {
    it('should return serialized MissionParams object with the current values', () => {
      expect(missionParams.serialize()).toEqual(serializedMissionParams);
    });
  });

  describe('deserialize method', () => {
    it('should return serialized MissionParams instance with the current parameters', () => {
      const missionParamsObject = new MissionParams();
      missionParamsObject.deserialize(serializedMissionParams);
      expect(missionParamsObject).toEqual(missionParams);
    });
  });
});
