const router = require('express').Router();

const homeController = require('../controllers/homeController');

function check(req, res, next) {
	if (req.session.userId) next();
	else res.render('belumDaftar');
}

router.get('/', homeController.show);

router.get('/registrasi', homeController.registrasi);

router.post('/registrasi', homeController.registrasiPost);

router.get('/logIn', homeController.logIn);

router.post('/logIn', homeController.logInPost);

router.get('/daftarJurusan', check, homeController.daftarJurusan);

router.get('/checkJurusan', homeController.checkJurusan);

router.get('/checkMateri/:id', homeController.checkMateri);

router.get('/contact', homeController.contact);

router.get('/about', homeController.about);

router.get('/konfirmasiPage/:id/:studentId', homeController.konfirmasiGet);
router.post('/konfirmasiPage/:id/:studentId', homeController.konfirmasiPost);

router.get('/my-class/?',check, homeController.myClass);

router.get('/lihatJadwal/:jurusanId/:studentId', homeController.lihatJadwal);

router.get('/gantiJurusan/:id', homeController.gantiJurusan);

router.get('/updateJurusan/:jurusanId/:studentId', homeController.updateJurusan);

router.get('/hapus/:id', homeController.hapus);
module.exports = router;
