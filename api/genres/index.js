import express from 'express';

import {
  getGenres, getGenre
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getGenre(id).then(genre => res.status(200).send(genre))
  .catch((error) => next(error));
});

export default router;