# SxpVpn SDK utility: prepare_body
module SxpVpnUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
