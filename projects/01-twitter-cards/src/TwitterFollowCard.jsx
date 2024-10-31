import { useState } from "react"
export function TwitterFollowCard ({ formatUserName, userName = 'unknown', children = userName, initialIsFollowing=false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    /* =
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/
    
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="Uli's Avatar" 
                    src={imageSrc}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-user'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Stop following</span>
                </button>
            </aside>
        </article>
    )
}