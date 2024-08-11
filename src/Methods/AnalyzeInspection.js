const analyze = (data,inspectionName) => {
    let countVar = 0;
    let countYok = 0;
    let countIzinli = 0;
    console.log(data.length)
    let allInspectionCount = data.length;
    
    data.map((inspection,index) =>{

        if(inspection.status== "var"){
            countVar++;
        }else if(inspection.status== "yok"){
            countYok ++;
        }else{
            countIzinli++;
        }
    })
    let participationRate = ((100 * countVar) / allInspectionCount);
    return[countVar,countYok,countIzinli,participationRate]
}

module.exports= analyze;
