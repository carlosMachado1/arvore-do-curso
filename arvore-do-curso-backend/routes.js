const express = require("express")
const routes = express.Router()

const UserController = require('./controllers/UserController')
const CourseController = require('./controllers/CourseController')
const DisciplineController = require('./controllers/DisciplineController')
const CourseDisciplineController = require('./controllers/CourseDisciplineController')
const LoginController = require('./controllers/LoginController')

routes.get("/", (request, response)=>{
    response.send({
        message: 'funcionando'
    })
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/courses', CourseController.index)
routes.post('/courses', CourseController.store)
routes.put('/update-course/:id', CourseController.update)
routes.delete('/delete-course/:id', CourseController.delete)

routes.get('/disciplines', DisciplineController.index)
routes.post('/disciplines', DisciplineController.store)
routes.put('/update-discipline/:id', DisciplineController.update)
routes.delete('/delete-discipline/:id', DisciplineController.delete)

routes.get('/course-discipline', CourseDisciplineController.index)
routes.post('/course-discipline', CourseDisciplineController.store)

routes.post('/login', LoginController.store)

module.exports = routes;