process.on('uncaughtException', (e) => {
  try {
    // read e.stack
    const stack = e.stack
    console.log('work')
  } catch (err) {
    console.error(err)
  }
})
const err = new Error()
delete err.stack
throw err
