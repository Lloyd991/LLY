import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-green-400">LLY</span> Tracker
            </h3>
            <p className="text-gray-400 mb-4">
              The most comprehensive Rocket League stats tracker. Track your progress, analyze your gameplay, and climb
              the ranks.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://discord.com" className="text-gray-400 hover:text-white transition-colors">
                <Discord size={20} />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/stats" className="text-gray-400 hover:text-green-400 transition-colors">
                  Player Stats
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-gray-400 hover:text-green-400 transition-colors">
                  Match History
                </Link>
              </li>
              <li>
                <Link href="/leaderboards" className="text-gray-400 hover:text-green-400 transition-colors">
                  Leaderboards
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-400 hover:text-green-400 transition-colors">
                  Player Comparison
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-gray-400 hover:text-green-400 transition-colors">
                  Pro Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/api" className="text-gray-400 hover:text-green-400 transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-green-400 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-green-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LLY Tracker. All rights reserved.</p>
          <p className="mt-2">
            LLY Tracker is not affiliated with or endorsed by Psyonix, Inc. Rocket League is a registered trademark of
            Psyonix, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
