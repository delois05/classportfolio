console.log('scripts loaded')
const DISCOUNT_RATE = 15

function computePhotosTotal(event, unitCost) {
    event.preventDefault()//stop the page from reloading

    const numberOfPhotos = Number(document.querySelector('input[name="numberOfPhotos"]').value)//grab the value from the event

    //validate inputs
    if (typeof numberOfPhotos !== 'number' || typeof unitCost !== 'number') {
        throw alert('Error: incorrect data submited')
    }


    //compute total cost
    const totalCost = numberOfPhotos * unitCost;
    const discount = (totalCost >= 500) ? (totalCost * (DISCOUNT_RATE / 100)) : 'N/A';
    const finalCost = discount == 'N/A' ? totalCost : totalCost - discount


    //show the total cost
    document.querySelector('input[name="totalCost"]').value = '$' + totalCost;
    document.querySelector('input[name="discount"]').value = '$' + discount;
    document.querySelector('input[name="finalCost"]').value = '$' + finalCost;



}