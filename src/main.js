async function getData() {
    try {
        let response = await axios.get("http://localhost:8585/students");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

$('#btn-add').click(async function() {
    try {
        await axios.post("http://localhost:8585/students", {
            "name": "Hồ Thanh Hải 2",
            "age": 18,
            "gender": "male",
            "phone": "0384631254"
        }); 
        console.log('Data posted successfully');
    } catch (error) {
        console.error(error);
    }
});