import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage'
import { incomeFieldsType } from '../types/Types';

enablePromise(true);

const LUKIS = 'lukis.db';

export const getDBConnection = async() => {
    const db = await openDatabase({name: LUKIS, location: 'default'});
    return db;
}

export const createIncomesTable = async(db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NO EXISTS 
                   incomes(
                     id INTEGER PRIMARY KEY AUTOINCREMENT, 
                     name VARCHAR(512), 
                     description VARCHAR(512),
                     price INTEGER,
                     date VARCHAR(512),
                     category VARCHAR(512)
                   )`;
    return db.executeSql(query);
}

export const initDataBase = async() => {
    const db = await getDBConnection();
    await createIncomesTable(db);
    db.close();
}

export const insertIncome = (db: SQLiteDatabase, fields: incomeFieldsType) => {
    const keys = Object.keys(fields);
    let stringValues = '';
    for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
            if (key === 'price') {
                stringValues += `${fields[key as keyof typeof fields]},`;
            }else{
                stringValues += `'${fields[key as keyof typeof fields]}',`;
            }
        }
    }
    const fieldsToInsert = stringValues.substring(0, stringValues.length - 1);
    const insertQuery = `INSERT INTO incomes(${keys.join(',')}) 
                         values(${fieldsToInsert})`;
    return db.executeSql(insertQuery);
}

export const getIncomes = async(db: SQLiteDatabase, fields: incomeFieldsType) => {
    const incomes: incomeFieldsType []  = [];
    const keys = Object.keys(fields);
    const getQuery = `SELECT ${keys.join(',')} FROM incomes`;
    const results = await db.executeSql(getQuery);
    results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
            incomes.push(result.rows.item(index));
        }
    });
    return incomes;
} 

