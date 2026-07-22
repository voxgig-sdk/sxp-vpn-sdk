-- SxpVpn SDK error

local SxpVpnError = {}
SxpVpnError.__index = SxpVpnError


function SxpVpnError.new(code, msg, ctx)
  local self = setmetatable({}, SxpVpnError)
  self.is_sdk_error = true
  self.sdk = "SxpVpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SxpVpnError:error()
  return self.msg
end


function SxpVpnError:__tostring()
  return self.msg
end


return SxpVpnError
