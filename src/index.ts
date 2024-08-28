import { Client } from 'pg'

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});

// async function createUsersTable() {
//   try {
//     await client.connect();
    
//     const result = await client.query(`
//       CREATE TABLE users3 (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );
//     `);
    
//     console.log(result);
//   } catch (err) {
//     console.error('Error creating table:');
//   } finally {
//     await client.end();
//   }
// }

// createUsersTable();
async function insertUsersData(username : String, password: String, email: String) {
    try {
      await client.connect();

      // Wrong Way To Write Sql Query , sql injection
      
    //   const result = await client.query(`
    //     INSERT INTO users (username, password, email)
    //     VALUES ('${username}', '${password}', '${email}')
    //   `);

      const result = await client.query(`
        INSERT INTO users3 (username, password, email)
        VALUES ($1, $2, $3)
      `, [username, password, email]);
      
      console.log(result);
    } catch (err) {
      console.error('Error creating table:');
    } finally {
      await client.end();
    }
  }
  
  insertUsersData(
      "Praveen",
      "123",
      "praveen.chastaa@gmail.com"
  );
  



//   CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE     (ON DELETE CASCADE ==> if we delete user from users table so this function delete all the addresses from adderss table automatically)
//                                                                      (ON DELETE RESTRIC ==> you cannot delete  address from address , you need to remove user_id from address table, then only after removing user_id from address table you can delete address from address table, this is how restriction works)
//  );