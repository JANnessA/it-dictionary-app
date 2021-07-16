const User = require('../../models/user.model');
const { encryptString } = require('../../utils/rsa');

exports.getAll = async (option) => {
  try {
    if (option) {
      let encryptOption = encryptString(option);
      return await User.find({
        name: { $regex: encryptOption, $options: 'i' }, 
      }).lean();
    } else {
      return await User.find().populate('means').lean();
    }
  } catch (error) {
    return error;
  }
};

exports.delete = async (id) => {
  try {
    await User.deleteOne({ _id: id });
  } catch (error) {
    return error;
  }
};

exports.removeWord = async (id, wordId) => {
  try {
    await User.updateOne({ _id: id }, { $pull: { words: wordId } });
  } catch (error) {
    return error;
  }
};

exports.getOne = async (id) => {
  try {
    return await User.findById(id)
      .populate({ path: 'words', populate: { path: 'means' } })
      .lean();
  } catch (error) {
    return error;
  }
};

exports.updateUser = async (id, body) => {
  try {
    const { name, city, phone } = body;
    return await User.updateOne({ _id: id }, { name, city, phone });
  } catch (error) {
    return error;
  }
};
