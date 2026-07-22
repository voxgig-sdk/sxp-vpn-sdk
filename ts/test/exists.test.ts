
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SxpVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SxpVpnSDK.test()
    equal(null !== testsdk, true)
  })

})
