import express from 'express';
import {Question} from '../models/question.js';

const router = express.Router();


router.get('/', (_req, res)  => {
     Question.find()
          .then(questions => res.json(questions))
               .catch (err => res.status(404).json(err));
});


router.post('/', (req,res) => {
     const newQuestion = new Question({
          name: req.body.name,
          content: req.body.content,
          link: req.body.link,
          isAnswered : req.body.isAnswered
          
     })
     newQuestion.save()
          .then(question => res.json(questions))
               .catch(err => res.status(422).json(err));

});

router.delete('/:question_id', (req,res) =>{
     const id = req.params.question_id;
     Question.findOneAndDelete ({_id: id})
          .then(question => res.json({_id: question._id}))
               .catch(err => res.status(404).json(err));

});

router.patch('/:question_id', (req,res) => {
     const _id = req.params.question_id;
     console.log(_id);
     const isAnswered = req.body.isAnswered;
     console.log(isAnswered);
     Question.findOneAndUpdate(_id, {isAnswered: isAnswered},{
          new: true

     })

          .then(question => res.json({_id: question._id}))
               .catch(err => res.status(404).json(err));
     

});

//console.log(router.stack);

export const questions = router;