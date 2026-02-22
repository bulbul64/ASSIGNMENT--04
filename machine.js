//  jobsRender function 

import { jobs } from "./data.js"
import { allBtn, currentTab, interviewBtn, jobsContainer, rejectedBtn } from "./main.js"


 
 export function jobsRender(filteredJobs) {
 document.getElementById("job-length").innerText = filteredJobs.length
 if(filteredJobs.length === 0){
   return `
   <section class="bg-white text-center p-20 ">
   <div>
      <div class="flex justify-center">
         <div>
            <img src="jobs.png" alt="">
         </div>
      </div>
      <h2 class="text-[#002C5C] font-semibold text-lg">No jobs available</h2>
      <p>Check back soon for new job opportunities</p>
   </div>
</section>
   
   `
 }
  let allJobs = ""
  filteredJobs.map((job) => {
    allJobs += `
      
      <div class="shadow-md rounded-lg bg-white md:p-8 p-4">
   <div class="flex justify-between items-center mb-3">
      <h2 class="text-[#002C5C] font-semibold text-lg md:text-xl">${job.companyName}</h2>
      <button class="btn btn-sm btn-error delete-btn" data-id="${job.id}">Delete</button>
   </div>
   <h3 class="text-[#002C5C] font-medium text-base md:text-lg mb-1">${job.position}</h3>
   <p class="text-gray-600 text-sm md:text-base mb-3">
      <span>${job.location}</span> • 
      <span>${job.type}</span> • 
      <span>${job.salary}</span>
   </p>
   <h4 class="btn btn-sm bg-gray-100 text-gray-800 font-semibold mb-3 cursor-default">${job.statusLabel}</h4>
   <p class="text-gray-700 text-sm md:text-base mb-4">${job.description}</p>
   <div class="flex flex-wrap gap-2">
      <button class="btn btn-sm btn-success interview-btn" data-id="${job.id}">Interview</button>
      <button class="btn btn-sm btn-outline btn-error rejected-btn" data-id="${job.id}">Rejected</button>
   </div>
</div>
      
      `
  })
//  console.log(allJobs)
 return allJobs
}
 
// btn color change function add  

export function activeButton(button){
  allBtn.classList.remove("btn-primary")
  interviewBtn.classList.remove("btn-primary")
  rejectedBtn.classList.remove("btn-primary")
  button.classList.add("btn-primary")
}

//  current Tab Render function add

export function currentTabRender(){
  let filteredJobs = []
  if(currentTab === "all"){ filteredJobs = jobs}
  else filteredJobs = jobs.filter(j => j.status === currentTab)
  jobsContainer.innerHTML = jobsRender(filteredJobs)
}

