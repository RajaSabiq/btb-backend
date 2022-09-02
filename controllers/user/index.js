const connection = require('../../db');

const users = (req, res) => {
  const { id } = req.query;
  if (id === undefined || id === null) {
    connection.query(
      `SELECT * FROM users where role='user'`,
      (err, result, field) => {
        if (err)
          res.json({
            success: false,
            status: 400,
            err,
          });
        else
          res.json({
            success: true,
            status: 200,
            message: 'Successfully Get users',
            data: result,
          });
      }
    );
  } else {
    connection.query(
      `SELECT * FROM users where id='${id}' and role='user'`,
      (err, result, field) => {
        if (err)
          res.json({
            success: false,
            status: 400,
            message: err,
          });
        else
          res.json({
            success: true,
            status: 200,
            message: 'Successfully Get users',
            data: result[0],
          });
      }
    );
  }
};

const usersDoc = (req, res) => {
  const { id } = req.query;
  connection.query(
    `SELECT * FROM docs where uid='${id}' `,
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: err,
        });
      else
        res.json({
          success: true,
          status: 200,
          message: 'Successfully Get docs',
          data: result,
        });
    }
  );
};

const login = (req, res) => {
  const { email, password } = req.body;

  connection.query(
    `SELECT * FROM users WHERE email='${email}' and password='${password}'`,
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Credentials',
          data: err,
        });
      else if (result.length > 0) {
        res.json({
          success: true,
          status: 200,
          message: 'Successfully Login',
          data: result[0],
        });
      } else {
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Credentials',
          data: err,
        });
      }
    }
  );
};
const register = (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  connection.query(
    `INSERT INTO users(first_name, last_name, email, phone, password) VALUES ('${first_name}','${last_name}','${email}','${phone}','${password}')`,
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Credentials',
          data: err,
        });
      else
        res.json({
          success: true,
          status: 200,
          message: 'Successfully Register',
        });
    }
  );
};

const deleteUser = (req, res) => {
  const { id } = req.query;
  connection.query(`delete from users where id=${id}`, (err, result, field) => {
    if (err)
      res.json({
        success: false,
        status: 400,
        message: 'Invalid Id',
        data: err,
      });
    else
      res.json({
        success: true,
        status: 200,
        message: 'Successfully Delete Users',
      });
  });
};

const deleteUserDocument = (req, res) => {
  const { id } = req.query;

  connection.query(`delete from docs where id=${id}`, (err, result, field) => {
    if (err)
      res.json({
        success: false,
        status: 400,
        message: 'Invalid Id',
        data: err,
      });
    else
      res.json({
        success: true,
        status: 200,
        message: 'Successfully Delete Users',
      });
  });
};

const editUser = (req, res) => {
  const { id } = req.query;
  const { first_name, last_name, email, phone, password } = req.body;

  connection.query(
    `UPDATE users SET first_name='${first_name}',last_name='${last_name}',email='${email}',phone='${phone}',password='${password}' WHERE id =${id}`,
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Id',
          data: err,
        });
      else
        res.json({
          success: true,
          status: 200,
          message: 'Successfully Update Users',
        });
    }
  );
};
const editAdmin = (req, res) => {
  const { id } = req.query;
  const { email, password } = req.body;

  connection.query(
    `UPDATE users SET email='${email}',password='${password}' WHERE id =${id} and role='admin'`,
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Id',
          data: err,
        });
      else
        res.json({
          success: true,
          status: 200,
          message: 'Successfully Update Users',
        });
    }
  );
};

const uploadDoc = (req, res) => {
  const { uid, type } = req.body;
  const value = req.files.docs.map((item) => [uid, type, item.filename]);

  connection.query(
    `INSERT INTO docs(uid, type, file_path) VALUES ?`,
    [value],
    (err, result, field) => {
      if (err)
        res.json({
          success: false,
          status: 400,
          message: 'Invalid Credentials',
          data: err,
        });
      else
        res.json({
          success: true,
          status: 200,
          message: `Successfully Added ${type} Documents`,
        });
    }
  );
};

module.exports = {
  login,
  register,
  users,
  deleteUser,
  editUser,
  uploadDoc,
  editAdmin,
  usersDoc,
  deleteUserDocument,
};
