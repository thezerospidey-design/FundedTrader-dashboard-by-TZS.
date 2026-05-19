import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, ShieldCheck, DollarSign, Target } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { day: "Mon", balance: 10000 },
  { day: "Tue", balance: 10200 },
  { day: "Wed", balance: 10450 },
  { day: "Thu", balance: 10700 },
  { day: "Fri", balance: 11100 },
  { day: "Funded", balance: 11400 },
];

export default function FundedTraderJournal() {
  const [darkMode, setDarkMode] = useState(true);
  const [killSwitch, setKillSwitch] = useState(false);
  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen overflow-hidden transition-all duration-500`}>
      <div className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-yellow-500/10 via-black to-green-500/10" : "bg-gradient-to-br from-gray-100 via-white to-green-100"}`} />

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-4">
                FundedTrader-Dashboard by TZS
          </h1>

          <p className="dark:text-gray-300 text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional trading journal and funded account tracker designed for prop firm traders.
            Track your <span className="text-yellow-400 font-bold">profit target</span>,
            monitor <span className="text-green-400 font-bold">account growth</span>,
            and manage risk like a professional.
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-5 py-3 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            <button
              onClick={() => setKillSwitch(!killSwitch)}
              className="px-5 py-3 rounded-2xl bg-red-500 text-white font-bold hover:scale-105 transition"
            >
              {killSwitch ? "Trading Locked" : "Activate Kill Switch"}
            </button>
          </div>

          {killSwitch && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 bg-red-500/20 border border-red-500 rounded-3xl p-6 max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-red-400 mb-3">
                DONE FOR TODAY
              </h2>

              <p className="text-lg font-semibold">
                No overtrading. Protect your capital. Discipline builds funded traders.
              </p>

              <p className="mt-3 dark:text-gray-300 text-gray-700">
                A professional trader knows when to stop. Your edge comes from consistency, not revenge trading.
              </p>
            </motion.div>
          )}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-10 h-10 text-green-400" />
                  <span className="text-green-400 text-sm font-semibold">+14%</span>
                </div>
                <h2 className="dark:text-gray-400 text-gray-600 text-sm uppercase tracking-wider">Current Balance</h2>
                <p className="text-4xl font-bold mt-2">$11,400</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-10 h-10 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-semibold">Goal</span>
                </div>
                <h2 className="dark:text-gray-400 text-gray-600 text-sm uppercase tracking-wider">Profit Target</h2>
                <p className="text-4xl font-bold mt-2">$1,400</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <ShieldCheck className="w-10 h-10 text-red-400" />
                  <span className="text-red-400 text-sm font-semibold">Protected</span>
                </div>
                <h2 className="dark:text-gray-400 text-gray-600 text-sm uppercase tracking-wider">Daily Loss Limit</h2>
                <p className="text-4xl font-bold mt-2">4%</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-400" />
                  <span className="text-blue-400 text-sm font-semibold">Scaling</span>
                </div>
                <h2 className="dark:text-gray-400 text-gray-600 text-sm uppercase tracking-wider">Growth Rate</h2>
                <p className="text-4xl font-bold mt-2">1% Daily</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl h-full">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-3xl font-bold">Profit Growth Tracker</h2>
                    <p className="dark:text-gray-400 text-gray-600 mt-1">Track your funded account growth journey</p>
                  </div>
                  <div className="bg-green-500/20 px-4 py-2 rounded-full text-green-400 font-bold">
                    +14%
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={data}>
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="balance"
                      stroke="#22c55e"
                      strokeWidth={4}
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-8">
                  <div className="flex justify-between mb-2 text-sm dark:text-gray-400 text-gray-600">
                    <span>Target Completion</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-4 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Trading Rules</h2>

              <div className="space-y-5">
                <div className="bg-black/30 p-4 rounded-2xl border border-green-500/20">
                  <h3 className="text-green-400 font-bold text-lg">Risk Management</h3>
                  <p className="dark:text-gray-300 text-gray-700 mt-2">Maximum 2 trades per day. Stop trading after 2 losses.</p>
                </div>

                <div className="bg-black/30 p-4 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-yellow-400 font-bold text-lg">Gold Strategy</h3>
                  <p className="dark:text-gray-300 text-gray-700 mt-2">Target 120-130 pips with a 40 pip stop loss.</p>
                </div>

                <div className="bg-black/30 p-4 rounded-2xl border border-blue-500/20">
                  <h3 className="text-blue-400 font-bold text-lg">Reward Ratio</h3>
                  <p className="dark:text-gray-300 text-gray-700 mt-2">Maintain a consistent 1:2 or 1:3 risk reward ratio.</p>
                </div>

                <div className="bg-black/30 p-4 rounded-2xl border border-red-500/20">
                  <h3 className="text-red-400 font-bold text-lg">Discipline</h3>
                  <p className="dark:text-gray-300 text-gray-700 mt-2">Protect capital first. Avoid revenge trading and overtrading.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-8 overflow-x-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold">Professional Trading Journal</h2>
                <p className="dark:text-gray-400 text-gray-600 mt-1">Document every trade with precision</p>
              </div>

              <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full font-bold">
                LIVE TRACKER
              </div>
            </div>

            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left dark:text-gray-400 text-gray-600 uppercase text-sm tracking-wider">
                  <th className="p-4">Date</th>
                  <th className="p-4">Pair</th>
                  <th className="p-4">Lot Size</th>
                  <th className="p-4">Pips</th>
                  <th className="p-4">RR Ratio</th>
                  <th className="p-4">P/L</th>
                  <th className="p-4">Balance</th>
                  <th className="p-4">Execution Notes</th>
                </tr>
              </thead>

              <tbody>
                <tr className="dark:bg-white/5 bg-black/5 backdrop-blur-md rounded-2xl">
                  <td className="p-4">19 May 2026</td>
                  <td className="p-4 font-bold text-yellow-400">XAUUSD</td>
                  <td className="p-4">0.25</td>
                  <td className="p-4 text-green-400 font-bold">+120</td>
                  <td className="p-4">1:3</td>
                  <td className="p-4 text-green-400 font-bold">+$300</td>
                  <td className="p-4">$10,300</td>
                  <td className="p-4 dark:text-gray-300 text-gray-700">Perfect breakout confirmation and clean execution.</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

