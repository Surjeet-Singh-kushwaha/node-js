let express = require('express')
const router = express.Router()
// const { check, validationResult }
router.get('/facult',(req, res)=>{
    res.send('THis is a faulty page')
})

module.exports = router