import { Test, TestingModule } from '@nestjs/testing';

import { FeatureController } from './feature.controller';

describe('FeatureController', () => {
  let base: TestingModule;

  beforeAll(async () => {
    base = await Test.createTestingModule({
      controllers: [FeatureController],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const featureController = base.get<FeatureController>(FeatureController);
      expect(featureController.getData()).toEqual('');
    });
  });
});
