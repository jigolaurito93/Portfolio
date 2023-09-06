const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links')

navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
})



  // ********** smooth scroll ************
  // select links
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      links.classList.remove("show-links");
  
      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      //
      let position = element.offsetTop - 62;
  
      window.scrollTo({
        left: 0,
        // top: element.offsetTop,
        top: position,
        behavior: "smooth"
      });
    });
  });


  // var tablinks = document.getElementsByClassName("tab-links")
  // var tabcontents = document.getElementsByClassName("tab-contents")
  
  // function opentab(tabname) {
  //   for (var tablink of tablinks) {
  //     tablink.classList.remove("active-link");
  //   }
  //   for (var tabcontent of tabcontents) {
  //     tabcontent.classList.remove("active-tab");
  //   }
  //   this.currentTarget.classList.add("active-link")
  //   document.getElementById(tabname).classList.add("active-tab")
  //   console.log(tabname)
  // }


// document.addEventListener("click", function(event) {
//   console.log(event.target["id"])
//   removeActiveLink()
  
 
//   // remove invi

//   // If EXPERIENCE contains inactive-link
//   if (event.target.classList.contains("inactive-link")) {
//     // Remove inactive-link
//     event.target.classList.remove("inactive-link")
//     // experience word
//     var targetName = event.target["id"]

//     // .experience class 
//     var contentShow = document.querySelector('.' + targetName);
//     console.log(contentShow)
//     // add .show class on contents
//     contentShow.classList.add("show")

//     // remove .invi class from contents
//     contentShow.classList.remove("invi")    
  
//   }})

// function removeActiveLink() {
//   // id = skills
//   var activeLink = document.querySelector(".active-link")
//   // skill word
//   var toRemove = activeLink["id"]
//   // skills content
//   var contentRemove = document.querySelector("." + toRemove)
//   // Remove .SHOW on skills content
//   contentRemove.classList.remove("show")
//   // Add .INVI on skills content
//   contentRemove.classList.add("invi")
//   // Remove .active-link on skills options
//   activeLink.classList.remove(".active-link")



  
// }

let options = document.querySelectorAll('.tab-links');
for (let i=0; i < options.length; i++) {
  options[i].addEventListener('click', function(){

    let contents = document.querySelectorAll('.tab-contents');
    for (let i= 0; i < contents.length; i++) {
      if (contents[i].id == 'show'){
        contents[i].setAttribute('id', 'hide')
      } 
    }


    let word = this.id
    document.querySelector('.' + word).setAttribute('id', 'show')
    
   
  })
}


