

import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema= new Schema({
    Events:{
        name:String,
        type:String,
        participant:{
            name:String,
            scholar_ID:Number,
            email:String,
            mobile_No:Number,
            teamName:{
             type:String,
             required:false,
            },
            teamMembers:[]
        }
    },
})

eventSchema.plugin(mongooseAggregatePaginate)

export const Event=mongoose.model("Event",eventSchema)