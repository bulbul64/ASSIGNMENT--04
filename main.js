import { jobs } from "./data.js"
import { activeButton, currentTabRender, jobsRender } from "./machine.js"

export let currentTab = "all"

// render all jobs 

export const jobsContainer = document.getElementById("jobs-container")
jobsContainer.innerHTML = jobsRender(jobs)



//  get all-jobs  interview rejected 

export const allBtn = document.getElementById("all-jobs")
 export const interviewBtn = document.getElementById("interview")
export const rejectedBtn = document.getElementById("rejected")


//  Event add

allBtn.addEventListener("click", () => {
  currentTab = "all"
  activeButton(allBtn)
  currentTabRender()
})

interview.addEventListener("click", () => {
  currentTab = "interview"
  activeButton(interviewBtn)
  currentTabRender()
})

rejected.addEventListener("click", () => {
  currentTab = "rejected"
  activeButton(rejectedBtn)
  currentTabRender()
})

