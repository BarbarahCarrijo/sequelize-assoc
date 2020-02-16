let express = require('express');
let router = express.Router();

const companyController = require('../controllers').company;
const branchController = require('../controllers').branch;
const profileController = require('../controllers').profile;
const userController = require('../controllers').user;
const roleController = require('../controllers').role;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

/* Company Router */
router.get('/api/company', companyController.list);
router.get('/api/company/:id', companyController.getById);
router.put('/api/company/:id', companyController.update);
router.delete('/api/company/:id', companyController.delete);
router.post('/api/company', function (req, res) {
  companyController.add
});

/* Branch Router */
router.get('/api/branch', branchController.list);
router.get('/api/branch/:id', branchController.getById);
// router.post('/api/branch', branchController.add);
router.put('/api/branch/:id', branchController.update);
router.delete('/api/branch/:id', branchController.delete);
router.post('/api/branch', function (req, res) {
  branchController.add
});

/* Profile Router */
router.get('/api/profile', profileController.list);
router.get('/api/profile/:id', profileController.getById);
// router.post('/api/profile', profileController.add);
router.put('/api/profile/:id', profileController.update);
router.delete('/api/profile/:id', profileController.delete);
router.post('/api/profile', function (req, res) {
  profileController.add
});

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
// router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);
router.post('/api/user', function (req, res) {
  userController.add
});

/* User Role */
router.get('/api/role', roleController.list);
router.get('/api/role/:id', roleController.getById);
// router.post('/api/role', roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);
router.post('/api/role', function (req, res) {
  roleController.add
});

/* Advance Router */
// router.post('/api/role/add_user', roleController.addUser);
router.post('/api/role/add_user', function (req, res) {
  roleController.addUser
});
// router.post('/api/company/add_with_branches', companyController.addWithBranches);
router.post('/api/company/add_with_branches', function (req, res) {
  companyController.addWithBranches
});

module.exports = router;