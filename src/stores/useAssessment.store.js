import { defineStore } from 'pinia'

export const useAssessmentStore = defineStore({
    id: 'assessment',
    state: () => ('assessment', {
        currentQuestion: null,
        status: { start: false, descriptions: false, questions: false, results: false },
        assessment: {
            name: "Web danger awareness assessment",
            description: "Description of assessment",
            questions: {
                1: {
                    id: 1,
                    label: "Bob just find an usb key while he was riding a scooter to his office. What it should do with it ?",
                    img: {
                        question: true,
                    },
                    answer: 2,
                    corrections: ["An unknow usb key can store anything, dogs photos or a virus.", "Plug it in the office is a security breach for your company and cause damage.", "Giving it your child may cause the same thing on your his or your personnal computer.", "\nAlways throw a unknow usb key."],
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "It seems to be old, why not giving it to his children.",
                        },
                        2: {
                            id: 2,
                            label: "It's dangerous, he should just throw it away.",
                        },
                        3: {
                            id: 3,
                            label: "Let's wait to be in the office to see what's in it.",
                        },
                        4: {
                            id: 4,
                            label: "How lucky I am, I lost mine yesterday.",
                        }
                    }
                },
                2: {
                    id: 2,
                    label: "Steven is going to New York for an appoitment. Rather than sleep, he takes the opportunity to work. After 2 hours of flight, he gets up to go to the bathroom, forgetting to lock his computer. What is he at risk ?",
                    img: {
                        question: true,
                    },
                    answer: 1,
                    corrections: ["Leaving your computer unlocked is dangerous ! Someone can install a malware giving him the power to watch what you are doing, typing or sending as credencials or bank password.", "Moreover, it may alwowing the to take contole on your computer and infect your family or friends."],
                    tips: "Press <kbd>Win</kbd> + <kbd>L</kbd> to lock your computer quickly",
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "Someone could steal his pc, the data on it or even install malware.",
                        },
                        2: {
                            id: 2,
                            label: "Since it is unlocked, it has a higher chance of falling due to turbulence.",
                        },
                        3: {
                            id: 3,
                            label: "There is no risk, no one would be interested of what is inside.",
                        }
                    }
                },
                3: {
                    id: 3,
                    label: "Which password is the stronger one ?",
                    answer: 4,
                    img: {
                        question: true,
                    },
                    corrections: ["One way to crack password is \"Brute force\", an algorithm will try 0, 1, 2, ... 00, 01, 02, ... 0a, 0b, 0c, etc. To prevent from this attack, you need to use complex password.","\nPassword complexicity is base on lenght and on sereval characters types (number, lower letter, upper letter, symbols). More your password is long and using diffrents type, more it will be safe.", "\nFollowing this rule, \"azerty123\" is safer than \"H@,1\"", "\nA password is concidered as safe when it will use all characters type available and at least 12 characters. Change your password not following this rule." ],
                    tips: 'Check this article : <a href="https://www.hivesystems.io/blog/are-your-passwords-in-the-green?utm_source=tabletext" target="_blank">Are your passwords safe ?<a>',
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "H@,1",
                        },
                        2: {
                            id: 2,
                            label: "azerty123",
                        },
                        3: {
                            id: 3,
                            label: "1963578405548521085",
                        },
                        4: {
                            id: 4,
                            label: "L@t1tud3",
                        },
                        5: {
                            id: 4,
                            label: "007",
                        }
                    }
                },
                4: {
                    id: 4,
                    label: "Is this email safe ?",
                    answer: 2,
                    img: {
                        question: true,
                        correction: true
                    },
                    corrections: [
                        "When you receive an email, you always have to check some facts. In this case, you are not receiving an email from Capgemini but from Capgenimi with is not the same.", 
                        "After clicking on \"VIEW COMPLETED DOCUMENT\", they may ask you to login on a fake website (copy) and get your credencial.", 
                        "\nTo prevent yourself again this attack keep attention on :", 
                        "\n-> Email sender : Items in the email address will be changed so that it is similar enough to a legitimate email address, but has added numbers or changed letters.", 
                        "\n-> Links : The links or URLs provided in emails may not pointing to the correct location or are pointing to a third-party site not affiliated with the sender of the email.", 
                        "\n-> Download : Never dowload any document or attachment from an unknow sender", ],
                    tips: "There's a request for personal information such as social security numbers or bank or financial information. Official communications won't generally request personal information from you in the form of an email.",
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "Yes",
                        },
                        2: {
                            id: 2,
                            label: "No",
                        },
                    }
                },
                5: {
                    id: 5,
                    label: "Am I on a safe shop ?",
                    answer: 2,
                    img: {
                        question: true,
                        correction: true
                    },
                    corrections: [
                        "You are not on Nike website, look at URL !",
                        "Secure website are using HTTPS which is a security standard on the web. It is symbolise by a padlock next to the url you are navigating on."
                    ],
                    tips: 'You can find out all about the owner from the website <a target="_blank" href="https://www.whois.com/whois/">whois</a> and type in the website URL. You can also check on <a target="_blank" href="https://transparencyreport.google.com/safe-browsing/search?hl=en">Google transparency report</a>',
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "Yes",
                        },
                        2: {
                            id: 2,
                            label: "No",
                        },
                    }
                },
                6: {
                    id: 6,
                    label: "William is taking a cofee in the starbuck next to his flat. While he is connected on public wifi, he want to check is bank account amount to pay his rent next mounth. Why is it dangerous ?",
                    answer: 3,
                    img: {
                        question: true,
                        correction: true
                    },
                    corrections: [
                        "Public wifi are dangerous because hackers can wacht all the data you are sending or receiving as credential. We call this attack : Man-in-the-middle.",
                        "Same attack can append if you connect your device to an unknow wifi."
                    ],
                    tips: "Prioritize using a private network or using a vpn",
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "Someone could see him while he is tipping his password.",
                        },
                        2: {
                            id: 2,
                            label: "It is not dangerous, it is on his own smartphone.",
                        },
                        3: {
                            id: 3,
                            label: "Someone could sniffe data throught the wifi and retreive his bank account credencials.",
                        },
                    }
                },
                7: {
                    id: 7,
                    label: "Kate has her computer since 7 years, it is old and slow so she refuse to do any update to limit an additional slowdown. Is she right ?",
                    answer: 4,
                    img: {
                        question: true,
                    },
                    corrections: [
                        "This subject is complicated... In any cases, you should do security patch to prevent yoursefl against hackers attacks. Unfortunately it's true that this can cause slowdowns.",
                        "Don't forget that cyber attack may cause your device death so what is worth ?",
                    ],
                    tips: "Some software editor propose update with only security patch. Check it !",
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "What is an update ?",
                        },
                        2: {
                            id: 2,
                            label: "Of course, refusing update keep your computer faster.",
                        },
                        3: {
                            id: 3,
                            label: "Updates are what allows companies to do planned obsolescence",
                        },
                        4: {
                            id: 4,
                            label: "Of course, refusing updates keep your computer faster but it is not safe. Upgrade bring new heavy feature but also security patch.",
                        }
                    }
                },
                8: {
                    id: 8,
                    label: "Elizabeth is having a very bad day, on returning home in the evening she comes across this advertisement, has her luck changed ?",
                    answer: 2,
                    img: {
                        question: true,
                    },
                    corrections: ["These advertisements are mostly fakes to retrieve information or bank details. If you encounter any, we advise you to change the site and above all not to click on it."],
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "It's time to let my luck change",
                        },
                        2: {
                            id: 2,
                            label: "It's a fake, which can link to a hack",
                        },
                        3: {
                            id: 3,
                            label: "I don't need a new phone, I just bought a new one. I hope next time it will be an Ipad, I need one !",
                        },
                    }
                },
                9: {
                    id: 9,
                    label: "Can you escape ?",
                    fakeRedirect: true,
                    answer: 1,
                    corrections: [
                        "On some website, you could find this type of fake error, advising to call a phone number to get some help or buy some anti-virus.",
                        "\nMost of the time, it's a fake ! Just exit this window and you will be in a safe place"
                    ],
                    tips: "To escape from those type of fake bug try : <kbd>esc</kbd> or <kbd>ctrl</kbd> + <kbd>W</kbd>", 
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "I escape from the fake bug",
                        },
                    }
                },
                10: {
                    id: 10,
                    label: "Despite all our good advice, Charles still got hacked... And yes it's still possible... A ransomware locked his computer. What is the best step to do next ?",
                    answer: 4,
                    img: {
                        question: true,
                    }, 
                    corrections: [
                        "So much effort to still get hacked...",
                        "\n -> Paying does not guarantee anything",
                        "\n -> Buying is the last solution if you did not succed to get your computer back by all means",
                        "\n -> Even if you have done save on different partition, it is likely that they are encrypted too",

                    ],
                    tips: "The best way to save your data is to save them on an external disk.", 
                    userAnswer: null,
                    proposals: {
                        1: {
                            id: 1,
                            label: "He should pay to retreive his data",
                        },
                        2: {
                            id: 2,
                            label: "He should buy a new computer",
                        },
                        3: {
                            id: 3,
                            label: "He can rely on save that he has done on another partition on his computer",
                        },
                        4: {
                            id: 4,
                            label: "He can rely on save that he has done on an external disk",
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
        hasQuestion: (state) => {
            return (id) => !!state.assessment.questions[id]
        },
        getNumberOfQuestions: (state) => {
            return Object.keys(state.assessment.questions).length;
        },
        getNumberOfCorrectAnswer: (state) => {
            let i = 0;
            for (const [key, question] of Object.entries(state.assessment.questions)) {
                if (question.userAnswer) {
                    i++;
                }
            }
            return i;
        },
        getFirstUnanswerQuestion: (state) => {
            for (const [key, question] of Object.entries(state.assessment.questions)) {
                if (question.userAnswer === null) {
                    return key;
                }
            }
            return null;
        }
    },
    actions: {
        startAssessment() {
            if (!this.currentQuestion) {
                if (!this.status.start) {
                    this.status.start = true;
                    this.currentQuestion = this.assessment.questions[1];
                } else if (this.status.start) {
                    this.currentQuestion = this.assessment.questions[this.getFirstUnanswerQuestion()];
                }
            }
        },
        validateQuestion(userAnswer) {
            let result = this.currentQuestion.answer === userAnswer ? true : false;
            this.currentQuestion.userAnswer = result;
            this.assessment.questions[this.currentQuestion.id].userAnswer = result;
            return result;
        },
        nextQuestion(id = null) {
            let nextID = id || this.currentQuestion.id + 1;
            if (this.hasQuestion(nextID)) {
                this.currentQuestion = this.assessment.questions[nextID]
            } else {
                if (this.getFirstUnanswerQuestion) {
                    this.currentQuestion = this.assessment.questions[this.getFirstUnanswerQuestion]
                } else {
                    this.status.results = true
                }
            }
        },
        resetAssessment() {
            this.$reset();
        }
    }
});