import {Router} from 'express'
import deleteTodo, { addTodo, getOneTodo, getTodos, updateTodo } from '../controllers/TodoController'


const router= Router()

router.get('', getTodos)
router.post('', addTodo)
router.get('/:id', getOneTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router