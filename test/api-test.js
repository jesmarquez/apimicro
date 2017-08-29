import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import uuid from 'uuid-base62'
import api from '../api'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})

test('GET /:id', async t => {
  let id = uuid.v4()

  let srv = micro(api)

  let url = await listen(srv)
  let body = await request({ uri: `${url}/${id}`, json: true })
  t.deepEqual(body, { id })
})

test.todo('POST /')
test.todo('POST /:id/like')
