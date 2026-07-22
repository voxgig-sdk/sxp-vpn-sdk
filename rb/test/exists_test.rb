# SxpVpn SDK exists test

require "minitest/autorun"
require_relative "../SxpVpn_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = SxpVpnSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
