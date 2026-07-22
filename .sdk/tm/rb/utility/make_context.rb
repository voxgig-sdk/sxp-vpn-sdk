# SxpVpn SDK utility: make_context
require_relative '../core/context'
module SxpVpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    SxpVpnContext.new(ctxmap, basectx)
  }
end
