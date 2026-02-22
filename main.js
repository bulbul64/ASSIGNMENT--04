import { jobs } from "./data.js"
import { activeButton, jobsRender } from "./machine.js"

// render all jobs 

const jobsContainer = document.getElementById("jobs-container")
jobsContainer.innerHTML = jobsRender(jobs)

//  get all-jobs  interview rejected 

export const allBtn = document.getElementById("all-jobs")
 export const interviewBtn = document.getElementById("interview")
export const rejectedBtn = document.getElementById("rejected")


// btn color change Event 

allBtn.addEventListener("click", () => {
  activeButton(allBtn)
})

interview.addEventListener("click", () => {
  activeButton(interviewBtn)
})

rejected.addEventListener("click", () => {
  activeButton(rejectedBtn)
})

