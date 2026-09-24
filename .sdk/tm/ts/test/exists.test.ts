
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SxpVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SxpVpnSDK.test()
    equal(testsdk instanceof SxpVpnSDK, true,
      'SxpVpnSDK.test() must return a client synchronously')
  })

})
