import { ArrowLeft, User, BarChart2, Clock, Award, Shield } from "lucide-react"
import Link from "next/link"
import StatCard from "@/components/stat-card"
import RecentMatches from "@/components/recent-matches"
import RankDisplay from "@/components/rank-display"

interface PlayerPageProps {
  params: {
    username: string
  }
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const { username } = params
  const decodedUsername = decodeURIComponent(username)

  // In a real app, you would fetch player data based on the username
  // For now, we'll use mock data
  const playerData = {
    username: decodedUsername,
    platform: "Steam",
    region: "Europe",
    totalMatches: 1248,
    winRate: "58.3%",
    goalsPerMatch: 1.7,
    mvpAwards: 217,
    ranks: [
      { mode: "3v3", rank: "Champion II", division: "III" },
      { mode: "2v2", rank: "Diamond III", division: "IV" },
      { mode: "1v1", rank: "Platinum II", division: "I" },
      { mode: "Rumble", rank: "Champion I", division: "II" },
      { mode: "Dropshot", rank: "Diamond I", division: "III" },
      { mode: "Hoops", rank: "Diamond II", division: "I" },
    ],
    stats: {
      goals: 2124,
      assists: 1056,
      saves: 1892,
      shots: 4235,
      wins: 728,
      mvps: 217,
      totalXP: 2456789,
    },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        {/* Player Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
              <img
                src="/placeholder.svg?height=128&width=128"
                alt={`${playerData.username}'s Avatar`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl font-bold text-green-400">{playerData.username}</h1>
              <p className="text-gray-400 mb-4">
                Platform: {playerData.platform} • Region: {playerData.region}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <User size={14} className="mr-1 text-green-400" />
                  <span>Level 345</span>
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <BarChart2 size={14} className="mr-1 text-green-400" />
                  <span>{playerData.totalMatches} Matches</span>
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Clock size={14} className="mr-1 text-green-400" />
                  <span>1,245 Hours</span>
                </div>
                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Award size={14} className="mr-1 text-green-400" />
                  <span>{playerData.mvpAwards} MVPs</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {playerData.ranks.slice(0, 3).map((rank, index) => (
                  <RankDisplay key={index} mode={rank.mode} rank={rank.rank} division={rank.division} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-400 pl-3">Player Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Matches Played" value={playerData.totalMatches.toString()} icon="activity" change="+12" />
            <StatCard title="Win Rate" value={playerData.winRate} icon="pie-chart" change="+0.5%" />
            <StatCard title="Goals per Match" value={playerData.goalsPerMatch.toString()} icon="target" change="-0.2" />
            <StatCard title="MVP Awards" value={playerData.mvpAwards.toString()} icon="award" change="+3" />
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-green-400" />
              All Ranks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {playerData.ranks.map((rank, index) => (
                <RankDisplay key={index} mode={rank.mode} rank={rank.rank} division={rank.division} />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BarChart2 className="mr-2 text-green-400" />
              Career Stats
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.entries(playerData.stats).map(([key, value]) => (
                <div key={key} className="bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                  <p className="text-xl font-bold">{value.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-400 pl-3">Recent Matches</h2>
          <RecentMatches />
        </div>
      </div>
    </div>
  )
}
