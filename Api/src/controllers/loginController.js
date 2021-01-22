import { response } from 'express'
import jwt from 'jsonwebtoken'
import { authenticate } from '../services/userService'

export const loginValidation = (login, password, res) => {

  authenticate(login, password)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.status(401).send(error.message)
    });
}

export const tokenVerify = (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })
  jwt.verify(token, 'keyTest', function (err, decoded) {
    if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' })

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id
    //console.log(req.userId)
    next()
  })
}