import { jobs } from "./data.js"
import { jobsRender } from "./machine.js"

// render all jobs 

const jobsContainer = document.getElementById("jobs-container")
jobsContainer.innerHTML = jobsRender(jobs)

//  get all-jobs  interview rejected 

const allBtn = document.getElementById("all-jobs")
const interview = document.getElementById("interview")
const rejected = document.getElementById(" ")

