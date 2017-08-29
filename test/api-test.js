import test from 'ava'
import micro, { send } from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import uuid from 'uuid-base62'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})

test('GET /:id', async t => {
  let id = uuid.v4()

  let srv = micro(async (req, res) => {
    send(res, 200, { id })
  })

  let url = await listen(srv)
  let body = await request({ uri: url, json: true })
  t.deepEqual(body, { id })
})
