const Word = require('../models/word.model');
const User = require('../models/user.model');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const { encryptString } = require('../utils/rsa')

exports.addWord = async (id, wordId) => {
  try {
    const word = await Word.findById(wordId).lean();
    if (!word) {
      return {
        message: 'Word not found',
        statusCode: httpStatus.NOT_FOUND,
      };
    }
    await User.updateOne({ _id: id }, { $push: { words: word._id } })
  } catch (error) {
    return error;
  }
};

exports.updateUser = async (id, body, user) => {
  try {
    //----------------------------

    const { name = encryptString(user.name), city = encryptString(user.city) || "", phone = encryptString(user.phone) || "", password } = body;
    if (password && password.trim()) {
      const hashPassword = await bcrypt.hash(password, 10);
      return await User.updateOne({ _id: id }, { name, city, phone, password: hashPassword });
    }
    return await User.updateOne({ _id: id }, { name, city, phone });
  } catch (error) {
    return error;
  }
}