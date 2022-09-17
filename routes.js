
import { Router } from 'express'
import { index, services__404, services_type, services_api_add_bids } from './controller.mjs'
// import { body } from 'express-validator'
// import auth from '../middlewares/auth.js'
// import AddressController from '../controllers/address.js'
const router = Router()

router.get('/', index)
router.get('/service/:type', services_type)

router.get('/404', services__404)

router.post('/api/add_bids', services_api_add_bids)


// Все 
// router.get('/projects', cases)
// router.get('/case/:title', case_page)

// router.post('/get-case', get_case)

// router.post('/contact', contact)

// //роутер добавления кейса
// function auth(req, res, next) {
//     next()
// }
// router.get('/add-case', auth, add_case)
// router.post('/add-case', auth, add_case_post)


// // router.get('/', AddressController.getAll)
// // router.post('/add', AddressController.add)

export default router