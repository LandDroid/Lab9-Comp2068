const {
  new: _new,
  index,
  show,
  create,
  edit,
  update,
  delete: _delete,
} = require("../controllers/BlogsController");

// Step 1: Write an authentication function to identify if a request is authenticated

function auth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ message: "You must authenticate before using this API call" });
  }
  next();
}

// Step 2: Add the authentication function to all the routes below

module.exports = (router) => {
  router.get("/blogs", index);
  router.get("/blogs/new", auth, _new);
  router.post("/blogs", auth, create);
  router.post("/blogs/update", auth, update);
  router.post("/blogs/delete", auth, _delete);
  router.get("/blogs/:id/edit", auth, edit);
  router.get("/blogs/:id", show);
};
