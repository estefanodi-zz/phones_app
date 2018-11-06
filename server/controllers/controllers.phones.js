const Phone = require('../models/models.phone');

class PhonesControllers {
//=============================================================================
//======================== GET ALL PHONES =====================================
//=============================================================================
  getAllPhones(req, res, next) {
    Phone.find(function (err, phones){
    if(err){
      return next(err);
    }else {
      res.json(phones);
    }
   });
  };
//=============================================================================
//======================== CREATE PHONE =======================================
//=============================================================================
  createPhone(req, res, next) {
   const { model,description,image,color,price } = req.body;
   const phone = new Phone({ 
      model,
      description,
      image,
      color,
      price
   });
    phone.save(function(err,newPhone) {
      if(err) return next(err);
        res.status(200).send({newPhone});
    });
  }
//=============================================================================
//======================== REMOVE PHONE =======================================
//=============================================================================
  removePhone(req, res, next) {
    Phone.findOneAndDelete({_id:req.body.id}, (err, removedPhone) => {
      if(err) return next(err);
      res.status(200).send({id:req.body.id});
    })
  }
//=============================================================================
//======================== UPDATE PHONE =======================================
//=============================================================================
  updatePhone(req, res, next) {
    let {model, description, image, color, price, id} = req.body;
    Phone.findOneAndUpdate({_id:req.body.id}, {$set:{model, description, image, color, price, id}}, 
                        {new: true}, (err) => {
      if(err){ 
        return next(err)
      }else{
        Phone.find(function (err, phones){
          if(err){
            return next(err)
          }else {
            console.log('phones=',phones)
            res.json(phones);
          }
        })
      }
    })
  }
}

module.exports = new PhonesControllers();