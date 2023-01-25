import * as apiModel  from "./api/sites.api.model";
import * as viewModel  from "./sites.vm";
import { mapSiteEntityListToVM } from "./sites.mapper";


describe('list mappers specs', () => {
  describe('mapSiteEntityListToVM', () => {


    it('should return empty array when it feeds siteList equals empty array', () => {
      // Arrange
      const siteList: apiModel.SitesEntityApi[] = [];

      // Act
      const result = mapSiteEntityListToVM(siteList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return array with one mapped item when it feeds siteList with one item', () => {
      // Arrange
      const siteList: apiModel.SitesEntityApi[] = [
        {
            _id: 'id_test',
            name: 'name_test',
            path: 'path_test',
            publicPath: 'publicPath_test',
            key: 'key_test',
            description: 'description_test',
            createDate: 'date_test',
            __v: 0,
            site: 'site_test'
        },
      ];

      // Act
      const result = mapSiteEntityListToVM(siteList);

      // Assert
      const expectedResult: viewModel.SitesEntity[] = [
        {
            _id: 'id_test',
            name: 'name_test',
            path: 'path_test',
            key: 'key_test'
        },
      ];
      expect(result).toEqual(expectedResult);
    });
  });
});
