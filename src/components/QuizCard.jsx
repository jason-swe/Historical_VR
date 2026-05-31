import { useState } from 'react'

function QuizCard({ quiz }) {
  const [selected, setSelected] = useState(null)
  const isAnswered = selected !== null

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-sm sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
        Câu hỏi tương tác
      </p>
      <h2 className="mt-3 text-2xl font-black leading-tight text-white">
        {quiz.question}
      </h2>

      <div className="mt-5 grid gap-3">
        {quiz.options.map((option, index) => {
          const isCorrect = index === quiz.answer
          const isSelected = selected === index

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(index)}
              className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                isAnswered && isCorrect
                  ? 'border-emerald-300 bg-emerald-300/15 text-emerald-100'
                  : ''
              } ${
                isAnswered && isSelected && !isCorrect
                  ? 'border-red-300 bg-red-400/15 text-red-100'
                  : ''
              } ${
                !isAnswered
                  ? 'border-white/10 bg-black/25 text-zinc-200 hover:border-amber-300/60 hover:bg-black/35'
                  : ''
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div className="mt-5 rounded-lg border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-6 text-zinc-200">
          <strong className="text-amber-100">
            {selected === quiz.answer ? 'Chính xác. ' : 'Chưa đúng. '}
          </strong>
          {quiz.explanation}
        </div>
      )}
    </section>
  )
}

export default QuizCard
