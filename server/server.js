const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")



app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

const jsonDataTerritories = require("./ressources/territories.json")
const jsonterritoriesByParent = require('./ressources/territory_parents.json')



/**
 * cette fonction sert à regrouper les données selon le parent-id
 */
function groupBy(items, key){
    let result =items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }),
        {},
    );
    return result
}

/**
 *cette fonction sert à prendre le tableau de children d'un territory est retourner le même tableau mais avec les données
 * de fichiers territories.json
 */
function equivalentTerritoriesParentInTerritories(tabCHildren,dataTerritories){
    let dataChildren = []
    tabCHildren.forEach((child)=>{
        if(dataTerritories[child["child_id"]]){
            dataChildren.push(dataTerritories[child["child_id"]][0])
        }
    })
    return dataChildren
}

/**
 * cette fonction prend un element de territoriesByParent d'indice key qui est sous la forme de {parent-id : [child1,child2,...]} 
 * et vérifier si un child à aussi des enfants (ex : si le child est un EPCI alors ce child est le père de plusieurs communes)
 * si oui chercher l'équivalents de ce child dans le dossier territories.json et ajouter le champs children avec les donneés des enfants
 */
function buildTheArchitectorOfChildren(dataTerritories,territoriesByParent,key){
    let children = [];
    territoriesByParent[key].forEach((child)=>{
        if(dataTerritories[child["child_id"]]){
            if(!Object.keys(territoriesByParent).includes(child["child_id"])){
                children.push(dataTerritories[child["child_id"]][0])
            }
            else{
                    children.push({...dataTerritories[child["child_id"]][0],
                        ...{'children' :equivalentTerritoriesParentInTerritories(territoriesByParent[child["child_id"]],dataTerritories,territoriesByParent) }})
                buildTheArchitectorOfChildren(dataTerritories,territoriesByParent,child["child_id"])
            }

        }
    })
    return children;
}

/**
 * cette fonction sert à prendre un élément de niveau supérieur(ici on prend type = FRDEPA mais on peut prendre un niveau plus haut) et retourner
 * un ojbet des données de cet element avec le champs children sous la forme d'un arbre.
 */
function buildTheArchitectorOfTerritory(dataTerritories,territoriesByParent,type){
    let dataOfKeyItem = [];
    Object.keys(territoriesByParent).forEach((key)=>{
        if(dataTerritories[key] && dataTerritories[key][0]["kind"]){
            if(dataTerritories[key][0]["kind"] === type){
                let children = buildTheArchitectorOfChildren(dataTerritories,territoriesByParent,key);
                dataOfKeyItem.push({...dataTerritories[key][0],...{"children" : children}})
            }
        }
    })

    return dataOfKeyItem
}

app.get("/", cors(), async (req,res) =>{

    if(jsonDataTerritories && jsonterritoriesByParent ){
        let territoriesByParentGroupedByParent = groupBy(jsonterritoriesByParent, "parent_id"); // grouper les données selon le parent-id
        let dataTerritoriesGroupedById = groupBy(jsonDataTerritories, "id");
        let territoriesWithChildren =  buildTheArchitectorOfTerritory( dataTerritoriesGroupedById,territoriesByParentGroupedByParent,'FRDEPA')
        console.log("length",territoriesWithChildren.length)
        res.send(territoriesWithChildren)
    }

})

app.post("/selectedData", cors(), async (req,res) =>{
    let selectedTerritories = [];
    if(jsonDataTerritories && jsonterritoriesByParent ){
        let filters = req.body;
        let dataTerritoriesGroupedById = groupBy(jsonDataTerritories, "id");
        filters.forEach((item)=>{
            selectedTerritories.push(dataTerritoriesGroupedById[item][0])
        })
        res.send(selectedTerritories)
    }

})

app.listen(port, () =>{
    console.log("listnning at localhost : 3000")
})