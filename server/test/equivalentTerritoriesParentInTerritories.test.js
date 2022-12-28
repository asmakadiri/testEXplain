const {equivalentTerritoriesParentInTerritories} = require('../fonctionsToTest/equivalentTerritoriesParentInTerritories')
const {groupBy} = require('../fonctionsToTest/groupBy')
const jsonDataTerritories = require("../ressources/territories.json")

describe('equivalentTerritoriesParentInTerritories.js', ()=>{
    it('prendre le tableau de children d\'un territory est retourner le même tableau mais avec les données de fichiers territories.json grouped by "parent_id', () => {

        const childrenOfTerritory = [{
            "id": "270",
            "child_id": "22676",
            "parent_id": "413",
            "created_at": "2021-01-12 06:06:36.160724",
            "updated_at": "2021-01-12 06:06:36.160724"
        },
            {
                "id": "271",
                "child_id": "23343",
                "parent_id": "413",
                "created_at": "2021-01-12 06:06:36.160724",
                "updated_at": "2021-01-12 06:06:36.160724"
            }];

        const childrenInTerritoriesFile = [
            {
                "id": "22676",
                "code": "59",
                "name": "Nord",
                "kind": "FRDEPA",
                "created_at": "2019-12-10 13:30:37.075326",
                "updated_at": "2020-07-28 07:20:18.244356",
                "is_current": "true",
                "population": "",
                "official_website_url": "",
                "articles_count": "0",
                "admin_docs_count": "0",
                "impacters_count": "0",
                "websites_count": "0",
                "sources_count": "0"
            },
            {
                "id": "23343",
                "code": "60",
                "name": "Oise",
                "kind": "FRDEPA",
                "created_at": "2019-12-10 13:31:51.274527",
                "updated_at": "2020-07-28 07:20:18.244356",
                "is_current": "true",
                "population": "",
                "official_website_url": "",
                "articles_count": "0",
                "admin_docs_count": "0",
                "impacters_count": "0",
                "websites_count": "0",
                "sources_count": "0"
            },

        ]

        expect(equivalentTerritoriesParentInTerritories(childrenOfTerritory, groupBy(jsonDataTerritories,"id"))).toStrictEqual(childrenInTerritoriesFile);
    });



})