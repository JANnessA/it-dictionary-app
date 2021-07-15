const Word = require('../models/word.model');

exports.getAll = async (options, limit = 100) => {
  try {
    return await Word.find(options).populate('means').limit(limit).lean();
  } catch (error) {
    return error;
  }
};