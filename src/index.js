import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  try {
    const thing = await Promise.resolve({ two: 'three' }) // async/await!
    return res.json({...thing, hello: 'world'}) // object-rest-spread!
  } catch (e) {
    return res.json({ error: e.message })
  }
});

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }

  if (__DEV__) { // webpack flags!
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
});