import conversoModel from '../models/ConversoModel.js';

// Definir métodos para el CRUD 

// Mostrar TODOS los artículos

export const getAllConverso = async (req, res) => {
    try {
        const sneakers = await conversoModel.find()
        res.status(200).json(sneakers)
    } catch (error) {
        res.json( {message: error.message})
    }

}

// Mostrar UN artículo

export const getConverso = async (req, res) => {
        try {
            const id = req.params.id
            const sneaker = await conversoModel.findById({_id:id})
            console.log(sneaker)
                res.status(200).json(sneaker)
            } catch (error) {
            res.json( {message: error.message})  
        }
}
// Crear un artículo

export const createConverso = async (req, res) => {
    try {
        await conversoModel.create(req.body)
        res.status(200).json({
            "message":"Artículo creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
        
    }

}

// Actualizar un artículo
export const updateConverso = async (req, res) => {
    try {
        const id = req.params.id
        await conversoModel.updateOne({_id:id}, req.body).then( res=> {
            console.log(res)
        })
        res.status(200).json({
            "message":"Artículo actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }

}
// Eliminar un artículo
export const deleteConverso = async (req, res) => {
    try {
        const id = req.params.id
        await conversoModel.deleteOne({_id:id }).then( res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Artículo eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} ) 
    }
    
}