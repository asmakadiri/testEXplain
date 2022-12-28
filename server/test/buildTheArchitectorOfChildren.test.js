const {buildTheArchitectorOfChildren} = require('../fonctionsToTest/buildTheArchitectorOfChildren')
const jsonDataTerritories = require("../ressources/territories.json")
const jsonterritoriesByParent = require('../ressources/territory_parents.json')
const {groupBy} = require('../fonctionsToTest/groupBy')

describe('buildTheArchitectorOfChildren.js', ()=>{
    it(' prendre un element de territoriesByParent d\'indice key qui est sous la forme ' +
        'de {parent-id : [child1,child2,...]} \n  et vérifier si un child à aussi des enfants' +
        ' (ex : si le child est un EPCI alors ce child est le père de plusieurs communes)\n ' +
        ' si oui chercher l\'équivalents de ce child dans le dossier territories.json grouped by id et ajouter ' +
        'le champs children avec les donneés des enfants' , () => {

        const dataTerritories = groupBy(jsonDataTerritories,"id");
        const territoriesByParent = groupBy(jsonterritoriesByParent,"parent_id");
        const territoryToRebuild = "414";
        const myTerritories =  {
                "id": "414",
                "code": "02",
                "name": "Aisne",
                "kind": "FRDEPA",
                "created_at": "2019-12-10 12:39:46.253738",
                "updated_at": "2020-07-28 07:20:18.244356",
                "is_current": "true",
                "population": "",
                "official_website_url": "",
                "articles_count": "0",
                "admin_docs_count": "0",
                "impacters_count": "0",
                "websites_count": "0",
                "sources_count": "0",
                "children" : [
                    {
                        "id": "415",
                        "code": "200071785",
                        "name": "CA Chauny-Tergnier-La Fère",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:46.412558",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.ctlf.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0"
                    },
                    {
                        "id": "418",
                        "code": "240200477",
                        "name": "CA GrandSoissons Agglomération",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:46.556263",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.agglo-soissonnais.com",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0",
                        "children" : [
                            {
                                "id": "419",
                                "code": "02003",
                                "name": "Acy",
                                "kind": "FRCOMM",
                                "created_at": "2019-12-10 12:39:46.937270",
                                "updated_at": "2020-06-23 13:14:56.170453",
                                "is_current": "true",
                                "population": "1035",
                                "official_website_url": "",
                                "articles_count": "0",
                                "admin_docs_count": "0",
                                "impacters_count": "0",
                                "websites_count": "0",
                                "sources_count": "0"
                            }
                        ]
                    },
                    {
                        "id": "420",
                        "code": "240200469",
                        "name": "CC du Pays de la Serre",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:46.937270",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.paysdelaserre.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0"
                    },
                    {
                        "id": "422",
                        "code": "240200576",
                        "name": "CC de la Champagne Picarde",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:47.173494",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.cc-champagnepicarde.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0",
                        "children" : [
                            {
                                "id": "778",
                                "code": "02360",
                                "name": "Villeneuve-sur-Aisne",
                                "kind": "FRCOMM",
                                "created_at": "2019-12-10 12:39:59.211086",
                                "updated_at": "2020-08-12 11:47:58.546403",
                                "is_current": "true",
                                "population": "2740",
                                "official_website_url": "http://www.menneville-02.fr",
                                "articles_count": "0",
                                "admin_docs_count": "0",
                                "impacters_count": "0",
                                "websites_count": "0",
                                "sources_count": "0"
                            }
                        ]
                    },
                    {
                        "id": "424",
                        "code": "200071983",
                        "name": "CC Thiérache Sambre et Oise",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:47.442428",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.cctso.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0"
                    },
                    {
                        "id": "426",
                        "code": "240200592",
                        "name": "CC du Chemin des Dames",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:47.688722",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.cc-chemindesdames.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0"
                    },
                    {
                        "id": "428",
                        "code": "240200501",
                        "name": "CC du Val de l'Aisne",
                        "kind": "FREPCI",
                        "created_at": "2019-12-10 12:39:47.924574",
                        "updated_at": "2020-06-23 13:14:56.170453",
                        "is_current": "true",
                        "population": "",
                        "official_website_url": "http://www.cc-valdeaisne.fr",
                        "articles_count": "0",
                        "admin_docs_count": "0",
                        "impacters_count": "0",
                        "websites_count": "0",
                        "sources_count": "0"
                    },
                ]
            }

        expect(buildTheArchitectorOfChildren(dataTerritories,territoriesByParent,territoryToRebuild)).toStrictEqual(myTerritories);
    });


})