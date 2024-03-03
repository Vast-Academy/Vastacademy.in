// document.addEventListener('DOMContentLoaded', function() {
    // Create header element
    // var header = document.createElement('header');
    // header.classList.add('header_section');
  
    // Create container element
    // var container = document.createElement('div');
    // container.classList.add('container2');
  
    // Create top1 element
    // var top1 = document.createElement('div');
    // top1.classList.add('top1');
    // top1.innerHTML = `
    //   <div class="logo">
    //     <a href="index.html">
    //       <img src="images/Logo.png" alt="" width="120px">
    //     </a>
    //   </div>
    // `;
  
    // Create top2 element
    // var top2 = document.createElement('div');
    // top2.classList.add('top2');
    // top2.innerHTML = `
    //   <a class="navbar-brand" href="index.html">
    //     <span>Vast Academy</span>
    //   </a>
    // `;
  
    // Create top3 element
    // var top3 = document.createElement('div');
    // top3.classList.add('top3');
    // top3.innerHTML = `
    //   <button type="button" class="btn btn-primary"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Sign in</button>
    // `;
  
    // Create navigation bar
    // var navBar = document.createElement('nav');
    // navBar.classList.add('navbar');
    // navBar.classList.add('navbar-expand-lg');
    // navBar.classList.add('custom_nav-container');
    // navBar.innerHTML = `
    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <div class="navbar-nav ms-auto">
    //       <a class="nav-item nav-link active" href="index.html">Home</a>
    //       <a class="nav-item nav-link" href="allcourses.html">Courses</a>
    //       <a class="nav-item nav-link" href="services.html">IT Services</a>
    //       <a class="nav-item nav-link" href="client.html">Client</a>
    //       <a class="nav-item nav-link" href="https://aiita.org/study_centre/students_directory">Check-Online</a>
    //       <a class="nav-item nav-link" href="contact.html">Contact Us</a>
    //     </div>
    //     <div class="user_option">
    //       <a href="https://vacomputers.com/">
    //         <i class="fa fa-exchange" aria-hidden="true"></i>
    //         <span>VACOMPUTERS.COM</span>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-facebook" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-instagram" aria-hidden="true"></i>
    //       </a>
    //       <a href="">
    //         <i class="fa fa-youtube" aria-hidden="true"></i>
    //       </a>
    //       <form class="form-inline ">
    //         <button class="btn nav_search-btn" type="submit">
    //           <i class="fa fa-search" aria-hidden="true"></i>
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // `;
  
    // Append top1, top2, top3, and navBar to container
    // container.appendChild(top1);
    // container.appendChild(top2);
    // container.appendChild(top3);
    // container.appendChild(navBar);
  
    // Append container to header
    // header.appendChild(container);
  
    // Append header to hero_area
  //   var heroArea = document.querySelector('.hero_area');
  //   heroArea.appendChild(header);
  // });
  
  const buttonsInfo = [
    { text: "Website Model 1", url: "../model1/index.html" },
    { text: "Website Model 2", url: "../model2/index.html" },
    { text: "Website Model 3", url: "../model3/index.html" }
    
  ];

   // Function to create buttons dynamically
   function createButtons() {
    const container = document.createElement('div');
    container.classList.add('fixed-buttons');
    container.style.position = 'fixed';
    container.style.top = '85%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.zIndex = '9999'; 
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.margin = '10px';
    
    buttonsInfo.forEach(button => {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = button.text;
      buttonElement.style.display = 'block';
      buttonElement.style.width = '200px';
      buttonElement.style.height = '40px';
      buttonElement.style.marginBottom = '10px';
      buttonElement.style.margin = '20px';
      buttonElement.style.backgroundColor = 'white';
      buttonElement.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
      buttonElement.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
      buttonElement.style.color = 'black';
      buttonElement.style.border = 'none';
      buttonElement.style.cursor = 'pointer';
      buttonElement.style.transition = 'background-color 0.3s ease';
      buttonElement.style.fontSize = '20px';
      buttonElement.style.fontWeight = 'bold';

      buttonElement.addEventListener('click', () => {
        window.location.href = button.url;
      });

      // Button hover effect
      buttonElement.addEventListener('mouseover', () => {
        buttonElement.style.backgroundColor = '#0E2E50';
        buttonElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
        buttonElement.style.color = 'white';
      });

      buttonElement.addEventListener('mouseout', () => {
        buttonElement.style.backgroundColor = 'white';
        buttonElement.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
        buttonElement.style.color = 'black';
      });

      container.appendChild(buttonElement);
    });

    document.body.appendChild(container);

    // Create "Select Model" button
    const selectModelButton = document.createElement('button');
    selectModelButton.textContent = "Select This Model";
    selectModelButton.style.position = 'fixed';
    selectModelButton.style.top = '70%';
    selectModelButton.style.left = '50%';
    selectModelButton.style.transform = 'translate(-50%, -50%)';
    selectModelButton.style.width = '200px';
    selectModelButton.style.height = '40px';
    selectModelButton.style.backgroundColor = 'white';
    selectModelButton.style.boxShadow = '3px 3px 3px 4px rgba(0, 0, 0, 0.3)';
    selectModelButton.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
    selectModelButton.style.color = 'black';
    selectModelButton.style.border = 'none';
    selectModelButton.style.cursor = 'pointer';
    selectModelButton.style.transition = 'background-color 0.3s ease';
    selectModelButton.style.fontSize = '20px';
    selectModelButton.style.fontWeight = 'bold';

    // Add event listener for "Select Model" button
    selectModelButton.addEventListener('click', () => {
        // Your logic for handling the "Select Model" button click goes here
        console.log("Select Model button clicked");
    });

    // Append "Select Model" button to the body
    document.body.appendChild(selectModelButton);
}
  

  
  // Call the function to create buttons when the page loads
  document.addEventListener('DOMContentLoaded', createButtons);