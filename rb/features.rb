# SxpVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SxpVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      SxpVpnBaseFeature.new
    when "test"
      SxpVpnTestFeature.new
    else
      SxpVpnBaseFeature.new
    end
  end
end
