const eventDetails = async() => {
    try { 
        const response = await fetch(
            "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events"
        )
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
};
const eventDetail = async(id) => {
    try { 
        const response = await fetch(
            `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`
        )
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
};
const showEventDetails = (event) => {
    const $detailsBox = document.querySelector("#details")
    $detailsBox.innerHTML = `
    <h3>${event.name}</h3>
    <p><strong>ID:</strong> ${event.id}</p>
    <p><strong>Date:</strong>${new Date(event.date).toLocaleString()}</p>
    <p><strong>Description:</strong> ${event.description}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    `;
};;
const displayResults = async() => {
    const events = await eventDetails();
    $app = document.querySelector("#app");
    $h2 = document.createElement("h2");
    $h2.textContent = "Upcoming events";
    $app.append($h2);

    const $detailsBox = document.createElement("div");
    $detailsBox.id = "details";
    $app.append($detailsBox);
    

    for (let i = 0; i < events.data.length; i++) {
        const $button = document.createElement("button");
        const eventData = events.data[i];

    
           $button.addEventListener("click", async ()=> {
            const result = await eventDetail(eventData.id);
            if (result.data) {
                showEventDetails(result.data);
            }
        });
       $button.textContent = `Event ${i + 1} ${eventData.name}`;
        $app.append($button);

         }
};


displayResults()