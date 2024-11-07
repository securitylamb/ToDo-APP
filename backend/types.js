const zod = require("zod");


/**
 * 1st title and description
 * 3rd id :string 
 */


const create_todos = zod.object({
    title: zod.string(),
    description: zod.string(),
  });
  
const update_todos =zod.object({
    id:zod.string()
}) 

module.exports = {
    create_todos:create_todos,
    update_todos:update_todos
}