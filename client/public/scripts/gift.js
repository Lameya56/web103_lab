const renderGift = async () => {
    // Parse the ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());
    // Fetch gift data from the /gifts endpoint
    const response = await fetch('/gifts');
    const data = await response.json();
    // Get the main content element
    const giftContent = document.getElementById('gift-content');
    let gift;
    // If data exists, find the gift with the matching ID
    if (data) {
        gift = data.find(gift => gift.id === requestedID);
        if (gift) {
            document.getElementById('image').src = gift.image;
            document.getElementById('name').textContent = gift.name;
            document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy;
            document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint;
            document.getElementById('audience').textContent = 'Great For: ' + gift.audience;
            document.getElementById('description').textContent = gift.description;
            document.title = `UnEarthed - ${gift.name}`;
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Gifts Available 😞';
            giftContent.appendChild(message);
        }
    }
};

renderGift();
