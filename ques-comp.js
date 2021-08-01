const container = document.getElementById('question-container')
const primaryData = document.getElementById('data')

questionSet.forEach(question => {
    const quesEl = document.createElement('ques-el')
    if(Array.isArray(question.topic)) {
        let tmpTopic = ''
        question.topic.forEach( topic => {
            tmpTopic += topic + ', '
        })
        quesEl.topic = tmpTopic.trim()
    } else {
        quesEl.topic = question.topic
    }   
    
    quesEl.quesText = `${question.id}) ${question.question}`
    quesEl.ans = question.answer
    quesEl.result = `./images/${question.id}.png`
    container.appendChild(quesEl)
    Prism.highlightAllUnder(quesEl.shadowRoot)
})

Prism.highlightAllUnder(primaryData)