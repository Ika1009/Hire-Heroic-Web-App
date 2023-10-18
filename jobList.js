const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '9212a11f9dmshc97838dd208b14dp1855e4jsn8d3a2ab0c424',
    'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
  },
  body: JSON.stringify({
    search_terms: 'Software Engineer',
    location: 'United States',
    page: '1'
  })
};


fetchAndPopulateJobs();

async function fetchAndPopulateJobs() {
  try {
    // const response = await fetch(url, options);
    // console.log("Response:", response);

    // let jobs;
    // if(response.ok) {
    //     try {
    //         // Log raw response text
    //         const rawResponse = await response.text();
    //         // console.log("Raw Response:", rawResponse);
    //         jobs = JSON.parse(rawResponse);
    //         console.log("Parsed Jobs:", jobs);
    //     } catch (error) {
    //         console.error("JSON Parsing Error:", error);
    //     }
    // } else {
    //     console.error('Response Error:', response);
    //}
    const jobs = sample_response_body;

    // Assume you have a ul or ol with id 'job-list' in your HTML
    const jobList = document.getElementById('job-list');

    // Loop through each job in the response
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];

      // Now you can access each property of the job object
      const date = job.posted_date;
      const jobTitle = job.job_title;
      const companyName = job.company_name;
      const location = job.job_location;
      const jobUrl = job.linkedin_job_url_cleaned;
      const companyUrl = job.linkedin_company_url_cleaned;
      // const salary = job.salary;

      // Create an li element
      const li = document.createElement('li');
      li.className = 'job-listing-item';
      li.classList.add('bg-background-50', 'shadow-lg', 'rounded-lg', 'mx-0', 'sm:mx-4', 'lg:mx-24', 'xl:mx-32', 'overflow-hidden', 'relative', 'mb-6', 'flex', 'flex-col', 'md:flex-row');

      // Show the "new" box only if the date is "Just posted"
      const newTag = date === 'Just posted' ? `<span class="bg-red-500 text-background-50 py-1 px-2 absolute top-0 right-0 mt-2 mr-2 rounded-full font-semibold text-sm">New</span>` : '';

      //za salary ako zatreba
      // <div class="text-gray-700 mb-2">
      //     <span class="font-semibold">Salary:</span> ${salary}
      // </div>

      // Set its content
      li.innerHTML = `
                <a href="${companyUrl}" target="_blank" class="block w-full h-full absolute top-0 left-0" aria-hidden="true"></a>
                  <div class="w-full sm:w-52 h-52 relative">
                      ${newTag}
                      <img src="https://pangian.com/wp-content/uploads/2023/06/PMA-Companies.jpg" alt="PMA Companies" class="w-full h-full object-cover">
                  </div>
                  <div class="w-full md:w-2/3 p-4 relative">
                      <a href="${jobUrl}" target="_blank" class="text-accent-500 hover:underline">
                          <h2 class="text-xl text-accent-500 font-semibold mb-2">${jobTitle}</h2>
                      </a>
                      <div class="text-gray-700 mb-2">
                          <span class="font-semibold">Company:</span> ${companyName}
                      </div>

                      <div class="text-gray-700 mb-2">
                          <span class="font-semibold">Location:</span> ${location}
                      </div>
                  </div>
                  <div class="text-gray-500 absolute bottom-0 right-0 mb-1 mr-2 text-xs">
                    <span class="font-semibold"><i class="fa fa-clock-o" aria-hidden="true"></i>
                    </span> ${date}
                  </div>
                </a>
      `;

      // Append the li to the job list
      jobList.appendChild(li);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    // Toggle background color
    category.classList.toggle('bg-white');
    category.classList.toggle('bg-primary-300');
    category.classList.toggle('text-background-50'); // Change to the desired color

    // You can also add logic here to filter job listings based on the selected category
  });
});


//https://rapidapi.com/jaypat87/api/indeed11

const sample_response_body =
[
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-engineer-remote-flexible-at-cps-inc-3236855873?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=9V8%2B%2F3IyQ71PuZgAiN8BBw%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-engineer-remote-flexible-at-cps-inc-3236855873",
  "company_name": "CPS, Inc.",
  "company_url": "https://www.linkedin.com/company/cps4jobs?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/cps4jobs",
  "job_title": "Python Engineer - Remote Flexible",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-22",
  "normalized_company_name": "Cps4jobs"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-doghouse-recruitment-3463573962?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=zTd%2B8Gp9f8dUOAwc5zt8HA%3D%3D&position=2&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-doghouse-recruitment-3463573962",
  "company_name": "Doghouse Recruitment",
  "company_url": "https://nl.linkedin.com/company/doghouse-recruitment?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://nl.linkedin.com/company/doghouse-recruitment",
  "job_title": "Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-05",
  "normalized_company_name": "Doghouse recruitment"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/software-engineer-jupyterlab-python-integrations-at-pachyderm-inc-3412722302?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=KeLld%2BmsPknNHF15RxqW%2BQ%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/software-engineer-jupyterlab-python-integrations-at-pachyderm-inc-3412722302",
  "company_name": "Pachyderm Inc.",
  "company_url": "https://www.linkedin.com/company/pachyderm-inc-?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/pachyderm-inc-",
  "job_title": "Software Engineer (JupyterLab/Python/Integrations)",
  "job_location": "Chicago, IL",
  "posted_date": "2022-12-02",
  "normalized_company_name": "Pachyderm inc "
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-harvey-nash-3461872680?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=oGAXjv4XvffZRDpbkJ6DaA%3D%3D&position=4&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-harvey-nash-3461872680",
  "company_name": "Harvey Nash",
  "company_url": "https://uk.linkedin.com/company/harvey-nash?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://uk.linkedin.com/company/harvey-nash",
  "job_title": "Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-03",
  "normalized_company_name": "Harvey nash"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/software-engineer-python-at-lasalle-network-3407450515?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=33KOGDCCpYUfYtP0awmq0w%3D%3D&position=5&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/software-engineer-python-at-lasalle-network-3407450515",
  "company_name": "LaSalle Network",
  "company_url": "https://www.linkedin.com/company/lasalle-network?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/lasalle-network",
  "job_title": "Software Engineer (Python)",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-24",
  "normalized_company_name": "Lasalle network"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-django-web-developer-at-mess-3379251835?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=pP1wcshQ1QuH5ZvSDQzcAg%3D%3D&position=6&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-django-web-developer-at-mess-3379251835",
  "company_name": "Mess",
  "company_url": "https://www.linkedin.com/company/mess-marketing?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/mess-marketing",
  "job_title": "Python/Django Web Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2022-11-28",
  "normalized_company_name": "Mess marketing"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-quantitative-developer-market-making-at-durlston-partners-3479253605?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=%2F0k%2BBNsSGi9AV5iQzR3d9g%3D%3D&position=7&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-quantitative-developer-market-making-at-durlston-partners-3479253605",
  "company_name": "DURLSTON PARTNERS",
  "company_url": "https://uk.linkedin.com/company/durlston-partners-llp?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://uk.linkedin.com/company/durlston-partners-llp",
  "job_title": "Python Quantitative Developer - Market Making",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-13",
  "normalized_company_name": "Durlston partners llp"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-ivy-tech-solutions-inc-3492285489?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=jyUTq9F6D4D1evT3UmQneA%3D%3D&position=8&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-ivy-tech-solutions-inc-3492285489",
  "company_name": "IVY TECH SOLUTIONS INC",
  "company_url": "https://www.linkedin.com/company/ivy-tech-solutions-inc?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/ivy-tech-solutions-inc",
  "job_title": "Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-26",
  "normalized_company_name": "Ivy tech solutions inc"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-data-engineer-at-transmarket-group-3480827029?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=3BUvwNbhvCierH3RH1EVuQ%3D%3D&position=9&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-data-engineer-at-transmarket-group-3480827029",
  "company_name": "TransMarket Group",
  "company_url": "https://www.linkedin.com/company/transmarket-group-l.l.c.?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/transmarket-group-l.l.c.",
  "job_title": "Python Developer / Data Engineer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-10",
  "normalized_company_name": "Transmarket group l.l.c."
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-ivy-tech-solutions-inc-3493989617?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=%2FOkR81LuwJPTJ87DB8hsjA%3D%3D&position=10&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-ivy-tech-solutions-inc-3493989617",
  "company_name": "IVY TECH SOLUTIONS INC",
  "company_url": "https://www.linkedin.com/company/ivy-tech-solutions-inc?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/ivy-tech-solutions-inc",
  "job_title": "Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-27",
  "normalized_company_name": "Ivy tech solutions inc"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/backend-python-developer-remote-at-braintrust-3486706546?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=btH8IeCJlcTLxvRUp2jaog%3D%3D&position=11&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/backend-python-developer-remote-at-braintrust-3486706546",
  "company_name": "Braintrust",
  "company_url": "https://www.linkedin.com/company/usebraintrust?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/usebraintrust",
  "job_title": "Backend Python Developer [REMOTE]",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-17",
  "normalized_company_name": "Usebraintrust"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-developer-at-compunnel-inc-3489338020?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=IKMVhNVO9p2o9cWyzdu99g%3D%3D&position=12&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-developer-at-compunnel-inc-3489338020",
  "company_name": "Compunnel Inc.",
  "company_url": "https://www.linkedin.com/company/compunnel-software-group?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/compunnel-software-group",
  "job_title": "Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-18",
  "normalized_company_name": "Compunnel software group"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-data-engineer-at-harmer-3451692204?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=aefn4O1gaJx%2FeWn7q3jgOA%3D%3D&position=13&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-data-engineer-at-harmer-3451692204",
  "company_name": "Harmer",
  "company_url": "https://www.linkedin.com/company/harmer?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/harmer",
  "job_title": "Python Data Engineer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-27",
  "normalized_company_name": "Harmer"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3480490621?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=s9%2FSlz1ns2y%2BFEsw2g4DKA%3D%3D&position=14&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3480490621",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-20",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-data-engineer-at-cps-inc-3403516888?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=wrJVWQWtZQ%2F8I6wxbZHZaw%3D%3D&position=15&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-data-engineer-at-cps-inc-3403516888",
  "company_name": "CPS, Inc.",
  "company_url": "https://www.linkedin.com/company/cps4jobs?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/cps4jobs",
  "job_title": "Python Data Engineer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-22",
  "normalized_company_name": "Cps4jobs"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-applications-developer-devops-at-careeraddict-3494563272?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=W7TmcOFQMe%2FCDrLnKVMsvQ%3D%3D&position=16&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-applications-developer-devops-at-careeraddict-3494563272",
  "company_name": "CareerAddict",
  "company_url": "https://ie.linkedin.com/company/career-addict?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://ie.linkedin.com/company/career-addict",
  "job_title": "Python Applications Developer - DevOps",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-24",
  "normalized_company_name": "Career addict"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/full-stack-python-developer-at-ascendion-3489465405?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=XHLaHp%2BQzmGLccBF0qMTcA%3D%3D&position=17&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/full-stack-python-developer-at-ascendion-3489465405",
  "company_name": "Ascendion",
  "company_url": "https://www.linkedin.com/company/ascendion?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/ascendion",
  "job_title": "Full Stack Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-22",
  "normalized_company_name": "Ascendion"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3487491083?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=OmbCa9SVGBrMF1vj5Ukjwg%3D%3D&position=18&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3487491083",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-25",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3490231583?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=bHwMIYeSYGwxaFefRu%2B8kw%3D%3D&position=19&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3490231583",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-26",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3486317985?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=%2BayGyE7SUb8OSquawnCNOg%3D%3D&position=20&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3486317985",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-24",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-web-developer-at-diverse-lynx-3484124702?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=tA3bIo3rFsjDhOnWeZ%2FdPw%3D%3D&position=21&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-web-developer-at-diverse-lynx-3484124702",
  "company_name": "Diverse Lynx",
  "company_url": "https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/diverselynx",
  "job_title": "Python Web Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-21",
  "normalized_company_name": "Diverselynx"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3479249369?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=JmkUURMI1cYx%2FQkrumr5HQ%3D%3D&position=22&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3479249369",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-19",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/python-application-developer-at-request-technology-llc-3450827622?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=fX0bqE0eZWaf45nFtkibqQ%3D%3D&position=23&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/python-application-developer-at-request-technology-llc-3450827622",
  "company_name": "Request Technology, LLC",
  "company_url": "https://www.linkedin.com/company/request-technology?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/request-technology",
  "job_title": "Python Application Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-02-17",
  "normalized_company_name": "Request technology"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3478833362?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=fcpJZ5R8W9SrYzbctt5oUg%3D%3D&position=24&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/fully-remote%21%21-aws-python-engineer%21%21-%24150k%21%21-at-jefferson-frank-3478833362",
  "company_name": "Jefferson Frank",
  "company_url": "https://www.linkedin.com/company/jefferson-frank?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/jefferson-frank",
  "job_title": "Fully Remote!! AWS Python Engineer!! $150k!!",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-18",
  "normalized_company_name": "Jefferson frank"
  },
  {
  "job_url": "https://www.linkedin.com/jobs/view/6372-1-python-developer-at-diverse-lynx-3475433204?refId=5le2%2BahEYmTdA4V8zzON0Q%3D%3D&trackingId=9HqSWmEVQNgSxgmZ52LKpg%3D%3D&position=25&pageNum=0&trk=public_jobs_jserp-result_search-card",
  "linkedin_job_url_cleaned": "https://www.linkedin.com/jobs/view/6372-1-python-developer-at-diverse-lynx-3475433204",
  "company_name": "Diverse Lynx",
  "company_url": "https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle",
  "linkedin_company_url_cleaned": "https://www.linkedin.com/company/diverselynx",
  "job_title": "6372-1 Python Developer",
  "job_location": "Chicago, IL",
  "posted_date": "2023-01-14",
  "normalized_company_name": "Diverselynx"
  }
  ]
