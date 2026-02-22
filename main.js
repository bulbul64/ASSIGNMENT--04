import { jobs } from "./data.js"
import { activeButton, currentTabRender, jobsCount, jobsRender } from "./machine.js"

export let currentTab = "all"

// render all jobs 

export const jobsContainer = document.getElementById("jobs-container")
jobsContainer.innerHTML = jobsRender(jobs)
jobsCount(jobs)


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

interviewBtn.addEventListener("click", () => {
  currentTab = "interview"
  activeButton(interviewBtn)
  currentTabRender()
})

rejectedBtn.addEventListener("click", () => {
  currentTab = "rejected"
  activeButton(rejectedBtn)
  currentTabRender()
})


// status event add

jobsContainer.addEventListener("click", function(e){
  const id = e.target.dataset.id
   if(!id) return;
  console.log(id)
  const jobId = jobs.find(j => j.id == id)
  console.log(jobId)
  
  if (e.target.classList.contains("interview-btn")) {
     jobId.status = "interview"
     jobId.statusLabel = "INTERVIEW"
  }
   if (e.target.classList.contains("rejected-btn")) {
     jobId.status = "rejected"
     jobId.statusLabel = "REJECTED"
  }
  if(e.target.classList.contains("delete-btn")){
    const index = jobs.findIndex(j => j.id == id)
    if(index > -1){
      jobs.splice(index ,1)
    }
  }
  currentTabRender()
})