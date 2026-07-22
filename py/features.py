# SxpVpn SDK feature factory

from feature.base_feature import SxpVpnBaseFeature
from feature.test_feature import SxpVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SxpVpnBaseFeature(),
        "test": lambda: SxpVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
