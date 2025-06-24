
fetch (
    ''
)
.then ((resp) => {
    if (resp.ok) {
        return resp.json();
    }
})
.then ((data) => {
    console.log(data);
})
