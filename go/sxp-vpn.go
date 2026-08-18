package voxgigsxpvpnsdk

import (
	"github.com/voxgig-sdk/sxp-vpn-sdk/go/core"
	"github.com/voxgig-sdk/sxp-vpn-sdk/go/entity"
	"github.com/voxgig-sdk/sxp-vpn-sdk/go/feature"
	_ "github.com/voxgig-sdk/sxp-vpn-sdk/go/utility"
)

// Type aliases preserve external API.
type SxpVpnSDK = core.SxpVpnSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SxpVpnEntity = core.SxpVpnEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SxpVpnError = core.SxpVpnError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewServerEntityFunc = func(client *core.SxpVpnSDK, entopts map[string]any) core.SxpVpnEntity {
		return entity.NewServerEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSxpVpnSDK = core.NewSxpVpnSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewSxpVpnSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *SxpVpnSDK  { return NewSxpVpnSDK(nil) }
func Test() *SxpVpnSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
