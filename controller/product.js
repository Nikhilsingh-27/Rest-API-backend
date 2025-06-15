const product=require("../models/product")
const getallproduct=async(req,res)=>{
    const {company,name,featured,rating,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;    
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(rating){
        queryObject.rating=rating
    }

    let apidata=product.find(queryObject);
    if(sort){
        let sortfix=sort.split(',').join(" ");
        apidata=apidata.sort(sortfix);
    }

    if(select){
      
        let selectfix=select.split(',').join(" ");
        apidata=apidata.select(selectfix);
    }
    console.log(queryObject)


    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 10;

    let skip=(page-1)*limit;
    apidata=apidata.skip(skip).limit(limit)

    const data=await apidata;
    res.status(200).json({data,size:data.length});
}
const getalltestingproducts=async(req,res)=>{
    const data=await product.find(req.query);
    console.log(req.query)
    
    res.status(200).json({data})
}
module.exports={getallproduct,getalltestingproducts};