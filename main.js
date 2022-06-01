

console.log(customers)
//access to the customer list

const customerList = document.querySelector('#customerList')
//get the main box to put data in 

//make JS build one of the boxes for each report 
for (let customer of customers) {
    let customerElement = document.createElement("div")
    customerElement.classList.add("customer")

    //customer image
    let pictureElement = document.createElement("img")
    pictureElement.src = `${customer.picture.large}`
    pictureElement.alt = "Customer Thumbnail"
    customerElement.appendChild(pictureElement)


    //full name
    let nameElement = document.createElement("h2")
    nameElement.innerText = `Name: ${customer.name.title} ${customer.name.first} ${customer.name.last}`
    nameElement.classList.add("name")
    customerElement.appendChild(nameElement)


    //address
    let locationElement = document.createElement("div")
    let stateAbbr = (nameToAbbr(customer.location.state))
    locationElement.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city}, ${stateAbbr}, ${customer.location.postcode}`
    customerElement.appendChild(locationElement)

    //phone number
    let phoneElement = document.createElement("div")
    phoneElement.innerText = `Cell Phone: ${customer.cell}`
    customerElement.appendChild(phoneElement)

    //birthday
    let dobElement = document.createElement("div")
    let dobFormat = moment(customer.dob.dates).format("MMM Do YYYY");
    dobElement.innerText = `DOB: ${dobFormat}`
    customerElement.appendChild(dobElement)

    //customer dates
    let registeredElement = document.createElement("div")
    let registeredDate = moment(customer.registered.date).format("MMM Do YYYY");
    registeredElement.innerText = `Customer Since: ${registeredDate}`
    customerElement.appendChild(registeredElement)
    customerList.appendChild(customerElement)

}
