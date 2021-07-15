const wordService = require('../services/word.service');
const Word = require('../../models/word.model')

exports.index = async (req, res, next) => {
  try {
    const { query } = req.query;
    const words = await wordService.getAll(query);
    res.render('admin/word/index', { words, query });
  } catch (error) {
    next(error);
  }
};

exports.addNewWord = async (req, res, next) => {
  try {
    const word = req.body.word
    const duplicateWord = await Word.findOne({word}).lean()
    if (duplicateEmail) {
      return {
        message: 'This word has been taken',
        statusCode: httpStatus.BAD_REQUEST,
      };
    } else {
      await wordService.addNewWord(req.body)
    }
    res.redirect('back')
  } catch (error) {
    next(error)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params
    await wordService.delete(id)
    res.redirect('back')
  } catch (error) {
    next(error)
  }
}

exports.getDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const word = await wordService.getOne(id);

    res.render('admin/word/update', { word });
  } catch (error) {
    next(error);
  }
}

exports.updateWord = async (req, res, next) => {
  try {
    const { id } = req.params;
    await wordService.updateWord(id, req.body);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

exports.deleteMean = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { meanId } = req.params;
    await wordService.deleteMean(id, meanId);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}