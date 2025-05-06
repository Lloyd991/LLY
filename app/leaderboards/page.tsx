import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Trophy, Globe, Users } from "lucide-react"

export default function LeaderboardsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gradient-to-b from-green-900 to-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-green-400">Rocket League</span> Leaderboards
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See who's at the top of their game. Track the best players across different regions and playlists.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search players..."
                className="w-full bg-gray-700 border-gray-600 focus:border-green-500 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="flex gap-2">
              <select className="bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Regions</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Oceania</option>
                <option>Asia</option>
              </select>
              <select className="bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Platforms</option>
                <option>Steam</option>
                <option>Epic Games</option>
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo Switch</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="standard" className="mb-8">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="standard" className="data-[state=active]:bg-green-600">
              <Trophy className="mr-2 h-4 w-4" />
              Standard
            </TabsTrigger>
            <TabsTrigger value="extra" className="data-[state=active]:bg-green-600">
              <Users className="mr-2 h-4 w-4" />
              Extra Modes
            </TabsTrigger>
            <TabsTrigger value="global" className="data-[state=active]:bg-green-600">
              <Globe className="mr-2 h-4 w-4" />
              Global XP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["3v3 Standard", "2v2 Doubles", "1v1 Duel"].map((mode) => (
                <div key={mode} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gray-700 px-4 py-3 font-semibold flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-green-400" />
                    {mode}
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700/50">
                        <th className="px-4 py-2 text-left">#</th>
                        <th className="px-4 py-2 text-left">Player</th>
                        <th className="px-4 py-2 text-right">MMR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-700">
                          <td className="px-4 py-3 text-gray-400">{index + 1}</td>
                          <td className="px-4 py-3 font-medium text-green-400">
                            {
                              [
                                "RLCS_Champion",
                                "AerialMaster99",
                                "FlipReset_King",
                                "GoalExplosion",
                                "ShadowDefender",
                                "RocketPower",
                                "AirDribble",
                                "DemolitionExpert",
                                "PinchShot",
                                "WaveDasher",
                              ][index]
                            }
                          </td>
                          <td className="px-4 py-3 text-right">{2345 - index * 15}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-4 py-3 bg-gray-700/30 text-center">
                    <a href="#" className="text-green-400 hover:text-green-300 text-sm">
                      View Full Leaderboard →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extra" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Rumble", "Dropshot", "Hoops"].map((mode) => (
                <div key={mode} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gray-700 px-4 py-3 font-semibold flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-green-400" />
                    {mode}
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700/50">
                        <th className="px-4 py-2 text-left">#</th>
                        <th className="px-4 py-2 text-left">Player</th>
                        <th className="px-4 py-2 text-right">MMR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-700">
                          <td className="px-4 py-3 text-gray-400">{index + 1}</td>
                          <td className="px-4 py-3 font-medium text-green-400">
                            {
                              [
                                "RumbleMaster",
                                "DropKing",
                                "HoopsDreams",
                                "PowerupPro",
                                "SnowDayChamp",
                                "ExtraModeGod",
                                "RumbleQueen",
                                "SpikeRush",
                                "FreezeTag",
                                "PunchMaster",
                              ][index]
                            }
                          </td>
                          <td className="px-4 py-3 text-right">{2245 - index * 12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-4 py-3 bg-gray-700/30 text-center">
                    <a href="#" className="text-green-400 hover:text-green-300 text-sm">
                      View Full Leaderboard →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="global" className="mt-0">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-700 px-4 py-3 font-semibold flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-green-400" />
                Global XP Leaderboard
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700/50">
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Player</th>
                    <th className="px-4 py-2 text-center hidden md:table-cell">Level</th>
                    <th className="px-4 py-2 text-center hidden md:table-cell">Platform</th>
                    <th className="px-4 py-2 text-center hidden lg:table-cell">Region</th>
                    <th className="px-4 py-2 text-right">XP</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 15 }).map((_, index) => (
                    <tr key={index} className="border-t border-gray-700 hover:bg-gray-700">
                      <td className="px-4 py-3 text-gray-400">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-green-400">
                        {
                          [
                            "XPGrinder",
                            "LevelMaster",
                            "RocketVeteran",
                            "SeasonalPro",
                            "CasualKing",
                            "PlayAllDay",
                            "NoLifeRL",
                            "RocketAddict",
                            "GrindKing",
                            "XPFarmer",
                            "LevelUp",
                            "RocketMaster",
                            "PlayTime",
                            "DailyDriver",
                            "RLLegend",
                          ][index]
                        }
                      </td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">{2500 - index * 75}</td>
                      <td className="px-4 py-3 text-center hidden md:table-cell">
                        {["Steam", "Epic", "PlayStation", "Xbox", "Switch"][index % 5]}
                      </td>
                      <td className="px-4 py-3 text-center hidden lg:table-cell">
                        {["NA", "EU", "OCE", "SAM", "ASIA"][index % 5]}
                      </td>
                      <td className="px-4 py-3 text-right">{(25000000 - index * 750000).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 bg-gray-700/30 text-center">
                <a href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Load More Players →
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
