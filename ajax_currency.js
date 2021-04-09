document.addEventListener('DOMContentLoaded',() => {

    document.querySelector("#currency_form").onsubmit = () => {

        let api_endpoint_url = 'https://api.exchangeratesapi.io/latest'
        let base_currency = document.querySelector("#base_currency").value
        let api_endpoint = `${api_endpoint_url}?base=${base_currency}`

        const request = new XMLHttpRequest();
        request.open('GET',api_endpoint);

        request.onload = () => {
            const data = JSON.parse(request.responseText);
            console.log(data)
            results_html_element = proccess_response(data);

            document.querySelector("#result").innerHTML = results_html_element;
        }

        request.send()

        return false
    }
})

function process_response(data) {
    let base_currency = document.querySelector("#base_currency").value;
    let target_currency = document.querySelector("#to_currency").value;
    let amount = document.querySelector("#amount").value;
    let conversion = data['rates'][target_currency] * amount;

    heml_element = `<span> ${amount} ${base_currency} in ${traget_currency} is ${conversion}`
    return heml_element;
}
