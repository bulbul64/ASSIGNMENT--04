import { jobs } from "./data.js"
import { jobsRender } from "./machine.js"

// render all jobs 

const jobsContainer = document.getElementById("jobs-container")
jobsContainer.innerHTML = jobsRender(jobs)

