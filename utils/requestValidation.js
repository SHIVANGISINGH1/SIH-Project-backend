function validateQuestion(req) {
  return (
    'standard' in req &&
    'subject' in req &&
    'unit' in req &&
    'problemStatement' in req &&
    'options' in req &&
    'answer' in req &&
    req.options.length === 4
  )
}

function validateQuestionsQuery(req) {
  return 'standard' in req && 'subject' in req
}

export { validateQuestion, validateQuestionsQuery }
