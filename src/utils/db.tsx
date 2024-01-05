import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

const DATABASE_NAME = 'lukis.db';

export async function getDBConnection() {
    const db = await openDatabase({name: DATABASE_NAME, location: 'default'});
    return db;    
}

export async function createTables(db: SQLiteDatabase) {
    const query = `CREATE TABLE IF NOT EXISTS incomes(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name VARCHAR(100),
                    description VARCHAR(250),
                    price FLOAT,
                    date DATE,
                    category VARCHAR(50)
                   )`;
    return db.executeSql(query); //kiiiiiiiiiiiiiiiiiiiiiiiiiipoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
}

export async function initDatabase() {
    const db = await getDBConnection();
    await createTables(db);
    db.close();    
}


