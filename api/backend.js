import {Router} from 'express'
import {getNews} from '../controllers/news.js'

const router = Router()

router.get('/api/getNews', getNews)

export default router