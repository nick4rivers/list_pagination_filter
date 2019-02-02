/* jshint esversion: 6 */


/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/************************
 * Global Variables     *
 ************************/

// get the entire page
const pageDiv = document.querySelector('.page');
// get my list of all student list elements
const students = document.getElementsByClassName('student-item');
// get a constant for number of pages I'll need
const numberOfPages = Math.ceil(students.length / 10);
// get the page header to append the search bar
const pageHeader = document.querySelector('.page-header');

// start at page 1
let page = 1;

// filter on page load
showPage(page, students);


/*******************************************
 * The Filter Function for Showing Content *
 * *****************************************/
function showPage(page, items) {
   let minStudent = (page * 10) - 10;
   let maxStudent = (page * 10) - 1;
   // loop and set display
   for (let i = 0; i < items.length; i++) {
      if (i >= minStudent && i <= maxStudent) {
         items[i].style.display = 'block';
      } else {
         items[i].style.display = 'none';
      }
   }
}

/*/*******************************************
 * Let's add the search bar                  *
 * *****************************************/

//  create the div
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';

// create the search input
const searchInput = document.createElement('input');
searchInput.placeholder = "Search for students...";

// create the button
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';

// append input and button to div
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);

// append to the page header
pageHeader.appendChild(searchDiv);


/*/******************************************
 * search bar functionality                 *
 * *****************************************/

// get the text input on submit
searchInput.addEventListener('keyup', (e) => {
   e.preventDefault();
   // get the value
   const searchTerm = e.target.value.toLowerCase();
   Array.from(students).forEach(function(student) {
      const searchName = student.getElementsByTagName('h3')[0].textContent;
      if(searchName.toLowerCase().indexOf(searchTerm) != -1) {
         student.style.display = 'block';
      } else {
         student.style.display = 'none';
      }
   });
});


// update pagination code to run on new collection



/*****************************************
 * let's create the page button elements *
 * ***************************************/

const paginationList = document.createElement('ul');

function createPagination() {
   // First, the unordered list for the pages
   
   // Loop to build the list items
   for (let i = 0; i < numberOfPages; i += 1) {
      const paginationItem = document.createElement('li');
      // do the a tag
      const paginationTag = document.createElement('a');
      paginationTag.textContent = i + 1;
      paginationTag.href = '#';
      if (paginationTag.textContent == page) {
         paginationTag.className = "active";
      }
      paginationItem.appendChild(paginationTag);
      // now put the li items in the ul
      paginationList.appendChild(paginationItem);
   }

   // create a paginationDiv
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';

   // put the ul in the div
   paginationDiv.appendChild(paginationList);

   // place the div after the student ul
   pageDiv.appendChild(paginationDiv);
}
createPagination();

/***********************************************
 * Now let's add the page button functionality *
 * *********************************************/

 paginationList.addEventListener('click', (e) => {
   e.preventDefault();
   page = e.target.textContent;
   showPage(page, students);

   // reset the links by looping to each one
   const linksLength = paginationList.children.length;
   const links = paginationList.children;
   for (let i = 0; i < linksLength; i++) {
      links[i].firstChild.classList.remove('active');
   }
   // and add active where it matches
   e.target.className = 'active';
 });
