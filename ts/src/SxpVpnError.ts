
import { Context } from './Context'


class SxpVpnError extends Error {

  isSxpVpnError = true

  sdk = 'SxpVpn'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SxpVpnError
}

