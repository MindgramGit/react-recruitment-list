import * as React from "react"

export enum Device {
    Mobile,
    Desktop,
}

// When changed update GTM values for surveys
export const mobileWidth = 800
export const tabletWidth = 1024
const mediaQuery = `(max-width: ${mobileWidth}px)`

export const isMobile = (d: Device): d is Device.Mobile => d === Device.Mobile

const getDevice = (mql: MediaQueryList): Device => {
    const isMobile = mql.matches
    if (isMobile) return Device.Mobile
    else return Device.Desktop
}

export const useDevice = () => {
    const mql = React.useMemo(() => window.matchMedia(mediaQuery), [])
    const [device, setDevice] = React.useState<Device>(getDevice(mql))
    const matchMediaChangeHandler = React.useCallback(() => {
        setDevice(getDevice(mql))
    }, [mql])

    React.useEffect(() => {
        if (mql) {
            if (mql.addEventListener) {
                mql.addEventListener("change", matchMediaChangeHandler)

                return () => mql.removeEventListener("change", matchMediaChangeHandler)
            } else {
                mql.addListener(matchMediaChangeHandler)

                return () => mql.removeListener(matchMediaChangeHandler)
            }
        }
    }, [matchMediaChangeHandler, mql])

    return device
}


