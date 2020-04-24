require('dotenv').config();
const { Student, Jurusan, Materi } = require('../models');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const help = require('../helper/help')


class HomeController {
	static show(req, res) {
		res.render('index');
	}

	static registrasi(req, res) {
		const error = req.query.error;
		res.render('createAccount', { error });
	}

	static registrasiPost(req, res) {
		Student.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password,
			email: req.body.email,
			birthDate: req.body.tanggal_lahir,
			userName: req.body.userName
		})
			.then((student) => {
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
          }
        })
        let mailOptions = {
          from: 'joeyjordan@gmail.com',
          to: req.body.email,
          subject: 'halo ' + req.body.userName,
          text: 'Music always'
        }

        transporter.sendMail(mailOptions, function(err,data){
          if(err){
            console.log('error occurs')
          }else{
            console.log('email sent!!!!')
          }
        })
				res.redirect('/logIn');
			})
			.catch((err) => {
				let arr = [];
				for (let i = 0; i < err.errors.length; i++) {
					arr.push(err.errors[i].message);
				}s
				res.redirect(`/registrasi/?error=${arr.join(',')}`);
      });
      
      
	}

	static logIn(req, res) {
		res.render('logIn');
	}

	static logInPost(req, res) {
		Student.findOne({
			where: {
				userName: req.body.userName
			}
		})
			.then((user) => {
				
				if (!user) {
					res.redirect('/logIn/?error=Username invalid');
				} else {
				
					if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log(user.id)
            req.session.userId = user.id;
           
						res.redirect(`/daftarJurusan/?studentId=${user.id}`);
					} else {
						res.redirect('/logIn/?error=Password invalid');
					}
				}
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static daftarJurusan(req, res) {
    let student;
    Student.findByPk(Number(req.query.studentId))
    .then(murid=>{
      student = murid
      return Jurusan.findAll()
      .then(jurusan=>{
        res.render('daftarKursus', {jurusan, student});
      })
    })
    
	
  }
  
  static checkJurusan(req,res){
    Jurusan.findAll()
    .then(jurusan=>{
      res.render('checkJurusan', {jurusan})
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static checkMateri(req,res){
    Jurusan.findOne({where:{id: req.params.id}, include:[{model:Materi}]})
     .then(jurusan=>{
        
        res.render('checkMateri', {jurusan, materi: jurusan.Materis, help})
     })
     .catch(err=>{
       res.send(err)
     })

  }

  static about(re,res){
    res.render('about')
  }

  static contact(req,res){
    res.render('contact')
    // Jurusan.findOne({where:{
    //   id : Number(req.params.id)
    // }})
    // .then(jurusan=>{
    //   res.render('konfirmasiPage', {jurusan})
    // })
    // .catch(err=>{
    //   res.send(err)
    // })
  }

  static konfirmasiGet(req,res){
    let student;
    Student.findOne({where:{
      id: req.params.studentId
    }})
    
    .then(murid=>{
      console.log(murid)
      student = murid
      return Jurusan.findOne({where:{
        id: Number(req.params.id)
      }})
      .then(jurusan=>{
        res.render('konfirmasi-daftar' ,{jurusan, student})
      })

    })
    
    .catch(err=>{
      res.send(err)
    })
  }

  static konfirmasiPost(req,res){
    Student.findOne({
			where: {
				userName: req.body.userName
			}
		})
			.then((user) => {
				
				if (!user) {
					res.redirect(`/konfirmasiPage/${req.params.id}/${req.params.studentId}?error=UserName invalid`);
				} else {
				
					if (bcrypt.compareSync(req.body.password, user.password)) {
          
            req.session.userId = user.id;
           
            
            
            return Student.update({
              JurusanId : Number(req.params.id)
            },{
              where: {
                userName :req.body.userName
              }
            })
            .then(sukses=>{
              res.render('berhasil',{studentid : req.params.studentId})
            })
            .catch(err=>{
              res.send(err)
            })

					} else {
						res.redirect(`/konfirmasiPage/${req.params.id}/${req.params.studentId}/?error=Password invalid`);
					}
				}
			})
			.catch((err) => {
				res.send(err);
			});

  }

  static myClass(req,res){
      let jurusan;
    
      
       Student.findOne({where:{
        id: req.query.id
      },include:[{model:Jurusan}]})
     .then(student=>{
     
       res.render('my-class', {student})
     })
  
    .catch(err=>{
      res.send(err)
    })
  }

  static lihatJadwal(req,res){
    let jurusan;
    Jurusan.findOne({where:{id: req.params.jurusanId}, include:[{model:Materi}]})
     .then(this_jurusan=>{
        jurusan = this_jurusan
        return Student.findOne({where:{
          id: req.params.studentId
        }})
        .then(student=>{
          res.render('checkJadwal', {jurusan, materi: jurusan.Materis, student, help})
        })
     })
     .catch(err=>{
       res.send(err)
     })
  }

  static gantiJurusan(req,res){
    console.log(req.params.id)
    let jurusan;
    Jurusan.cari()
  .then(this_jurusan=>{
    jurusan = this_jurusan
    return Student.findOne({where:{
      id : Number(req.params.id)
    }})
    .then(student=>{
      console.log(student.userName)
      res.render('gantiJurusan', {student, jurusan})
    })
    .catch(err=>{
      res.send(err)
    })
  })
    
  }
    static updateJurusan(req,res){
      Student.update({
      JurusanId : Number(req.params.jurusanId)
      },{
        where:{
          id : Number(req.params.studentId)
        }
      })
      .then(murid=>{

       return Student.findOne({where:{
          id: req.params.studentId
        },include:[{model:Jurusan}]})
       .then(student=>{
        //  res.send(student)
         res.render('my-class', {student})
       })
    
      })
      .catch(err=>{
        res.send(err)
      })
    }

    static hapus(req,res){
      Student.destroy({
        where:{
          id: req.params.id
        }
      })
      .then(erase=>{
        res.redirect('/')
      })
      .catch(err=>{
        res.send(err)
      })
    }
}

module.exports = HomeController;
