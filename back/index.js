const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const Sequelize = require("sequelize");
const mysql = require("mysql2");

app.use(express.static('public'))
app.use(bodyParser.json())

const sequelize = new Sequelize("hospital", "Seller", "1234561", {
  dialect: "mssql",
  host: "127.0.0.1",
  port: "1433",
  define: {
    timestamps: false
  }
});


class User extends Sequelize.Model {
  get name() {
    return this.getName
  }
}
User.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Role: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_Staff: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: true
  },
  ID_Patients: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: true
  }
}, { sequelize, modelName: 'USER' });

class Diagnosis extends Sequelize.Model {
  get name() { }
}
Diagnosis.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Characteristic: {
    type: Sequelize.STRING,
    allowNull: true
  },
}, { sequelize, modelName: 'Diagnosi' });

class Doctors extends Sequelize.Model {
  get name() { }
}
Doctors.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Fathername: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  ID_Professions: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  Phone: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  Photo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  City: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Build: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Appartment: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'Doctor' })

class ListDiagnosis extends Sequelize.Model {
  get name() { }
}
ListDiagnosis.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  ID_Diagnosis: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_Treatments: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  }
}, { sequelize, modelName: 'List_Diagnosi' })

class ListPrescriptions extends Sequelize.Model {
  get name() { }
}
ListPrescriptions.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  // ID_Therapies: {
  //   type: Sequelize.INTEGER,
  //   foreignKey: true,
  //   allowNull: false
  // },
  Data: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, { sequelize, modelName: "List_Prescription" })

class ListProcedures extends Sequelize.Model {
  get name() { }
}

ListProcedures.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  ID_Therapies: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_Procedure: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  Quentity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: "List_Procedure" })

class ListTests extends Sequelize.Model {
  get name() { }
}


ListTests.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  ID_Therapies: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_Tests: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  Norma: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Indicator: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, { sequelize, modelName: 'List_Test' })

class Medicines extends Sequelize.Model {
  get name() { }
}

Medicines.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Dose: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, { sequelize, modelName: "Medicine" })

class Patients extends Sequelize.Model {
  get name() { }
}
Patients.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Lastname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  City: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Build: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Appartment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Photo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Phone: {
    type: Sequelize.BIGINT,
    allowNull: true
  }
}, { sequelize, modelName: "Patient" })

class Prescriptions extends Sequelize.Model {
  get name() { }
}
Prescriptions.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  ID_Medicine: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  // ID_List_Prescriptions: {
  //   type: Sequelize.INTEGER,
  //   foreignKey: true,
  //   allowNull: false
  // },
  Daily_rate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: "Prescription" })

class Procedures extends Sequelize.Model {
  get name() { }
}
Procedures.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Price:{
    type: Sequelize.INTEGER,
    allowNull: null
  }
}, { sequelize, modelName: "Procedure" })

class Professions extends Sequelize.Model {
  get name() { }
}
Professions.init({
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, { sequelize, modelName: "Profession" })

class Reseptions extends Sequelize.Model {
  get name() { }
}
Reseptions.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },  
  ID_D: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_P: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: true
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  Time: {
    type: Sequelize.TIME,
    allowNull: true
  },
  NumberCabinet: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  Price:{
    type: Sequelize.INTEGER,
    allowNull: true
  },

  Visit:{
    type: Sequelize.INTEGER,
    allowNull: true
  },
  Output:{
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, { sequelize, modelName: "Reseption" })

class Role extends Sequelize.Model {
  get name() { }
}
Role.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name_Role: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, { sequelize, modelName: "Role" })

class Tests extends Sequelize.Model {
  get name() { }
}
Tests.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, { sequelize, modelName: "Test" })


class Therapies extends Sequelize.Model {
  get name() { }
}
Therapies.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Date_Start: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  Date_End: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  ID_Treatments: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_DOC: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  ID_P: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false
  }
}, { sequelize, modelName: "Therapie" })

class Treatments extends Sequelize.Model {
  get name() { }
}
Treatments.init({
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, { sequelize, modelName: "Treatment" })

// User.create({
//   id: 1,
//   name: 'Nata',
//   age: 35
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));

// User.findAll({raw:true}).then(users=>{
//   console.log(users);
// }).catch(err=>console.log(err));

// Diagnosis.findAll({raw:true}).then(diagnos=>{
//   console.log(diagnos);
// }).catch(err=>console.log(err));

// Doctors.create({
//   Lastname: "Федоряка" ,
//   Name: "Дмитрий",
//   Fathername: "Иванович",
//   Birthdate: "2018-10-18",
//   ID_Professions: 1,
//   Phone: "456132465",
//   Photo: null,
//   City: "Харьков",
//   Street:"Пушкинская",
//   Build:"15",
//   Appartment: "5"
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));

// Doctors.findAll({raw:true}).then(doctor=>{
//   console.log(doctor);
// }).catch(err=>console.log(err));

// ListDiagnosis.findAll({raw:true}).then(diagnos=>{
//   console.log(diagnos);
// }).catch(err=>console.log(err));

// ListPrescriptions.findAll({raw:true}).then(prescription=>{
//   console.log(prescription);
// }).catch(err=>console.log(err));

// ListProcedures.findAll({raw:true}).then(procedure=>{
//   console.log(procedure);
// }).catch(err=>console.log(err));

// ListTests.findAll({raw:true}).then(test=>{
//   console.log(test);
// }).catch(err=>console.log(err));

// Medicines.create({
//   Name:'ГриппаСтоп',
//   Dose:"5"
// }).then(res=>{
//   console.log(res);
// }).catch(err=>console.log(err));

// Medicines.findAll({raw:true}).then(medicine=>{
//   console.log(medicine);
// }).catch(err=>console.log(err));

// Patients.create({
//   Firstname:'Федоряка',
//   Name: "Дмитрий",
//   Lastname: "Иванович",
//   Birthdate:"1980-02-20",
//   City:"Харьков",
//   Street:"Пушкинская",
//   Build: "25",
//   Appartment:"2",
//   Photo:null,
//   Phone: 987654321 
// }).then(res=>{
//     console.log(res);
//   }).catch(err=>console.log(err));

// Patients.findAll({raw:true}).then(patient=>{
//   console.log(patient);
// }).catch(err=>console.log(err));

////находим одного пациента
// let Firstname="Федоряка"
// Patients.findOne({where: {Firstname}})
// .then(patient=>{
//     if(!patient) return;
//     console.log(patient)
//     console.log(patient.Name, patient.ID);
// }).catch(err=>console.log(err));

// Prescriptions.findAll({raw:true}).then(list=>{
//   console.log(list);
// }).catch(err=>console.log(err));

// Procedures.findAll({raw:true}).then(procedura=>{
//   console.log(procedura);
// }).catch(err=>console.log(err));

// Professions.findAll({raw:true}).then(profession=>{
//   console.log(profession);
// }).catch(err=>console.log(err));

///тут нахожу одного
// Professions.findOne({where: {Name: "Терапевт"}})
// .then(prof=>{
//     if(!prof) return;
//     console.log(prof.Name, prof.ID);
// }).catch(err=>console.log(err));


//Добавляем новыю запись в журнал регистратуры
// let data=new Date(2020,04,20)
// let timeVisit='10:00:00'
// let cabinet=107
// let doc=12
// let patient=15
// Reseptions.create({
//   Date :data,
//   Time : timeVisit,
//   NumberCabinet: cabinet,
//   ID_D: doc,
//   ID_P: patient
// }).then(data=>{
//   console.log(data);})
// .catch(err=>{
//    console.log(err)
// })

// Reseptions.findAll({raw:true}).then(data=>{
//   console.log(data);
// }).catch(err=>console.log(err));


///тут нахожу нужную роль, для Юзера, обыного пациента
// Role.findOne({where: {Name_Role: "User"}})
// .then(level=>{
//     if(!level) return;
//     console.log(level.Name_Role, level.ID);
// }).catch(err=>console.log(err));

// Tests.findAll({raw:true}).then(test=>{
//   console.log(test);
// }).catch(err=>console.log(err));

// Therapies.findAll({raw:true}).then(data=>{
//   console.log(data);
// }).catch(err=>console.log(err));

// Treatments.findOne({where: {Name: "Хирургия"}})
// .then(sick=>{
//     if(!sick) return;
//     console.log(sick.Name, sick.ID);
// }).catch(err=>console.log(err));




/*
Diagnosis.create({
Name:"Мигрень",
Characteristic: "Головные боли в лобной части. Ощущение давления из нутри"
}).then(res=>console.log(res))
.catch(err=>{
  console.log(err)
})
Treatments.create({
Name:"Дерматология"
}).then(res=>console.log(res))
.catch(err=>{
  console.log(err)
})*/
////Начинаю прописывать связи
//один ко многоим Диагноз

Diagnosis.belongsToMany(Treatments, { through: ListDiagnosis })
Treatments.belongsToMany(Diagnosis, { through: ListDiagnosis })

ListPrescriptions.hasMany(Prescriptions, { onDelete: "cascade" })
// Prescriptions.hasMany(Medicines, { onDelete: "cascade" })

Treatments.hasMany(Therapies, { onDelete: "cascade" })
Procedures.belongsToMany(Therapies, { through: ListProcedures })
Tests.belongsToMany(Therapies, { through: ListTests })
Therapies.belongsToMany(Tests, { through: ListTests })
Therapies.belongsToMany(Procedures, { through: ListProcedures })
Therapies.hasMany(ListPrescriptions, { onDelete: "cascade" })
// Therapies.hasMany(Patients, { onDelete: "cascade" })

// Patients.hasMany(Therapies, { onDelete: "cascade" })
// Professions.hasMany(Doctors, { onDelete: "cascade" })
Doctors.hasMany(Therapies, { onDelete: "cascade" })

// Reseptions.hasMany(Patients, { onDelete: "cascade" })
//  Reseptions.hasMany(Doctors, { onDelete: "cascade" })


////Добавляем пациента на прием который есть 
// Doctors.findOne({ where: { Lastname: "Генералмайоровский" } })
//   .then(resDoctor => {
//     console.log(resDoctor)
//     Patients.findOne({ where: { Firstname: "Лампов" } })
//       .then(resPatient => {
//         console.log(resPatient)
//         Reseptions.create({
//           Date: '2020-01-30',
//           Time: '12:00:00',
//           NumberCabinet: 310,
//           ID_D: resDoctor.ID,
//           ID_P: resPatient.ID
//         }).then(res => console.log(res))
//           .catch(err => {
//             console.log(err)
//           })
//           .catch(err => {
//             console.log(err)
//           })
//       })
//   }).catch(err => {
//     console.log(err)
//   })


////Добавляем пациента на прием который НОВЫЙ ПАЦИЕНТ
// let patient = {
//   Firstname: 'Мамедов',
//   Name: "Насими",
//   Lastname: "Парсер",
//   Birthdate: "1996-09-24",
//   City: "Харьков",
//   Street: "Сумская",
//   Build: "30",
//   Appartment: "20",
//   Photo: null,
//   Phone: 222333444
// }
// ;(async ()=>{
//   Patients.create(patient)
//   await Doctors.findOne({ where: { Lastname: "Генералмайоровский" } })
//     .then(resDoctor => {
//       console.log(resDoctor)
//       Patients.findOne({ where: { Firstname: patient.Firstname, Name: patient.Name, Lastname: patient.Lastname } })
//         .then(resPatient => {
//           console.log(resPatient)
//           Reseptions.create({
//             Date: '2020-02-29',
//             Time: '15:00:00',
//             NumberCabinet: 315,
//             ID_D: resDoctor.ID,
//             ID_P: resPatient.ID
//           }).then(res => console.log(res))
//             .catch(err => {
//               console.log(err)
//             })
//             .catch(err => {
//               console.log(err)
//             })
//         })
//     }).catch(err => {
//       console.log(err)
//     })
// })()


// Professions.create({
//   ID: '8',
//   Name:"Сиделка"
//   }).then(res=>console.log(res))
//   .catch(err=>{
//     console.log(err)
//   })


/////ДОбавим НОВЫЙ АНАЛИЗ К БОЛЬНИЧНОМУ
// ListTests.create({
//   ID_Therapies:17,
//   ID_Tests:31,
//   Norma: '0.5',
//   Indicator:null,
//   Date: '2019-05-20'
// }).then (res=>console.log(res))
// .catch(err=>console.log(err))  

///добавим НОВУЮ ПРОЦЕДУРУ к БОЛЬНИЧНОМУ
// ListProcedures.create({
//   ID_Therapies:17,
//   ID_Procedure:33,
//   Quentity:3
// }).then(res=>console.log(res)).catch(err=>console.log(err))

/*
ListPrescriptions.findAll({ raw: true }).then(procedura => {
  console.log(procedura);
}).catch(err => console.log(err));
////Добавим новый рецепт к больничному
; (async () => {
  let IDListPrescr=0
  ListPrescriptions.create({
    TherapieID: 17,
    Data: '2019-05-10'
  })
  await ListPrescriptions.findOne({ where: { TherapieID: 17, Data: '2019-05-10' } })
       .then(res =>  IDListPrescr=res.ID)
  await Prescriptions.create({
    ID_Medicine: 10,
    Daily_rate: '1',
    Quantity: 2,
    ListPrescriptionID: IDListPrescr
  })
  await Prescriptions.create({
    ID_Medicine: 24,
    Daily_rate: '2',
    Quantity: 3,
    ListPrescriptionID: IDListPrescr
  })
  await Prescriptions.create({
    ID_Medicine: 31,
    Daily_rate: '1',
    Quantity: 2,
    ListPrescriptionID: IDListPrescr
    })
})()
*/

const config = {
  secret: `asdf+qwer`
}
function jwtCheck(req, secret) {
  const authorization = req && req.headers && req.headers.authorization
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.substr("Bearer ".length)
    try {
      const decoded = jwt.verify(token, secret)
      return decoded
    } catch (e) {
      return null
    }
  }
}
app.get('/user', async (req, res) => res.send(await User.findAll()))

app.get('/prescriptions', async (req, res) => res.send(await Prescriptions.findAll()))
// app.get('/doctors', async (req,res)=> res.send( await  Doctors.findAll() ))
app.get('/doctors', async (req, res) => res.send(
  await sequelize.query('SELECT Doctors.Id AS ID, Lastname, Photo, Doctors.Name AS Name, Fathername, Professions.Name AS Profession FROM Doctors INNER JOIN Professions ON Professions.Id=ID_Professions')))
app.get('/patients', async (req, res) => res.send(await Patients.findAll()))
app.get('/procedures', async (req, res) => res.send(await Procedures.findAll()))
app.get('/tests', async (req, res) => res.send(await Tests.findAll()))
app.get('/medicines', async (req, res) => res.send(await Medicines.findAll()))
app.get('/professions', async (req, res) => res.send(await Professions.findAll()))
// app.get('/professions', async (req, res) => res.send(await sequelize.query('SELECT * FROM Professions')))
//надо подумать правильно ли возвращать будет мою роль
//мы должны вернуть токен!!! а на бэкэнде расшифровать его и взять от туда роль

app.post('/login', async (req, res) => {
  let confirm = await User.findOne({ where: { Login: req.body.Login, Password: req.body.Password } })
  if (confirm != null) {
    let ur = jwt.sign({ sub: confirm.ID }, config.secret)
    res.status(200).send(JSON.stringify({ token: ur, Login: confirm.Login, ID: confirm.ID }))
  } else {
    res.status(404).send('"User doesnt has"')
  }
})

app.post('/person', async (req, res) => {

  let decoded = jwtCheck(req, config.secret)

  if (decoded) {
    let level = await sequelize.query(`SELECT U.Role FROM dbo.USERS AS U WHERE U.ID=${req.body.ID}`)
    if (level[0][0].Role == 4) {
      return res.status(200).send(JSON.stringify(await sequelize.query(`SELECT P.Firstname AS Firstname, P.Name AS Name,
         P.Lastname AS Lastname, P.Birthdate AS Birthdate, P.City AS City, P.Street AS Street, P.Build AS Build,
          P.Appartment AS Appartment, P.Photo AS Photo, P.Phone AS Phone FROM dbo.Patients AS P  INNER JOIN dbo.USERS AS U 
          ON U.ID_Patients=P.Id  WHERE U.ID=${req.body.ID}`)))
    }
    if (level[0][0].Role == 3) {
      return res.status(200).send(JSON.stringify(await sequelize.query(`SELECT D.Lastname AS Firstname, D.Name AS Name, 
          D.Fathername AS Lastname, D.Birthdate AS Birthdate, D.City AS City, D.Street AS Street, D.Build AS Build,
           D.Appartment AS Appartment, D.Photo AS Photo, D.Phone AS Phone  FROM dbo.Doctors AS D   INNER JOIN dbo.USERS AS U 
           ON U.ID_Staff=D.Id WHERE U.ID =${req.body.ID}`)))
    }
  } else {
    res.status(404).send('"User doesnt has"')
  }
})

app.post('/time', async (req,res)=>{
  let decoded = jwtCheck(req, config.secret)
  if (decoded) {
    return res.status(201).send(JSON.stringify(await Reseptions.findAll()))
  }
})

app.post('/addprescription', async (req,res)=>{
  let decoded = jwtCheck(req, config.secret)
  if (decoded) {
    let month=req.body.Month<10?('0'+req.body.Month):req.body.Month
    let day=  req.body.Day<10?('0'+req.body.Day):req.body.Day
    let date=`2020-${month}-${day}`
    return res.status(201).send(JSON.stringify(await Reseptions.create({ID_D: req.body.ID_D, ID_P: req.body.ID_P, Date: date, Time: req.body.Time})))

    //  return res.status(201).send(JSON.stringify(await sequelize.query(`INSERT INTO dbo.Reseptions(ID_D, ID_P, Date, Time)
      // VALUES (${req.body.ID_D}, ${req.body.ID_P}, '2020-${req.body.Month}-${req.body.Day}', '${req.body.Time}')`)))
  }
})


const fr = require("fs");

app.get('/main', async (req, res) => {
  let first = fr.readFileSync("article/coronavirus.txt", "UTF8")
  let second = fr.readFileSync("article/new_virus.txt", "UTF8")
  let third = fr.readFileSync("article/protection.txt", "UTF8")

  await res.status(200).send(JSON.stringify([first, second, third]))
})

app.post('/regirstration', async (req, res) => {
  //так тоже можно, но здесь SQL возвращает количество созданных позиций
  // res.status(201).send(JSON.stringify(await sequelize.query(`INSERT INTO USERS(Login, Password, Role) VALUES ('${req.body.Login}', '${req.body.Password}', 4)`)))
  let user = await User.create({ Login: req.body.Login, Password: req.body.Password, Role: 4 })
  let ur = jwt.sign({ sub: user.ID }, config.secret)
  res.status(201).send(JSON.stringify({ token: ur, Login: user.Login, ID: user.ID }))

})




sequelize.sync()
  .then(result => {
    console.log("/////////////////////Every is ok!")
  })
  .catch(err => console.log(err));

const port = "4000"
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

///////////////////  

//   const mssql = require("mssql");

// const connection = mssql.createConnection({
//   host: "localhost",
//   user: "Seller",
//   database: "hospital",
//   password: "1234561"
// });

// connection.query("SELECT * FROM USERS",
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // собственно данные
//     console.log(fields); // мета-данные полей 
// });
// connection.end();

  // const User = sequelize2.define("USER", {
  //   ID: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true,
  //     allowNull: false
  //   },
  //   Login: {
  //     type: Sequelize.STRING,
  //     allowNull: false
  //   },
  //   Password: {
  //       type: Sequelize.STRING,
  //       allowNull: false
  //     },
  //   Role: {
  //     type: Sequelize.INTEGER,
  //     foreignKey:true,
  //     allowNull: false
  //   }
  // });

// sequelize.sync()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.log(err));


/////////////////////////////

// const sequelize = new Sequelize('mysql://Натали-ПК@localhost/hospital')

// class User extends Sequelize.Model {
//     get name() {

//     }
// }

// User.init({
//     ID: Sequelize.INTEGER,
//     Login: Sequelize.STRING,
//     Password: Sequelize.STRING,
//     Role: Sequelize.INTEGER
// }, { sequelize, modelName: 'user' });


// class Post extends Sequelize.Model {
//     get commentCount() {
//         return this.getComments().then(comments => comments.length)
//     }
//     get user() {
//         return this.getUser()
//     }
// }
// //вот так мы прописали связи
// // User.hasMany(Post)
// // Post.belongsTo(User)

// console.log(User.prototype, Post.prototype)
// class Tag extends Sequelize.Model { }
// Tag.init({
//     text: Sequelize.STRING
// }, { sequelize, modelName: 'tag' })


//     //добавили нового юзера



//     // sequelize.sync()
//     //     .then(result => {
//     //     console.log(result); console.log("this is get ready to connection");
//     // })
//     //     .catch(err => console.log(err));

//     // Post.belongsToMany(Tag, {through: 'post2tag'});
//     ; (async () => {
//         await sequelize.sync()
//         let john = await User.create({ Login: 'John', Password: '123', Role: '1' })
//         let Johh = await User.findOne({ where: {} })
//         console.log(Johh)

//             .then(result => {
//                 console.log(result); console.log("this is get ready to connection");
//             })
//             .catch(err => console.log(err));
//     })


