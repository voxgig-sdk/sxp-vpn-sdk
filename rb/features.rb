# SxpVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SxpVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      SxpVpnBaseFeature.new
    when "ratelimit"
      SxpVpnRatelimitFeature.new
    when "retry"
      SxpVpnRetryFeature.new
    when "test"
      SxpVpnTestFeature.new
    when "timeout"
      SxpVpnTimeoutFeature.new
    else
      SxpVpnBaseFeature.new
    end
  end
end
