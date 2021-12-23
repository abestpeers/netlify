exports.handler=async function(){
    console.log("func supermario");
    const data={name:"akash",age:24}
    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}