import { Shield, ShieldAlert, ShieldCheck, ShieldX, Award, Star } from "lucide-react"

interface RankDisplayProps {
  mode: string
  rank: string
  division: string
}

export default function RankDisplay({ mode, rank, division }: RankDisplayProps) {
  // Get the appropriate icon and color based on rank
  const getRankDetails = () => {
    const rankLower = rank.toLowerCase()

    if (rankLower.includes("bronze")) {
      return { icon: <Shield className="h-5 w-5" />, color: "bg-amber-700", textColor: "text-amber-700" }
    } else if (rankLower.includes("silver")) {
      return { icon: <Shield className="h-5 w-5" />, color: "bg-gray-400", textColor: "text-gray-400" }
    } else if (rankLower.includes("gold")) {
      return { icon: <ShieldCheck className="h-5 w-5" />, color: "bg-yellow-500", textColor: "text-yellow-500" }
    } else if (rankLower.includes("platinum")) {
      return { icon: <ShieldCheck className="h-5 w-5" />, color: "bg-cyan-500", textColor: "text-cyan-500" }
    } else if (rankLower.includes("diamond")) {
      return { icon: <ShieldAlert className="h-5 w-5" />, color: "bg-blue-500", textColor: "text-blue-500" }
    } else if (rankLower.includes("champion")) {
      return { icon: <ShieldX className="h-5 w-5" />, color: "bg-purple-500", textColor: "text-purple-500" }
    } else if (rankLower.includes("grand champion")) {
      return { icon: <Award className="h-5 w-5" />, color: "bg-red-500", textColor: "text-red-500" }
    } else if (rankLower.includes("supersonic legend")) {
      return { icon: <Star className="h-5 w-5" />, color: "bg-white", textColor: "text-white" }
    } else {
      return { icon: <Shield className="h-5 w-5" />, color: "bg-gray-500", textColor: "text-gray-500" }
    }
  }

  const { icon, color, textColor } = getRankDetails()

  return (
    <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
      <div className={`p-1.5 rounded-full ${color} mr-2`}>{icon}</div>
      <div>
        <p className="text-xs text-gray-400">{mode}</p>
        <p className={`font-medium ${textColor}`}>
          {rank} <span className="text-xs text-gray-400">Div {division}</span>
        </p>
      </div>
    </div>
  )
}
