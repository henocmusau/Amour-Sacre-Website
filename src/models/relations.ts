import mainDB from "./";
import { Member } from "./member";
import { Category } from "./categories";
import { Cotisation } from "./cotisations";
import { Incoming } from "./incoming";
import { Outgoing } from "./outgoing";
import { News } from "./news";


// Category.hasMany(Member)
// Member.belongsTo(Category)

Member.hasMany(Cotisation)
Cotisation.belongsTo(Member)

// mainDB.sync({ force: true })


export { Member, Category, Cotisation, Incoming, Outgoing, News }