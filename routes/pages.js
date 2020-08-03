const {
  home,
  about,
  contact,
  thing,
} = require("../controllers/PagesController");

module.exports = (router) => {
  router.get("/", home);
  router.get("/about", about);
  router.get("/contact", contact);
};
