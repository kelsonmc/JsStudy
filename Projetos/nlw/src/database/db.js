//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operaçoes no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para operaçoes

// db.serialize(() => {

//     //criar uma tabela com comandos sql e...
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );

//     `)

//     //...inserir dados
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);        
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)






    //...consultar
    // db.all(`SELECT name FROM PLACES`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    //  })

    //...deletar um dado
    //  db.run(`DELETE FROM places WHERE id = ?`, [4],function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso: ")
    // })
   
// })