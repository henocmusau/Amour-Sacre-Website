import mainDB from "./";
// import { classModel } from "./classes";
import { Member } from "./member";
// import { Courses } from "./courses";
// import { Teachers } from "./teachers";

// classModel.hasMany(Student)
// Student.belongsTo(classModel)

mainDB.sync({ alter: true })

// export { classModel, Student, Courses, Teachers }
export {Member}