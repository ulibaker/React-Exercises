import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const format = (userName) => `@${userName}`

    return (
        <section className='aside-cards'>
            <TwitterFollowCard 
                formatUserName={format} 
                initialIsFollowing={true}
                userName="ulibaker" 
            >
                Ulises Delgado
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={format} 
                userName="juan" 
            >
                Juan Perez
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={format} 
                userName="johndoe" 
            >
                John Doe
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={format} 
                userName="notchmc" 
            >
                Notch
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={format} 
            >
            </TwitterFollowCard>
        </section>
    )
}