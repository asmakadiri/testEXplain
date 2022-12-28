const {groupBy} = require('../fonctionsToTest/groupBy')

describe('groupBy.js', ()=>{
    it('deux territories avec même parent-id vont être un seul objet dont key = le key passé en argument et value = tableau de deux children', () => {

        const myTerritories = [{
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

        const territoriesGroupedbyParnstId = {
            "413" : [{
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
                }]
        }

        expect(groupBy(myTerritories, "parent_id")).toStrictEqual(territoriesGroupedbyParnstId);
    });

    it('deux territories avec même parent-id vont être un seul objet dont key = le key passé en argument et value = tableau de deux children', () => {

        const myTerritories = [{
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

        const territoriesGroupedbyParnstId = {
            "22676" : [{
                "id": "270",
                "child_id": "22676",
                "parent_id": "413",
                "created_at": "2021-01-12 06:06:36.160724",
                "updated_at": "2021-01-12 06:06:36.160724"
            }],
            "23343": [{
                    "id": "271",
                    "child_id": "23343",
                    "parent_id": "413",
                    "created_at": "2021-01-12 06:06:36.160724",
                    "updated_at": "2021-01-12 06:06:36.160724"
                }]
        }

        expect(groupBy(myTerritories, "child_id")).toStrictEqual(territoriesGroupedbyParnstId);
    });

})
