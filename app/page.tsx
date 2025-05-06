import Link from "next/link"
import { Search } from "lucide-react"
import StatCard from "@/components/stat-card"
import RecentMatches from "@/components/recent-matches"
import RankDisplay from "@/components/rank-display"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-900 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-green-400">LLY</span> Rocket League Tracker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Track your stats, analyze your gameplay, and climb the ranks with the most comprehensive Rocket League
              stats tracker.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-md relative">
              <input
                type="text"
                placeholder="Search player by username..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
              <button className="absolute right-3 top-3 text-green-400">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Player */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-400 pl-3">Featured Player</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Player Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-green-400">SquishedMelon</h3>
                <p className="text-gray-400 mb-4">Platform: Steam • Region: Europe</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <RankDisplay mode="3v3" rank="Champion II" division="III" />
                  <RankDisplay mode="2v2" rank="Diamond III" division="IV" />
                  <RankDisplay mode="1v1" rank="Platinum II" division="I" />
                </div>
                <Link
                  href="/player/squishedmelon"
                  className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-400 pl-3">Quick Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Matches Played" value="1,248" icon="activity" change="+12" />
            <StatCard title="Win Rate" value="58.3%" icon="pie-chart" change="+0.5%" />
            <StatCard title="Goals per Match" value="1.7" icon="target" change="-0.2" />
            <StatCard title="MVP Awards" value="217" icon="award" change="+3" />
          </div>
        </div>

        {/* Recent Matches */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-400 pl-3">Recent Matches</h2>
          <RecentMatches />
        </div>

        {/* Leaderboard Preview */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold border-l-4 border-green-400 pl-3">Top Players</h2>
            <Link href="/leaderboards" className="text-green-400 hover:text-green-300">
              View All Rankings →
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-3 text-left">Rank</th>
                  <th className="px-4 py-3 text-left">Player</th>
                  <th className="px-4 py-3 text-left">MMR</th>
                  <th className="px-4 py-3 text-left hidden md:table-cell">Win Rate</th>
                  <th className="px-4 py-3 text-left hidden lg:table-cell">Region</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "RLCS_Champion", mmr: 2345, winRate: "72.1%", region: "NA" },
                  { rank: 2, name: "AerialMaster99", mmr: 2298, winRate: "68.5%", region: "EU" },
                  { rank: 3, name: "FlipReset_King", mmr: 2276, winRate: "67.2%", region: "OCE" },
                  { rank: 4, name: "GoalExplosion", mmr: 2241, winRate: "65.9%", region: "NA" },
                  { rank: 5, name: "ShadowDefender", mmr: 2210, winRate: "64.3%", region: "EU" },
                ].map((player) => (
                  <tr key={player.rank} className="border-t border-gray-700 hover:bg-gray-700">
                    <td className="px-4 py-3">#{player.rank}</td>
                    <td className="px-4 py-3 font-medium text-green-400">{player.name}</td>
                    <td className="px-4 py-3">{player.mmr}</td>
                    <td className="px-4 py-3 hidden md:table-cell">{player.winRate}</td>
                    <td className="px-4 py-3 hidden lg:table-cell">{player.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
