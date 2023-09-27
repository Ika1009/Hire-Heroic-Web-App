const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '9212a11f9dmshc97838dd208b14dp1855e4jsn8d3a2ab0c424',
    'X-RapidAPI-Host': 'indeed11.p.rapidapi.com'
  },
  body: JSON.stringify({
    search_terms: 'sales manager',
    location: 'United States',
    page: '1'
  })
};
const sample_response_body =
  [{
    "date": "Just posted",
    "job_title": "Sales Manager",
    "company_name": "Swire Coca-Cola",
    "location": "Bellevue, WA",
    "salary": "$75,475 - $94,344 a year",
    "url": "https://www.indeed.com/rc/clk?jk=5fbaba1a7502d47a&fccid=7c88dd3822fc77f7&vjs=3",
    "summary": "Who is Swire Coca-Cola? We are one of the largest bottlers of Coca-Cola and other beverage brands in America. Our 7,000 hardworking and passionate employees…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "30th July 2023",
    "job_title": "Production/ Sales Manager",
    "company_name": "360 PAINTING OF PINEHURST",
    "location": "Pinehurst, NC 28374",
    "salary": "",
    "url": "https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0CoZx6RZ76Kz2BC5LaLJVXH_1oYGbR7vq7wgU_JS4Ka__sklYchdE95iAkMWBMUAi3efRoLE878xitkzda5Ol3A9Mrzsp-woAz4IZKCba7ixCga4uEu94OUz6yJF2kZRbBzj5owBO-fSDQF2XP3ykES9hziI_SmWk1djnAK1sY8dIaN0vfaz7A5bOV1yEOkx0VSYpYCNBrHHRAkSF_30NxGxDcRNanOCR2bjaEGzTjEoNxyHBsZyyEDi8hAQRrr0P8L06e-DBvSVUcsDPfOAyp34-WuIeG1uCPiOLbrrIkNEt9TLvEGnfN1ZrYcINgUVHyeqdKC_eILUQ3mf_2FXBoKZUuP1fkL7dKTbFP1r4V9ntW2n2L-d1s9R4xYA0oRseBStA5KsA7V2Y0rznaZRxbKRRJWu0VPl1MJbKWQJJGjTp6GB5mJPfuhEUoa-w53XpnKtoS8KOK6tqwVcV5OTPMvlE2DMeoygWavw4dge4MN6jFUqvcPrdfq-JSMrw87uOb73Y6dhjxOYsCwEwYtTMkyJWPLslHOrdUPV8x19eqab71Cg3CdXnLJGKpCGl-IYqaWzPsKeWXN9s2HdefmrXHL1pgobtl3Cd1IIN_zIOjh2asz8BaOpBjalJi4uIGURA__bxGLJTdoRyzF9n222SJYSNTOz6cTt-Lp53VDBXjnLgMZkk4WHwOGtR4H4tPr-i6ZuK4sA-irVrnFL9YToQb8dQ0rAIFF-XRzzU3DopdFvW-DJaBVqyj2XRfiL3z1XaetjdRDYn184whi_8qLs251du0ZEpA6fV2gFluj4c1_eNbS-OufY6GZ&xkcb=SoCC-_M3QzCwefQ9QR0KbzkdCdPP&p=1&fvj=0&vjs=3",
    "summary": "Production/ Sales Manager 360 Painting of Pinehurst Production Manager Duties: Key Responsibilities and Duties (Weekly/Daily): - Recruit, interview, and…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Regional Sales Manager",
    "company_name": "Humanscale",
    "location": "Los Angeles, CA 90017 (Downtown area)",
    "salary": "$85,536 - $124,763 a year",
    "url": "https://www.indeed.com/rc/clk?jk=9e07899e6f47faed&fccid=9ade95319a5a0818&vjs=3",
    "summary": "Company Overview: Humanscale is the premier designer and manufacturer of ergonomic products that improve health and comfort at work. We have a focus on…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Institutional Relationship Manager",
    "company_name": "CAPTRUST",
    "location": "Remote in Township of Warren, NJ 07059",
    "salary": "",
    "url": "https://www.indeed.com/rc/clk?jk=6b0fc65cdda2485f&fccid=9c6b378c8ffe3b09&vjs=3",
    "summary": "Overview: WHO are we looking for? CAPTRUST is seeking a dynamic Institutional Relationship Manager who will provide high-level service to new and existing…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "General Sales Manager - VW BRANDON",
    "company_name": "Qvale Auto Group, Inc.",
    "location": "Tampa, FL 33619",
    "salary": "",
    "url": "https://www.indeed.com/rc/clk?jk=8e04cb8c11edd0ae&fccid=037c8684178e3dc9&vjs=3",
    "summary": "Qvale Auto Group has over 70 Years in the automotive industry, beginning in California and now owning and operating 3 dealerships in Florida. \"We are a team…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Territory Sales Manager",
    "company_name": "Prayon Inc",
    "location": "Remote",
    "salary": "$100,000 a year",
    "url": "https://www.indeed.com/rc/clk?jk=cb637713b71ad14f&fccid=c9dac5f7119a835b&vjs=3",
    "summary": "Sells products by identifying and meeting customer needs in designated territory. ESSENTIAL RESPONSIBILITIES & FUNCTIONS INCLUDE the following, others may be…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Regional Sales Manager",
    "company_name": "AMETEK, Inc.",
    "location": "Remote",
    "salary": "Estimated $118K - $149K a year",
    "url": "https://www.indeed.com/rc/clk?jk=abfc92159305acee&fccid=212b69108ea3ebdd&vjs=3",
    "summary": "About Us: AMETEK is using innovation to make the world a better place, technology to improve lives, and talent to solve challenges that matter. We need…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "District Sales Manager",
    "company_name": "Zips Car Wash",
    "location": "Little Rock, AR 72212 (River Mountain area)",
    "salary": "$60,000 - $80,000 a year",
    "url": "https://www.indeed.com/rc/clk?jk=b85f8649cc8d3634&fccid=780d1c1c8927e256&vjs=3",
    "summary": "Overview: A District Sales Manager will create and sustain programming efficiency through effective recruiting, site team management, market participation, &…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Sales - Store Manager",
    "company_name": "Russell Cellular- Authorized Verizon Dealer",
    "location": "Livingston, TN 38570",
    "salary": "Up to $23 an hour",
    "url": "https://www.indeed.com/rc/clk?jk=d52726e96ca1f8d5&fccid=368e41a6b383665d&vjs=3",
    "summary": "Why Russell Cellular? Starting pay is up to $23 hourly! • Unlimited commissions based on performance and commission • Health, dental, vision, and life…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Sales - District Sales Manager",
    "company_name": "Russell Cellular- Authorized Verizon Dealer",
    "location": "Jackson, WY 83002",
    "salary": "Estimated $61.4K - $77.7K a year",
    "url": "https://www.indeed.com/rc/clk?jk=9325c875ce07ce8f&fccid=368e41a6b383665d&vjs=3",
    "summary": "Why Russell Cellular? • Health, dental, vision, and life insurance as well as paid sick days and company holidays • Employer matched 401K after 1 year •…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Account Manager- Grocery Retail",
    "company_name": "Dirty Hands LLC",
    "location": "Washington, DC 20005 (Logan Circle area)",
    "salary": "$19.23 - $28.84 an hour",
    "url": "https://www.indeed.com/rc/clk?jk=266d30759f7166ac&fccid=9a96292cfe9b43b2&vjs=3",
    "summary": "This is a full-time position with a full wage range of $19.23 - $28.84 per hour with eligibility for a quarterly bonus. Starting salary is based on a variety…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Key Account Manager",
    "company_name": "Schneider Electric",
    "location": "Remote in Baltimore, MD 21210",
    "salary": "",
    "url": "https://www.indeed.com/rc/clk?jk=03071506ab0bef82&fccid=8dc4399ddb463d4a&vjs=3",
    "summary": "Job Description: Schneider Electric™ creates connected technologies that reshape industries, transform cities and enrich lives. Our 160,000 employees thrive…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Sales Manager",
    "company_name": "San Francisco Marriott Fisherman's Wharf",
    "location": "San Francisco, CA 94133 (North Beach area)",
    "salary": "$70,000 - $90,000 a year",
    "url": "https://www.indeed.com/rc/clk?jk=cdd6f256d62ad484&fccid=99a191c83f5a5b93&vjs=3",
    "summary": "Pay Range: $70,000-90,000 per year From basic benefits to added advantages, Crestline Hotels & Resorts does what it takes to take care of our Associates—both…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "Manager, Sales Planning",
    "company_name": "Caleres Inc.",
    "location": "St. Louis, MO 63105",
    "salary": "Estimated $75.9K - $96.1K a year",
    "url": "https://www.indeed.com/rc/clk?jk=e51bd2aab18ae156&fccid=2ac02422d1002007&vjs=3",
    "summary": "Overview: We are Caleres, a global footwear company with brands that fit people’s lives. We are ferocious about fit and living our mission of inspiring…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  },
  {
    "date": "Just posted",
    "job_title": "JDL - 3PL Sales Manager - Warehousing Solution/Fulfillment - Remote",
    "company_name": "JD.com",
    "location": "Remote in United States",
    "salary": "$82,000 - $132,510 a year",
    "url": "https://www.indeed.com/rc/clk?jk=50a296316cc8c7a2&fccid=68cb92e51cfd6a04&vjs=3",
    "summary": "Location: New York, New York Job Type: Full-time Job Description JD Logistics is looking for a results-driven individual with supply chain sales experience…",
    "current_page_num": "1",
    "next_page_url": "https://www.indeed.com/jobs?q=sales+manager&l=United+States&radius=35&sort=date&start=10",
    "has_next_page": "true"
  }]


try {
  // const response = await fetch('https://indeed11.p.rapidapi.com/', options);
  // if(response.ok) {
  //   const data = await response.json().data;
  //   console.log(data);
  // } else {
  //   console.error('Response Error:', response);
  // }
  let body = sample_response_body;
  const jobs = body;

  // Assume you have a ul or ol with id 'job-list' in your HTML
  const jobList = document.getElementById('job-list');

  // Loop through each job in the response
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    // Now you can access each property of the job object
    const date = job.date;
    const jobTitle = job.job_title;
    const companyName = job.company_name;
    const location = job.location;
    const url = job.url;
    const summary = job.summary;

    // Create an li element
    const li = document.createElement('li');
    li.className = 'job-listing-item';

    // Show the "new" box only if the date is "Just posted"
    const newTag = date === 'Just posted' ? `<span class="new-tag">New</span>` : '';

    // Set its content
    li.innerHTML = `
        ${newTag}
        <div class="job-listing-post">
            <div class="job-listing-icon-content">
                <div class="job-listing-icon">
                    <img class="company_logo" src="https://pangian.com/wp-content/uploads/2023/06/PMA-Companies.jpg" alt="${companyName}">
                </div>
                <a href="${url}" target="_blank" class="job-listing-content-a">
                    <div class="job-listing-content">
                        <div class="job-listing-content-title">
                            <span class="job-listing-title">${jobTitle}</span>
                            <span class="job-listing-match"> | Low Match</span>
                        </div>
                        <div class="job-listing-content-cmp">
                            <span>${companyName}</span>
                        </div>
                        <div class="job-listing-content-price">
                            <span class="job-listing-price">Competitive Salary</span>
                            <span class="job-listing-country">| ${location} | </span>
                            <span class="job-listing-cate">Other</span>
                        </div>
                        <div class="job-listing-content-price">
                            <span class="job-listing-cate job-listing-time"><i class="fa fa-clock-o"></i>${date}</span>
                        </div>
                        <div class="job-listing-content-summary">
                            <span>${summary}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;

    // Append the li to the job list
    jobList.appendChild(li);
  }
} catch (error) {
  console.error('Error:', error);
}


//https://rapidapi.com/jaypat87/api/indeed11

