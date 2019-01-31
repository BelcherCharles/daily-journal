const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "1/25/2019",
        concept: "Objects as things",
        entry: "My head hurts. I am getting lost as to where to start with much of this.",
        mood: "Ok"
    },
    {
        date: "1/26/2019",
        concept: "Not doing coding",
        entry: "Doing work that is simple, I'm good at, and understand.",
        mood: "Ok"
    }
]

let entriesLog = ""
for (let i = 0; i < journalEntries.length; i++){
const newJournalEntry = `<h2>Date - ${journalEntries[i].date}</h2><h3>Concept - ${journalEntries[i].concept}</h3><p>${journalEntries[i].entry}</p><h3>Mood - ${journalEntries[i].mood}</h3>`;
entriesLog += newJournalEntry
}

console.log(entriesLog);


document.querySelector(".entryLog").innerHTML = entriesLog

// let entryDate = journalEntries[0].date;
//     document.getElementById("JournalDate").innerHTML = `${entryDate}`;

// let entryConcept = journalEntries.concept;
//     document.getElementById("Concept").innerHTML = `${entryConcept}`;
// }