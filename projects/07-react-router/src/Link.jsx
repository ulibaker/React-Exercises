/* eslint-disable react/prop-types */
import { BUTTONS, EVENTS } from './const.js'

export function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = () => {

        const isMainEvent = event.button === BUTTONS.PRIMARY
        const isModEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
        
        if(isMainEvent && isManageableEvent && !isModEvent) {
            event.preventDefault()
            navigate(to)
        }


    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}