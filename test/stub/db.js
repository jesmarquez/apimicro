'use strict'

import fixtures from '../fixtures/'

export default class Db {
  connect () {
    return Promise.resolve(true)
  }

  disconnect () {
    return Promise.resolve(true)
  }

  saveUser (user) {
    return Promise.resolve(fixtures.getUser())
  }

  getUser () {
    return Promise.resolve(fixtures.getUser())
  }

  getUsers () {
    return Promise.resolve(fixtures.getUsers())
  }

  authenticate () {
    return Promise.resolve(true)
  }
}
