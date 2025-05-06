import { Activity, PieChart, Target, Award, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  icon: string
  change?: string
}

export default function StatCard({ title, value, icon, change }: StatCardProps) {
  // Determine if change is positive, negative, or neutral
  const isPositive = change && change.startsWith("+")
  const isNegative = change && change.startsWith("-")

  // Get the appropriate icon component
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "activity":
        return <Activity className="h-6 w-6 text-green-400" />
      case "pie-chart":
        return <PieChart className="h-6 w-6 text-green-400" />
      case "target":
        return <Target className="h-6 w-6 text-green-400" />
      case "award":
        return <Award className="h-6 w-6 text-green-400" />
      default:
        return <Activity className="h-6 w-6 text-green-400" />
    }
  }

  // Get the appropriate trend icon
  const getTrendIcon = (): JSX.Element => {
    if (isPositive) {
      return <TrendingUp className="h-4 w-4 text-green-400" />
    } else if (isNegative) {
      return <TrendingDown className="h-4 w-4 text-red-400" />
    } else {
      return <Minus className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-400">{title}</p>
            <p className="text-2xl font-bold mt-1 text-white">{value}</p>
          </div>
          <div className="p-2 rounded-full bg-gray-700">{getIcon()}</div>
        </div>

        {change && (
          <div className="flex items-center mt-4 text-sm">
            {getTrendIcon()}
            <span className={`ml-1 ${isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-gray-400"}`}>
              {change} since last week
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
