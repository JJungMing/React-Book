import type {Jwt, JwtPayload, SignOptions, VerifyOptions} from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

const secret = 'Very important secret'

export const jwtSignP = (payload: string | Buffer | object, options: SignOptions = {}) =>
  new Promise<string>((resolve, reject) => {
    try {
      const jwtT = jwt.sign(payload, secret, options)
      resolve(jwtT)
    } catch (e) {
      reject(e)
    }
  })

export const jwtVerifyP = (token: string, options: VerifyOptions = {}) =>
  new Promise<Jwt | JwtPayload | string>((resolve, reject) => {
    try {
      const decoded = jwt.verify(token, secret, options)
      resolve(decoded)
    } catch (e) {
      reject(e)
    }
  })
