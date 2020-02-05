Using Async/await with a request handler
To use Async/await, you need to use the async keyword when you define a request handler. (Note: These request handlers are known as called “controllers”. I prefer calling them request handlers because request handlers are more explicit).

app.post('/testing', async (req, res) => {
  // Do something here
})
Once you have the async keyword, you can await something immediately in your code.

app.post('/testing', async (req, res) => {
  const user = await User.findOne({email: req.body.email})
})
------------------------------------------------------------------------------------------------------------------------------------------
Let’s say you want to create a user through a POST request. To create a user, you need to pass in a firstName and an email address. Your Mongoose Schema looks like this:

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  }
})
Here’s your request handler:

app.post('/signup', async(req, res) => {
  const { email, firstName } = req.body
  const user = new User({ email, firstName })
  const ret = await user.save()
  res.json(ret)
})
Now, let’s say you send a request that lacks an email address to your server.

fetch('/signup', {
  method: 'post'
  headers: { 'Content-Type': 'application/json' }
  body: JSON.stringify({
    firstName: 'Zell'
  })
}
----------------------------------------------------------------------------------------------------------------------------------------
