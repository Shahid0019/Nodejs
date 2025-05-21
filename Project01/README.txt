// Schema
// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   jobTitle: {
//     type: String,
//   },
//   gender: {
//     type: String,
//   },
// });

// app.use((req, res , next )=>{
//   console.log("middlware 1")
//   return next()
// })
// app.use((req, res , next )=>{
//   console.log('hello second')
//   res.json("middlware 2")
// })
//Routes
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
<ul>${allDbUsers
    .map((user) => `<li>${user.firstName} ${user.lastName}</li>`)
    .join("")}</ul>
`;
 res.send(html)
});
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // const id = Number(req.params.id);
    const user = await User.findById(req.params.id)
    // const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    let user = users.find((user) => user.id === id);
    const updates = req.body;
    if (!user) {
      return res.status(404).json("User not found");
    }
    Object.assign(user, updates);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
      if (error) {
        return res.status(500).json("Something went wrong");
      } else {
        return res.status(200).json("User updated successfully");
      }
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    let user = users.find((user) => user.id === id);
    if (!user) {
      return res.json("User not found");
    }
    const userUpdate = users.filter((singleUser) => singleUser.id !== user.id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(userUpdate), (error) => {
      if (error) {
        return res.status(500).json("something went wrong");
      } else {
        return res.status(200).json("successfull deleted");
      }
    });
  });
// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }
//   const updatedUsers = users.filter((singleUser) => singleUser.id !== user.id);
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers), (error) => {
//     if (error) {
//       return res.status(500).json({ error: "Something went wrong" });
//     } else {
//       return res.status(200).json({ message: "Successfully deleted user" });
//     }
//   });
// });

app.post("/api/users", async (req, res) => {
  // TODO: Create a new user
  // const body = req.body;
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "success", users });
  // });
  // Creating post req with mongoose
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const result = await user.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  return res.status(201).json({ msg: "success" });
});

// For Understanding purposes only, not to be used in production

// app.patch("/api/users/:id", (req, res) => {
//   //TODO:Edit the user with id
//   return res.json({status:"pending"})
// })
// app.delete("/api/users/:id", (req, res) => {
//   //TODO:Delete the user with id
//   return res.json({status:"pending"})
// })

router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
// <ul>${allDbUsers
//     .map((user) => `<li>${user.firstName} ${user.lastName}</li>`)
//     .join("")}</ul>
// `;
//   res.send(html);
// });
// router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
//   return res.json(allDbUsers);
// });

// router
//   .route("/:id")
//   .get(async (req, res) => {
//     // const id = Number(req.params.id);
//     const user = await User.findById(req.params.id);
//     // const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     const id = Number(req.params.id);
//     let user = users.find((user) => user.id === id);
//     const updates = req.body;
//     if (!user) {
//       return res.status(404).json("User not found");
//     }
//     Object.assign(user, updates);
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
//       if (error) {
//         return res.status(500).json("Something went wrong");
//       } else {
//         return res.status(200).json("User updated successfully");
//       }
//     });
//   })
//   .delete((req, res) => {
//     const id = Number(req.params.id);
//     let user = users.find((user) => user.id === id);
//     if (!user) {
//       return res.json("User not found");
//     }
//     const userUpdate = users.filter((singleUser) => singleUser.id !== user.id);
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(userUpdate), (error) => {
//       if (error) {
//         return res.status(500).json("something went wrong");
//       } else {
//         return res.status(200).json("successfull deleted");
//       }
//     });
//   });
// // app.delete("/api/users/:id", (req, res) => {
// //   const id = Number(req.params.id);
// //   const user = users.find((user) => user.id === id);
// //   if (!user) {
// //     return res.status(404).json({ error: "User not found" });
// //   }
// //   const updatedUsers = users.filter((singleUser) => singleUser.id !== user.id);
// //   fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers), (error) => {
// //     if (error) {
// //       return res.status(500).json({ error: "Something went wrong" });
// //     } else {
// //       return res.status(200).json({ message: "Successfully deleted user" });
// //     }
// //   });
// // });

// router.post("/", async (req, res) => {
//   // TODO: Create a new user
//   // const body = req.body;
//   // users.push({ ...body, id: users.length + 1 });
//   // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//   //   return res.json({ status: "success", users });
//   // });
//   // Creating post req with mongoose
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.jobTitle
//   ) {
//     return res.status(400).json({ msg: "All fields are required" });
//   }
//   const result = await user.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     jobTitle: body.jobTitle,
//   });
//   return res.status(201).json({ msg: "success" });
// });