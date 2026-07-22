# ProjectName SDK exists test

import pytest
from sxpvpn_sdk import SxpVpnSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SxpVpnSDK.test(None, None)
        assert testsdk is not None
