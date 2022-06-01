console.log(customers)
//access to the customer list

const customerList = document.querySelector('#customerList')
//get the main box to put data in 

//make JS build one of the boxes for each report 
for (let customer of customers) {
    let customerElement = document.createElement("div")
    customerElement.classList.add("customer")

    let contentElement = document.createElement("article")
    contentElement.classList.add("box")

    //customer image
    let pictureElement = document.createElement("img")
    pictureElement.src = `${customer.picture.thumbnail}`
    pictureElement.alt = "Customer Thumbnail"
    pictureElement.classList.add("img")
    contentElement.appendChild(pictureElement)
    customerElement.appendChild(contentElement)

    //full name
    let nameElement = document.createElement("h2")
    nameElement.classList.add("h2")
    nameElement.innerText = `Name: ${customer.name.title} ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(nameElement)
    //address
    let locationElement = document.createElement("div")
    locationElement.classList.add("box")
    locationElement.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city}, ${customer.location.state}, ${customer.location.postcode}`
    contentElement.appendChild(locationElement)

    //phone number
    let phoneElement = document.createElement("div")
    phoneElement.classList.add("box")
    phoneElement.innerText = `Cell Phone: ${customer.cell}`
    contentElement.appendChild(phoneElement)

    //birthday
    let dobElement = document.createElement("div")
    dobElement.classList.add("box")
    dobElement.innerText = `DOB: ${customer.dob.date}`
    contentElement.appendChild(dobElement)

    //customer dates
    let registeredElement = document.createElement("div")
    registeredElement.classList.add("box")
    registeredElement.innerText = `Registered: ${customer.registered.date}`
    contentElement.appendChild(registeredElement)

    customerList.appendChild(customerElement)

}