const pets = require ('../controllers/pets');
module.exports=(app)=>{

    app.get('/api/pets', (req,res) => pets.index(req,res))
    app.post('/api/pet/create', (req,res) => pets.create(req,res))
    app.get('/api/pet/:id' , (req,res) => pets.show(req,res))
    app.delete('/api/pet/destroy/:id', (req,res)=> pets.destroy(req,res))
    app.put('/api/pet/update/:id', (req,res) => pets.update(req,res))
}