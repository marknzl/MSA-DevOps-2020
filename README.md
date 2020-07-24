# MSA-DevOps-2020
![Build Status](https://dev.azure.com/msa-devops/msa-devops/_apis/build/status/marknzl.MSA-DevOps-2020?branchName=master)

This is my submission for the Microsoft Student Accelerator Phase 1 DevOps assignment.

# Intro
This repository contains code for a small React web-app which is utilized by Azure DevOps. The React web-app interacts with [my backend API](https://msa-backend.azurewebsites.net/) (you can find the repo [here](https://github.com/marknzl/MSA-Backend-2020)) and just displays a simple card grid of students. IMPORTANT NOTE: This isn't doubling as my frontend project! I just did this for fun. My frontend project submission can be found [here](https://github.com/marknzl/stonks)

# Pipeline implementations
So I have two basic pipelines: a build pipeline and a release pipeline. The build pipeline is used to automatically compile/build my project. This build pipeline gets triggered whenever commits are made to the `master` and `development` branches (per assignment instructions), and also whenever any commits are made to any branch starting with `features/*branch_name*` (e.g `features/search_bar`). The release pipeline basically takes committed code and deploys it into production on my Azure App Service, which you can find [here](https://msa-devops.azurewebsites.net); but unlike the build pipeline, the release pipeline is only triggered when builds have been made from the `master` branch. Doing this allows me to push new features to my web-app and still build the program, but only deploy it into production once those new features have been merged into the `master` branch. 
