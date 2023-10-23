
let job_preference, location;
fetch('getSessionData.php')
    .then(response => response.json())
    .then(data => {
        job_preference = data.job_preference;
        location = data.location;
        // Populate with jobs
        fetchAndPopulateJobs(job_preference, location);
    })
    .catch(error => {
        console.error('Error fetching session data:', error);
    });

async function fetchAndPopulateJobs(searchTerm = 'Software Engineer', searchLocation = 'United States') {
  const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '9212a11f9dmshc97838dd208b14dp1855e4jsn8d3a2ab0c424',
      'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    body: JSON.stringify({
      search_terms: searchTerm,
      location: searchLocation,
      page: '1'
    })
  };

  try {
    const response = await fetch(url, options);
    console.log("Response:", response);

    let jobs;
    if (response.ok) {
      try {
        // Log raw response text
        const rawResponse = await response.text();
        // console.log("Raw Response:", rawResponse);
        jobs = JSON.parse(rawResponse);
        console.log("Parsed Jobs:", jobs);
      } catch (error) {
        console.error("JSON Parsing Error:", error);
      }
    } else {
      console.error('Response Error:', response);
    }

    const jobList = document.getElementById('job-list');

    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];

      const date = job.posted_date;
      const jobTitle = job.job_title;
      const companyName = job.company_name;
      const location = job.job_location;
      const jobUrl = job.linkedin_job_url_cleaned;
      const companyUrl = job.linkedin_company_url_cleaned;

      const li = document.createElement('li');
      li.className = 'job-listing-item';
      li.classList.add('bg-secondary-50', 'shadow-lg', 'max-w-xl', 'rounded-lg', 'mx-auto', 'overflow-hidden', 'relative', 'mb-6', 'flex', 'flex-col', 'md:flex-row');

      const newTag = date === 'Just posted' ? `<span class="bg-red-500 text-background-50 py-1 px-2 absolute top-0 right-0 mt-2 mr-2 rounded-full font-semibold text-sm">New</span>` : '';

      li.innerHTML = `
        <div>
          ${newTag}
          <a href="${jobUrl}" target="_blank">
            <h2 class="text-xl font-semibold text-primary1 hover:underline mb-2">${jobTitle}</h2>
          </a>
          <p class="text-sm text-text1 mb-1">${companyName}</p>
          <p class="text-sm text-text1 mb-10">${location}</p>
          <div class="text-sm text-gray-400 absolute bottom-4 right-4 sm:left-4 sm:bottom-8 lg:left-4 lg:bottom-8">Posted ${date} days ago</div>
          <a href="${companyUrl}" class="text-accent1 hover:underline absolute bottom-4 left-4" target="_blank">Learn More</a>
        </div>
      `;

      jobList.appendChild(li);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const searchButton = document.getElementById('searchButton');
const keywordInput = document.querySelector('input[placeholder="Keywords"]');
const locationInput = document.querySelector('input[placeholder="Location"]');

searchButton.addEventListener('click', function() {
    const searchTerm = keywordInput.value;
    const searchLocation = locationInput.value;
    fetchAndPopulateJobs(searchTerm, searchLocation);
});


// const categories = document.querySelectorAll('.category');

// categories.forEach(category => {
//   category.addEventListener('click', () => {
//     // Toggle background color
//     category.classList.toggle('bg-white');
//     category.classList.toggle('bg-primary-300');
//     category.classList.toggle('text-background-50'); // Change to the desired color

//     // You can also add logic here to filter job listings based on the selected category
//   });
// });
// const sample_response_body =
// [
//   {
//   "job_url": "https://www.linkedin.com/jobs/view/python-engineer-remote-flexible-at-cps-inc-3236855873?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=9V8%2B%2F3IyQ71PuZgAiN8BBw%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card",
//   "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-engineer-remote-flexible-at-cps-inc-3236855873",
//   "company_name": "CPS, Inc.",
//   "company_url": "https://www.linkedin.com/company/cps4jobs?trk=public_jobs_jserp-result_job-search-card-subtitle",
//   "linkedin_company_url_cleaned": "https://www.linkedin.com/company/cps4jobs",
//   "job_title": "Python Engineer - Remote Flexible",
//   "job_location": "Chicago, IL",
//   "posted_date": "2023-02-22",
//   "normalized_company_name": "Cps4jobs"
//   },
//   {
//   "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-doghouse-recruitment-3463573962?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=zTd%2B8Gp9f8dUOAwc5zt8HA%3D%3D&position=2&pageNum=0&trk=public_jobs_jserp-result_search-card",
//   "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-doghouse-recruitment-3463573962",
//   "company_name": "Doghouse Recruitment",
//   "company_url": "https://nl.linkedin.com/company/doghouse-recruitment?trk=public_jobs_jserp-result_job-search-card-subtitle",
//   "linkedin_company_url_cleaned": "https://nl.linkedin.com/company/doghouse-recruitment",
//   "job_title": "Python Developer",
//   "job_location": "Chicago, IL",
//   "posted_date": "2023-02-05",
//   "normalized_company_name": "Doghouse recruitment"
//   },
//   {
//   "job_url": "https://www.linkedin.com/jobs/view/software-engineer-jupyterlab-python-integrations-at-pachyderm-inc-3412722302?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=KeLld%2BmsPknNHF15RxqW%2BQ%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card",
//   "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/software-engineer-jupyterlab-python-integrations-at-pachyderm-inc-3412722302",
//   "company_name": "Pachyderm Inc.",
//   "company_url": "https://www.linkedin.com/company/pachyderm-inc-?trk=public_jobs_jserp-result_job-search-card-subtitle",
//   "linkedin_company_url_cleaned": "https://www.linkedin.com/company/pachyderm-inc-",
//   "job_title": "Software Engineer (JupyterLab/Python/Integrations)",
//   "job_location": "Chicago, IL",
//   "posted_date": "2022-12-02",
//   "normalized_company_name": "Pachyderm inc "
//   },
//   {
//   "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-harvey-nash-3461872680?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=oGAXjv4XvffZRDpbkJ6DaA%3D%3D&position=4&pageNum=0&trk=public_jobs_jserp-result_search-card",
//   "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-harvey-nash-3461872680",
//   "company_name": "Harvey Nash",
//   "company_url": "https://uk.linkedin.com/company/harvey-nash?trk=public_jobs_jserp-result_job-search-card-subtitle",
//   "linkedin_company_url_cleaned": "https://uk.linkedin.com/company/harvey-nash",
//   "job_title": "Python Developer",
//   "job_location": "Chicago, IL",
//   "posted_date": "2023-02-03",
//   "normalized_company_name": "Harvey nash"
//   }
//   ]

//https://rapidapi.com/jaypat87/api/indeed11

