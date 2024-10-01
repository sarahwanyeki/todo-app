const express = require("express")
const router = express.Router()
const todo = require("../controllers/todo.js")



// get Controllers connection
router.get("/", todo.homeController );

router.get("/add-todo", todo.addTodoFormController);

router.get("/update-todo", todo.updateTodoFormController);

router.get("/delete-todo", todo.deleteTodoPageController );

// End get Controllers connection


// post Controllers connection
router.post("/add-todo", todo.addTodoController )

router.post("/update-todo/:id", todo.updateTodoController )

router.get("/confirm-delete", todo.deleteTodoController)
// End post Controllers connection


// export modules
module.exports = router;