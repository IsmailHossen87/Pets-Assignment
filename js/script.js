const btnAllSection = async() =>{
  const res =await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
  const data = await res.json();
  displayBtn(data.categories)
}
const displayBtn = (pets) => {
  pets.forEach(dat => {
    // console.log(dat)
    
    const btnSection = document.getElementById('buttonofanimal')
    const newbtn = document.createElement('div')
    newbtn.innerHTML =`
     <button class="btn hover:bg-btnclr hover:rounded-full">
     <img class="w-8" src=${dat.category_icon} alt="">
        ${dat.category}
       </button>
    `
    btnSection.append(newbtn)
  
  });
}
const showAnimal = async () => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
  const data = await response.json();
  displayAllCard(data.pets);  // Pass the 'pets' array to displayAllCard
}

const displayAllCard = (cards) => {

  cards.forEach((card) => {
    const {breed, category, date_of_birth,price, image, gender, vaccinated_status,pet_name}= card;
     const cardCcontainer = document.getElementById('card-container')
       const div = document.createElement("div")    
       div.innerHTML =`
       <div class="card  bg-base-100  border border-[#0E7A8126] ">
         <figure class="lg:px-6 px-4 pt-2 lg:pt-8">
           <img class="w-full rounded-lg" src=${image}  />
         </figure>
         <div class="p-2 lg:p-5 space-y-4 lg:space-y-5">
           <h3 class="text-[20px] font-bold text-[#131313]">${pet_name?pet_name: 'N/A'}      
           <p class="text-start text-base font-normal text-[#131313B3]">
             <i class="fa-solid fa-cubes mr-2"></i> Breed:${breed}
           </p>
           <p class="text-start text-base font-normal text-[#131313B3]">
             <i class="fa-solid fa-calendar-days mr-2"></i> Birth: ${date_of_birth?date_of_birth: 'N/A'}
           </p>
           <p class="text-start text-base font-normal text-[#131313B3]">
             <i class="fa-solid fa-venus mr-2"></i> Gender: ${gender?gender: "N/A"}
           </p>
           <p class="text-start text-base font-normal text-[#131313B3]">
             <i class="fa-solid fa-dollar-sign mr-2"></i> Price: ${price?price: "N/A"}
           </p>
           <hr class="w-full" />
           <div class="card-actions grid grid-cols-3 gap-2 mt-2">
             <button class="btn bg-white border-[#0E7A8126] outline-1">
               <i class="fa-regular fa-thumbs-up text-2xl "></i>
             </button>
             <button class="btn border-[#0E7A8126]  bg-white text-[18px] font-bold text-[#0E7A81] p-1">Adopt</button>
             <button class="btn border-[#0E7A8126] bg-white text-[18px] font-bold text-[#0E7A81] p-1">Details</button>
             <div></div>
           </div>
         </div>
       </div>
       `
       cardCcontainer.appendChild(div)

  });
}

showAnimal()
btnAllSection()