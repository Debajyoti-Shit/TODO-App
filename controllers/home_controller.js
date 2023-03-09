const Task= require('../models/task');


//controller for home page
module.exports.home = function(req, res) {
    Task.find({})
      .then((tasks) => {
        return res.render('home', {
          title: "TODO App",
          tasks_list: tasks,
          months: ['Jan', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
        });
      })
      .catch((err) => {
        console.log(`Error in fetching tasks from db: ${err}`);
        console.log(err);
        return res.render('home', {
          title: "TODO App",
          tasks_list: [],
          months: ['Jan', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
        });
      });
  };

  
  
// controller for create tast
module.exports.createTask = function(req,res){
    Task.create(req.body)
    .then((newTask)=>{
        console.log(`New Task Created: ${newTask}`);
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error in creating contact: ${err}`);
        return res.redirect('back');
    });

};


// controller for deleting task
module.exports.deleteTasks = function(req,res){
    Task.deleteMany({_id:{$in:req.body.checked}})
    .then((deletedTasks)=>{
        console.log("Tasks deleted: ",deletedTasks);
        // console.log(req.body.checkbox);
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log(`Error deleting the tasks from database: ${err}`);
        return;
    });
};