// import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';

// enablePromise(true);

// const DATABASE_NAME = 'lukis.db';

// export async function getDBConnection() {
//     // const db = await openDatabase({name: DATABASE_NAME, location: 'default'});
//     // console.log(db);
    
//     // return db;
//     try {
//         const db = await openDatabase({ name: DATABASE_NAME, location: 'default' });
//         console.log(db);

//         return db;
//     } catch (error) {
//         console.error('Error opening database aquí:', error);
//         throw error;
//     }    
// }

// export async function createTables(db: SQLiteDatabase) {
//     const query = `CREATE TABLE IF NOT EXISTS incomes(
//                     id INTEGER PRIMARY KEY AUTOINCREMENT,
//                     name VARCHAR(100),
//                     description VARCHAR(250),
//                     price FLOAT,
//                     date DATE,
//                     category VARCHAR(50)
//                    )`;
//     return db.executeSql(query); //kiiiiiiiiiiiiiiiiiiiiiiiiiipoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
// }

// export async function initDatabase() {
//     const db = await getDBConnection();
//     await createTables(db);
//     db.close();    
// }

// export async function insertIncome(db: SQLiteDatabase, income: any) {
//     const insertQuery = `INSERT INTO incomes(name, description, price, date, category) VALUES (${income.name, income.description, income.price, income.date, income.category})`;
//     const result = await db.executeSql(insertQuery);
//     return result;
// }

// export async function getIncomes(db: SQLiteDatabase) {
//     const incomes: any = [];
//     const incomesQuery = `SELECT id, name, description, price, date, category FROM incomes`;
//     const results = await db.executeSql(incomesQuery);
//     results.forEach(function(result) {
//         for (let index = 0; index < result.rows.length; index++) {
//             incomes.push(result.rows.item(index));
//         }
//     });
//     return incomes;
// }


// import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const DATABASE_NAME = 'lukis.db';

export async function getDBConnection() {
    try {
        const db = await SQLite.openDatabase({ name: DATABASE_NAME, location: 'Library' });
        console.log(db);
        return db;
    } catch (error) {
        console.error('Error opening database:', error);
        throw error; // Re-lanzar el error para que pueda ser capturado en el bloque try-catch externo
    }
}


export async function createTables(db: SQLite.SQLiteDatabase) {
    const query = `CREATE TABLE IF NOT EXISTS incomes(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name VARCHAR(100),
                    description VARCHAR(250),
                    price FLOAT,
                    date DATE,
                    category VARCHAR(50)
                   )`;
    return db.executeSql(query, []); // Añadir un array vacío para indicar que no hay valores para reemplazar los placeholders
}

export async function initDatabase() {
    const db = await getDBConnection();
    await createTables(db);
    db.close();
}

export async function insertIncome(db: SQLite.SQLiteDatabase, income: any) {
    const insertQuery = `INSERT INTO incomes(name, description, price, date, category) VALUES (?, ?, ?, ?, ?)`;
    const values = [income.name, income.description, income.price, income.date, income.category];
    const result = await db.executeSql(insertQuery, values);
    return result;
}

export async function getIncomes(db: SQLite.SQLiteDatabase) {
    const incomes: any = [];
    const incomesQuery = `SELECT id, name, description, price, date, category FROM incomes`;
    const results = await db.executeSql(incomesQuery);
    results.forEach(function (result) {
        for (let index = 0; index < result.rows.length; index++) {
            incomes.push(result.rows.item(index));
        }
    });
    return incomes;
}