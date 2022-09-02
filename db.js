const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // user: 'kingcobblertest_btb_card',
  // password: 'My0nqYIlW^0b',
  // database: 'kingcobblertest_btb_card',
  user: 'root',
  password: 'ABE123abe!',
  database: 'btn_cards',
});
// const mysqlssh = require('mysql-ssh2');

// const connection = mysqlssh.connect(
//   {
//     host: '82.180.174.99',
//     port: 65002,
//     user: 'u631768817',
//     password: 'ABE123abe!',
//   },
//   {
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'u631768817_btn_card',
//     password: 'ABE123abe!',
//     database: 'u631768817_btn_card',
//   }
// );

// const con = connection;

module.exports = connection;
