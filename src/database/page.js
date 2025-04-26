import mongoose from "mongoose"

const connectToDb = async ()=>{
    const url = "mongodb+srv://manish123:<12345>@cluster0.pfh9inp.mongodb.net/"

mongoose.connect(url)
.then(()=>console.log("datbase connected successfully"))
.catch((e)=>console.log(e)
);

}


export default connectToDb

