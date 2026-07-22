package core

type SxpVpnError struct {
	IsSxpVpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSxpVpnError(code string, msg string, ctx *Context) *SxpVpnError {
	return &SxpVpnError{
		IsSxpVpnError: true,
		Sdk:              "SxpVpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SxpVpnError) Error() string {
	return e.Msg
}
