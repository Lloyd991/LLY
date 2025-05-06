import { ArrowUp, ArrowDown, Minus } from "lucide-react"

interface Match {
  id: number
  mode: string
  result: "win" | "loss" | "forfeit"
  score: string
  map: string
  date: string
  mmrChange: number
  stats: {
    goals: number
    assists: number
    saves: number
    shots: number
  }
}

export default function RecentMatches() {
  // Sample match data
  const matches: Match[] = [
    {
      id: 1,
      mode: "3v3 Competitive",
      result: "win",
      score: "5-2",
      map: "Champions Field",
      date: "2h ago",
      mmrChange: 9,
      stats: { goals: 2, assists: 1, saves: 3, shots: 5 },
    },
    {
      id: 2,
      mode: "2v2 Competitive",
      result: "loss",
      score: "1-3",
      map: "Neo Tokyo",
      date: "3h ago",
      mmrChange: -8,
      stats: { goals: 1, assists: 0, saves: 2, shots: 4 },
    },
    {
      id: 3,
      mode: "3v3 Competitive",
      result: "win",
      score: "4-3",
      map: "Urban Central",
      date: "5h ago",
      mmrChange: 10,
      stats: { goals: 2, assists: 1, saves: 1, shots: 3 },
    },
    {
      id: 4,
      mode: "1v1 Competitive",
      result: "forfeit",
      score: "3-0",
      map: "Mannfield",
      date: "6h ago",
      mmrChange: 12,
      stats: { goals: 3, assists: 0, saves: 1, shots: 6 },
    },
    {
      id: 5,
      mode: "3v3 Competitive",
      result: "loss",
      score: "2-4",
      map: "Wasteland",
      date: "8h ago",
      mmrChange: -9,
      stats: { goals: 1, assists: 1, saves: 2, shots: 3 },
    },
  ]

  // Helper function to get result styling
  const getResultStyle = (result: string) => {
    switch (result) {
      case "win":
        return { bg: "bg-green-900/30", text: "text-green-400", icon: <ArrowUp className="h-4 w-4 text-green-400" /> }
      case "loss":
        return { bg: "bg-red-900/30", text: "text-red-400", icon: <ArrowDown className="h-4 w-4 text-red-400" /> }
      case "forfeit":
        if (matches.find((m) => m.result === "forfeit")?.mmrChange! > 0) {
          return { bg: "bg-green-900/30", text: "text-green-400", icon: <ArrowUp className="h-4 w-4 text-green-400" /> }
        } else {
          return { bg: "bg-red-900/30", text: "text-red-400", icon: <ArrowDown className="h-4 w-4 text-red-400" /> }
        }
      default:
        return { bg: "bg-gray-800", text: "text-gray-400", icon: <Minus className="h-4 w-4 text-gray-400" /> }
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-3 text-left">Mode</th>
              <th className="px-4 py-3 text-left">Result</th>
              <th className="px-4 py-3 text-left">Map</th>
              <th className="px-4 py-3 text-center">Goals</th>
              <th className="px-4 py-3 text-center">Assists</th>
              <th className="px-4 py-3 text-center">Saves</th>
              <th className="px-4 py-3 text-center">Shots</th>
              <th className="px-4 py-3 text-right">MMR</th>
              <th className="px-4 py-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => {
              const resultStyle = getResultStyle(match.result)

              return (
                <tr key={match.id} className="border-t border-gray-700 hover:bg-gray-700">
                  <td className="px-4 py-3 font-medium">{match.mode}</td>
                  <td className="px-4 py-3">
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${resultStyle.bg} ${resultStyle.text}`}
                    >
                      <span className="capitalize">{match.result}</span>
                      <span className="ml-1 text-xs">{match.score}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{match.map}</td>
                  <td className="px-4 py-3 text-center">{match.stats.goals}</td>
                  <td className="px-4 py-3 text-center">{match.stats.assists}</td>
                  <td className="px-4 py-3 text-center">{match.stats.saves}</td>
                  <td className="px-4 py-3 text-center">{match.stats.shots}</td>
                  <td className="px-4 py-3 text-right flex items-center justify-end">
                    {resultStyle.icon}
                    <span className={`ml-1 ${resultStyle.text}`}>
                      {match.mmrChange > 0 ? `+${match.mmrChange}` : match.mmrChange}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-400">{match.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
