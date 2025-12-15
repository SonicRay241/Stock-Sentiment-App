"use client"

export default function PersonalizedNews() {
  return (
    <div className="flex items-center justify-between mb-4 px-2">
      <h2 className="text-lg font-semibold text-foreground">
        Personalized News
      </h2>

      <button
        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        onClick={() => {
          // handle view all
        }}
      >
        View All
      </button>
    </div>
  )
}
