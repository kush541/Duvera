const { Category } = require('../model/Category');
const { User } = require('../model/User');

exports.fetchUserById = async (req, res) => {
  console.log("aai")
  const { id } = req.user;
  console.log("id",id)
  try {
    const user = await User.findById(id);
    res.status(200).json({id:user.id,addresses:user.addresses,email:user.email,role:user.role,selectedCategories:user.selectedCategories});
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    user.save()
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

// exports.updateUserCat = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
