import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = Schema({
     name: {
          type:String,
          required: true

     },
     content: {
          type:String,
          required: true

     },
     isAnswered: {
          type:Boolean,
          default: false         

     },

     link: {
          type: String,

     },


},{timestamp: true})

export const Question = mongoose.model('Question' , QUestionSchema);