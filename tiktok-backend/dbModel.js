import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    comments:String,
    shares:String,
    description:String
})

export default mongoose.model('tiktokVideos',tiktokSchema)