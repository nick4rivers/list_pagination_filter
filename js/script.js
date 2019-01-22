/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// jshint esversion:6


// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/************************
 * Page Level Constants *
 ************************/

// get the entire page
const pageDiv = document.querySelector('.page');
// get the student ul
const studentList = document.querySelector('.student-list');
// get my list of all student list elements
const students = document.getElementsByClassName('student-item');
// get a constant for number of pages I'll need
const numberOfPages = Math.ceil(students.length / 10)

// will set dynamically later
let page = 1;


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
   };
}

showPage(page, students);


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
   };

   // create a paginationDiv
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';

   // put the ul in the div
   paginationDiv.appendChild(paginationList);

   // place the div after the student ul
   pageDiv.appendChild(paginationDiv);
}
createPagination();

/*****************************************
 * Now let's add the button functionality *
 * ***************************************/

 paginationList.addEventListener('click', (e) => {
   e.preventDefault();
   page = e.target.textContent;
   showPage(page, students);

   // reset the links
   const linksLength = paginationList.children.length;
   const links = paginationList.children
   for (let i = 0; i < linksLength; i++) {
      links[i].firstChild.classList.remove('active');
   }
   // and add active where it matches
   e.target.className = 'active';
 });


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.