const equivalentTerritoriesParentInTerritories =(tabCHildren,dataTerritories) => {
    let dataChildren = []
    tabCHildren.forEach((child)=>{
        if(dataTerritories[child["child_id"]]){
            dataChildren.push(dataTerritories[child["child_id"]][0])
        }
    })
    return dataChildren
}

exports.equivalentTerritoriesParentInTerritories = equivalentTerritoriesParentInTerritories;