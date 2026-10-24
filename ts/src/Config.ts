
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'SxpVpn',
        slug: "sxp-vpn",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://adminvpn.s-xprem.com/sxpVPN/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        server: {
        },
  
    }
  }


  entity = {
    "server": {
      "fields": [
        {
          "name": "country",
          "title": "Country",
          "type": "`$STRING`",
          "short": "Country where the server is located"
        },
        {
          "name": "host",
          "title": "Host",
          "type": "`$STRING`",
          "short": "Server hostname or IP address"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the server"
        },
        {
          "name": "load",
          "title": "Load",
          "type": "`$NUMBER`",
          "short": "Server load percentage"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Server name or location"
        },
        {
          "name": "port",
          "title": "Port",
          "type": "`$INTEGER`",
          "short": "Connection port"
        },
        {
          "name": "protocol",
          "title": "Protocol",
          "type": "`$STRING`",
          "short": "VPN protocol used"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Server status (active, inactive, maintenance)"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "server",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api1.php",
              "segments": [
                {
                  "lit": "api1.php"
                }
              ],
              "parts": [
                "api1.php"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.servers`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

