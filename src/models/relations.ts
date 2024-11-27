import mainDB from "./";
// import { classModel } from "./classes";
import { Member } from "./member";
import { Category } from "./categories";
// import { Courses } from "./courses";
// import { Teachers } from "./teachers";

Category.hasMany(Member)
Member.belongsTo(Category)

// mainDB.sync({ force: true })

// export { classModel, Student, Courses, Teachers }
export { Member, Category }