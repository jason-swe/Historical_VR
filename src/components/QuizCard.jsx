import { useState } from 'react'

function QuizCard({ quiz }) {
  const [selected, setSelected] = useState(null)
  const isAnswered = selected !== null

  return (
    <section className="rounded-lg border border-red-950/10 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-sm font-bold uppercase tracking-widest text-red-900">
        Câu hỏi tương tác
      </p>
      <h2 className="mt-3 text-2xl font-black text-zinc-950">
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
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  : ''
              } ${
                isAnswered && isSelected && !isCorrect
                  ? 'border-red-500 bg-red-50 text-red-950'
                  : ''
              } ${
                !isAnswered
                  ? 'border-zinc-200 bg-stone-50 hover:border-amber-500 hover:bg-amber-50'
                  : ''
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div className="mt-5 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-zinc-700">
          <strong className="text-zinc-950">
            {selected === quiz.answer ? 'Chính xác. ' : 'Chưa đúng. '}
          </strong>
          {quiz.explanation}
        </div>
      )}
    </section>
  )
}

export default QuizCard
