

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SxpVpnSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ServerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SXP_VPN_TEST_LIVE=TRUE.
  afterEach(liveDelay('SXP_VPN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SxpVpnSDK.test()
    const ent = testsdk.Server()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SXP_VPN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'server.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country where the server is located","t":"`$STRING`","key$":"country","index$":0},"host":{"a":true,"h":"Host","n":"host","r":false,"sh":"Server hostname or IP address","t":"`$STRING`","key$":"host","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the server","t":"`$STRING`","key$":"id","index$":2},"load":{"a":true,"h":"Load","n":"load","r":false,"sh":"Server load percentage","t":"`$NUMBER`","key$":"load","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Server name or location","t":"`$STRING`","key$":"name","index$":4},"port":{"a":true,"h":"Port","n":"port","r":false,"sh":"Connection port","t":"`$INTEGER`","key$":"port","index$":5},"protocol":{"a":true,"h":"Protocol","n":"protocol","r":false,"sh":"VPN protocol used","t":"`$STRING`","key$":"protocol","index$":6},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Server status (active, inactive, maintenance)","t":"`$STRING`","key$":"status","index$":7}},"id":{"field":"id","name":"id"},"name":"server","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api1.php","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api1.php","q":{},"r":{},"s":[{"lit":"api1.php"}],"t":{"req":"`reqdata`","res":"`body.servers`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"server","name__orig":"server","Name":"Server","name_":"server","name-":"server","NAME":"SERVER","index$":0}, {"active":true,"entity":"server","key$":"BasicServerFlow","kind":"basic","name":"BasicServerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"server_ref01"}}],"index$":0}]}, 'Server', {"GET /api1.php":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let server_ref01_data = Object.values(setup.data.existing.server)[0] as any

    // LIST
    const server_ref01_ent = client.Server()
    const server_ref01_match: any = {}

    const server_ref01_list = (await server_ref01_ent.list(server_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/server/ServerTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SxpVpnSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['server01','server02','server03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SXP_VPN_TEST_SERVER_ENTID': idmap,
    'SXP_VPN_TEST_LIVE': 'FALSE',
    'SXP_VPN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SXP_VPN_TEST_SERVER_ENTID']

  const live = 'TRUE' === env.SXP_VPN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SXP_VPN_TEST_SERVER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SxpVpnSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SXP_VPN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
