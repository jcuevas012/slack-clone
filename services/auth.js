import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'

export const createTokens = async (user, secret, secret2) => {
  try {
    const createToken = jwt.sign(
      {
        user: _.pick(user, ['id'])
      },
      secret,
      {
        expiresIn: '1h'
      }
    )

    const createRefreshToken = jwt.sign(
      {
        user: _.pick(user, 'id')
      },
      secret2,
      {
        expiresIn: '7d'
      }
    )

    return [createToken, createRefreshToken]
  } catch (err) {
    throw Error(err.message)
  }
}

export const refreshTokens = async (
  token,
  refreshToken,
  models,
  SECRET,
  SECRET2
) => {
  let userId = 0
  try {
    const {
      user: { id }
    } = jwt.decode(refreshToken)
    userId = id
  } catch (err) {
    return {}
  }

  if (!userId) {
    return {}
  }

  const user = await models.User.findOne({ where: { id: userId }, raw: true })

  if (!user) {
    return {}
  }

  const refreshSecret = user.password + SECRET2

  try {
    jwt.verify(refreshToken, refreshSecret)
  } catch (err) {
    return {}
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    user.refreshSecret
  )
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user
  }
}

export const tryLogin = async (email, password, models, SECRET, SECRET2) => {
  try {
    const user = await models.User.findOne({ where: { email }, raw: true })
    if (!user) {
      // user with provided email not found
      return {
        code: 404,
        message: 'Something went wrong',
        success: false,
        errors: [{ path: 'email', message: 'Wrong email' }]
      }
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      // bad password
      return {
        code: 404,
        message: 'Something went wrong',
        success: false,
        errors: [{ path: 'password', message: 'Wrong password' }]
      }
    }

    const refreshTokenSecret = user.password + SECRET2
    const [token, refreshToken] = await createTokens(
      user,
      SECRET,
      refreshTokenSecret
    )

    return {
      code: 200,
      errors: [],
      success: true,
      message: 'Login Success!',
      token,
      refreshToken
    }
  } catch (err) {
    return {
      code: 500,
      errors: [],
      success: false,
      message: `something went wrong!, ${err.message} `
    }
  }
}
