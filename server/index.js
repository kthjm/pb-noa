import Next from 'next'
import Noa from './noa.js'

const { NODE_ENV, PORT } = process.env
const app = Next({ dev: NODE_ENV === 'backend' })
const handleStatic = app.getRequestHandler()
const handlePages = app.render.bind(app)

app.prepare().then(() =>
  Noa({ handleStatic, handlePages }).listen(PORT || 7000, err => {
    if (err) throw err
    console.log(`> Ready ${PORT || 7000}`)
  })
)
