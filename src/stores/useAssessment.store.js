import { defineStore } from 'pinia'

export const useAssessmentStore = defineStore({
  id: 'assessment',
  state: () => ({
    currentQuestion: null,
    status: 'UNSTART',
    assessment: {
      name: "Web danger awareness assessment",
      description : "Description of assessment",
      questions : {
        1: {
          id: 1,
          label: "Question 1",
          answer: 2,
          correction: "You should choose the answer 2",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        2: {
          id: 2,
          label: "Question 2",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        3: {
          id: 3,
          label: "Question 3",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        4: {
          id: 4,
          label: "Question 4",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        5: {
          id: 5,
          label: "Question 5",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        6: {
          id: 6,
          label: "Question 6",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        7: {
          id: 7,
          label: "Question 7",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        8: {
          id: 8,
          label: "Question 8",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        9: {
          id: 9,
          label: "Question 9",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
        10: {
          id: 10,
          label: "Question 10",
          answer: 1,
          correction: "You should choose the answer 1",
          userAnswer: null,
          proposals: {
            1: {
              id: 1,
              label: "Proposal 1",
            },
            2: {
              id: 2,
              label: "Proposal 2",
            },
            3: {
              id: 3,
              label: "Proposal 3",
            },
            4: {
              id: 4,
              label: "Proposal 4",
            }
          }
        },
      }
    }
  }),
  getters: {
    getQuestions: (state) => {
      return state.assessment.questions;
    },
    getQuestion: (state) => {
      return state.assessment.questions[state.currentQuestion];
    },
    hasQuestion:(state) => {
      return (id) => !!state.assessment.questions[id]
    },
    getNumberOfQuestions: (state) => {
        return Object.keys(state.assessment.questions).length;
    },
    getNumberOfCorrectAnswer: (state) => {
        let i = 0;
        for (const [key, question] of Object.entries(state.assessment.questions)) {
          console.log(question.userAnswer, question.answer)
          if(question.userAnswer){
            i++;
          }
        }
        return i;
    }
  },
  actions: {
    startAssessment() {
      if(!this.currentQuestion){
        this.status = 'START'
        this.currentQuestion = this.assessment.questions[1];
      }
    },
    validateQuestion(userAnswer){
      let result = this.currentQuestion.answer === userAnswer ? true : false;
      this.currentQuestion.userAnswer = result;
      this.assessment.questions[this.currentQuestion.id].userAnswer = result;
      return result;
    },
    nextQuestion(id = null){
      let nextID = id || this.currentQuestion.id + 1;
      if(this.hasQuestion(nextID)){
        this.currentQuestion = this.assessment.questions[nextID]
      }else{
        this.status = 'END'
      }
    },
    generateResult(){
      
    }
  }
})
