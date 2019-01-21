/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// jshint esversion:6


// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// get the entire page
const pageDiv = document.querySelector('.page');

// get the student ul
const studentList = document.querySelector('.student-list');

// get my list of all student list elements
const students = document.getElementsByClassName('student-item');
// check out the length
console.log(students.length);

// get a constant for number of pages I'll need
const numberOfPages = Math.ceil(students.length / 10)



/*****************************************
 * let's create the page button elements *
 * ***************************************/

function createPagination() {
   // First, the unordered list for the pages
   const paginationList = document.createElement('ul');

   // Loop to build the list items
   for (let i = 0; i < numberOfPages; i += 1) {
      const paginationItem = document.createElement('li');
      // do the a tag
      const paginationTag = document.createElement('a');
      paginationTag.textContent = i + 1;
      paginationTag.href = '#';
      paginationItem.appendChild(paginationTag);
      // now put the li items in the ul
      paginationList.appendChild(paginationItem);
   };

   // create a paginationDiv
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';

   // put the ul in the div
   paginationDiv.appendChild(paginationList);
   console.log(pageDiv);

   // place the div after the student ul
   pageDiv.appendChild(paginationDiv);
}

createPagination();






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