const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res){
	if(!req.body.phone){
		res.status(422).send({error:'You must provide a phone number'});
	}

	const phone = String(req.body.phone).replace(/[^\d]/g, "");

	//find user
	admin.auth().getUser(phone)
	.then( userRecord => {
		//generate code
    const code = Math.floor((Math.random() * 8999 + 1000));
    
    //could't get message bacause of firebase trial account
		// twilio.messages.create({
		// 	body:"Your code is "+ code,
		// 	to: "+"+phone,
		// 	from: '+14243206355'
		// },(err)=>{
		// 	if(err){return res.status(422).send(err); }

		// 	//save code
		// 	admin.database().ref('users/'+phone)
		// 	.update({ code, codeValid:true }, ()=>{
		// 		res.send({success:true});
		// 	})
    // })
    
    admin.database().ref('users/'+phone)
    .update({ code, codeValid:true }, ()=>{
      res.send({success:true, message:code});
    })

	})
	.catch(err => {
		res.status(422).send({error:err});
	});
}