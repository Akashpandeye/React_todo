const zod = require("zod")

const createTodo = zod.object({
    title: zod.string().min(1, "This feild is required"),
    description: zod.string()
});

const updateTodo = zod.object({
    id : zod.string()
});


module.exports = {
    createTodo: createTodo, 
    updateTodo: updateTodo
}