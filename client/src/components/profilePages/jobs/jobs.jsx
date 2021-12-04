import React from 'react';
import jobStyles from "./jobs.module.css";

export default function jobs(){
    return(
      <>
      <div className={jobStyles.aboutusBackground}>
<body>
  <header>
    <div class="container">
      <h1>Job Search App</h1>
      <h2>Find your perfect job today!</h2>
      <form id="search-form">
          <input type="text" class="form-control" placeholder="Job Title" id="search"/>
          <input type="text" class="form-control" placeholder="Location" id="location"/>
          <button class="btn btn-block btn-primary">Search</button>
        </form>
    </div>
  </header>
  <main>
    <div class="container">
          <div class="loading-element">
          </div>
          <div class="result-container"></div>        
    </div>
  </main>
  <script src="./job.js"></script>
</body>
</div>
</>
  );
}