export const validateTask = (req, res, next) => {
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ error: 'Title is required.' });
  }
  next();
};
