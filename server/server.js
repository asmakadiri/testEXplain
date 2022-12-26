const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")



app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

const jsonDataTerritories = require("./ressources/territories.json")
const jsonTerritoriParent = require('./ressources/territory_parents.json')



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

function linkTerritoriesAndTerritoriesPrent(tabCHildren,dataTerritories){
    let dataChildren = []
    tabCHildren.forEach((child)=>{
        if(dataTerritories[child["child_id"]]){
            dataChildren.push(dataTerritories[child["child_id"]][0])
        }
    })
    return dataChildren
}

//trouver les informations des child-ids d'un item dans le territoriesFile
function findChildInTerritoriesfile(dataTerritories,territoriParent,key){
    let children = [];
    territoriParent[key].forEach((child)=>{
        if(dataTerritories[child["child_id"]]){
            if(!Object.keys(territoriParent).includes(child["child_id"])){
                children.push(dataTerritories[child["child_id"]][0])
            }
            else{
                    children.push({...dataTerritories[child["child_id"]][0],
                        ...{'children' :linkTerritoriesAndTerritoriesPrent(territoriParent[child["child_id"]],dataTerritories,territoriParent) }})
                    findChildInTerritoriesfile(dataTerritories,territoriParent,child["child_id"])
            }

        }
    })
    return children;
}
function isDepartementOrCommune(dataTerritories,territoriParent,type){
    let dataOfKeyItem = [];
    Object.keys(territoriParent).forEach((key)=>{
        if(dataTerritories[key] && dataTerritories[key][0]["kind"]){
            if(dataTerritories[key][0]["kind"] === type){
                let children = findChildInTerritoriesfile(dataTerritories,territoriParent,key);
                dataOfKeyItem.push({...dataTerritories[key][0],...{"children" : children}})
            }
        }
    })

    return dataOfKeyItem
}

app.get("/", cors(), async (req,res) =>{

    if(jsonDataTerritories && jsonTerritoriParent ){
        let territoriParentGroupedByParent = groupBy(jsonTerritoriParent, "parent_id"); // grouper les données selon le parent-id
        let dataTerritoriesGroupedById = groupBy(jsonDataTerritories, "id");
        let territoriesWithChildren =  isDepartementOrCommune( dataTerritoriesGroupedById,territoriParentGroupedByParent,'FRDEPA')
        console.log("length",territoriesWithChildren.length)
        res.send(territoriesWithChildren)
    }

})

app.post("/selectedData", cors(), async (req,res) =>{
    let selectedTerritories = [];
    if(jsonDataTerritories && jsonTerritoriParent ){
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