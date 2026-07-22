// Typed models for the SxpVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Server {
  country?: string
  host?: string
  id?: string
  load?: number
  name?: string
  port?: number
  protocol?: string
  status?: string
}

export interface ServerListMatch {
  country?: string
  host?: string
  id?: string
  load?: number
  name?: string
  port?: number
  protocol?: string
  status?: string
}

